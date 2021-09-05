<template>
	<div class="advPage">
		<div class="card" style="min-height: 70vh">
			<div class="card-body">
				<div class="row justify-content-between">
					<div class="col-sm-12 col-md-4">
						<div id="tickets-table_length" class="dataTables_length">
							<label class="d-inline-flex align-items-center">
								Show&nbsp;
								<b-form-select
									v-model="perPage"
									size="sm"
									:options="pageOptions"
									class="row-page"
								></b-form-select
								><em style="color: #a4a6ab"> From {{ jumlahData }} data</em>
							</label>
						</div>

						<!-- Search -->
						<!-- <div class="col-sm-12 col-md-4">
					<div
						id="tickets-table_filter"
						class="dataTables_filter text-md-right"
					>
						<label class="d-inline-flex align-items-center">
							Search:
							<b-form-input
								type="search"
								class="form-control form-control-sm ml-2"
							></b-form-input>
						</label>
					</div>
				</div> -->
						<!-- End search -->
					</div>

					<div class="col-sm-6 col-md-3 d-flex justify-content-end">
						<div class="text-center mr-1">
							<router-link to="/admin/addAdv">
								<b-button v-b-modal.modal-center variant="success"
									><i class="fa fa-plus"></i>&nbsp; Iklan</b-button
								>
							</router-link>
						</div>
					</div>
				</div>

				<div class="col-md-10">
					<label class="d-inline-flex align-items-top">
						<EllipsisLoader :loading="loading"></EllipsisLoader>
					</label>
				</div>
				<div class="table-responsive">
					<b-table
						:items="fileInfos"
						:fields="fields"
						responsive="sm"
						:per-page="perPage"
						class="text-left"
						:current-page="currentPage"
						:sort-by.sync="sortBy"
						:sort-desc.sync="sortDesc"
						:filter-included-fields="filterOn"
					>
						<template v-slot:cell(images)="data">
							<b-avatar :src="getImg + data.item.images" size="6rem"></b-avatar>
						</template>
						<template v-slot:cell(action)="">
							<a
								href="javascript:void(0);"
								class="mr-3 text-primary"
								v-b-tooltip.hover
								data-toggle="tooltip"
								title="Edit"
							>
								<i class="mdi mdi-pencil font-size-18"></i>
							</a>
							<a
								href="javascript:void(0);"
								class="text-danger"
								v-b-tooltip.hover
								title="Delete"
								@click="deleteKata(data.item._id)"
							>
								<i class="mdi mdi-trash-can font-size-18"></i>
							</a>
						</template>
					</b-table>
				</div>
				<div class="row">
					<div class="col">
						<div class="dataTables_paginate paging_simple_numbers float-right">
							<ul class="pagination pagination-rounded mb-0">
								<!-- pagination -->
								<b-pagination
									v-model="currentPage"
									:total-rows="rows"
									:per-page="perPage"
								></b-pagination>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { EllipsisLoader } from "vue-spinners-css";
import axios from "axios";

export default {
	data() {
		return {
			selectedFiles: undefined,
			currentFile: undefined,
			loading: false,
			progress: 0,
			getImg: `http://72.26.117.203:3002/images/client/`,
			message: "",
			fileInfos: [],
			jumlahData: null,
			dataKata: [],
			totalRows: 1,
			currentPage: 1,
			perPage: 5,
			pageOptions: [5, 10, 25, 50],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			formFields: {
				title: null,
				images: null,
				detail: null,
			},
			fields: [
				{ key: "id", label: "ID", sortable: true },
				{ key: "images", label: "Gambar", sortable: true },
				{ key: "title", label: "Judul", sortable: true },
				{ key: "details", label: "Keterangan", sortable: true },
				{ key: "action", label: "Action", sortable: true },
			],
		};
	},

	components: {
		EllipsisLoader,
	},

	created() {
		this.getData();
	},

	computed: {
		rows() {
			return this.fileInfos.length;
		},
	},

	methods: {
		async getData() {
			const img = await axios.get("http://72.26.117.203:3002/getAdv");
			console.log(img.data.data);
			this.fileInfos = img.data.data;
		},
		submitForm() {
			this.progress = 0;
			let formData = new FormData();

			formData.append("detail", this.formFields.detail);
			formData.append("title", this.formFields.title);
			formData.append("images", this.formFields.images);

			axios
				.post("http://72.26.117.203:3002/postAdv", formData)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
			this.formFields.title = "";
			this.formFields.images = "";
			this.formFields.detail = "";
			this.getData();
		},
		// upload() {
		// 	this.progress = 0;

		// 	this.currentFile = this.selectedFiles.item(0);
		// 	UploadService.upload(this.currentFile, (event) => {
		// 		this.progress = Math.round((100 * event.loaded) / event.total);
		// 	})
		// 		.then((response) => {
		// 			this.message = response.data.message;
		// 			return UploadService.getFiles();
		// 		})
		// 		.then((files) => {
		// 			this.fileInfos = files.data;
		// 		})
		// 		.catch(() => {
		// 			this.progress = 0;
		// 			this.message = "Could not upload the file!";
		// 			this.currentFile = undefined;
		// 		});

		// 	this.selectedFiles = undefined;
		// },
		selectFile(event) {
			this.selectedFiles = this.$refs.file.files;
			this.formFields.images = event.target.files[0];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>