<template>
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
						<router-link to="/admin/addMultiple">
							<b-button v-b-modal.modal-center variant="success"
								><i class="fa fa-plus"></i>&nbsp; Kata</b-button
							>
						</router-link>
					</div>

					<div class="text-center">
						<router-link to="/admin/addword">
							<b-button variant="success">&nbsp;Scrape</b-button></router-link
						>
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
					:items="dataKata"
					:fields="fields"
					responsive="sm"
					:per-page="perPage"
					class="text-left"
					:current-page="currentPage"
					:sort-by.sync="sortBy"
					:sort-desc.sync="sortDesc"
					:filter-included-fields="filterOn"
				>
					<!-- @filtered="onFiltered" -->
					<template v-slot:cell(keterangan)="data">
						<td v-html="data.item.keterangan"></td>
					</template>

					<template v-slot:cell(view)="data">
						<td v-html="data.item.view / 2"></td>
					</template>

					<template v-slot:cell(action)="data">
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
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import axios from "axios";
import Swal from "sweetalert2";

// import { FormWizard, TabContent } from "vue-form-wizard";

export default {
	// page: {
	// 	title: "Form Wizard",
	// 	meta: [{ name: "description" }],
	// },
	data() {
		return {
			getKamusUrl: "http://72.26.117.203:3002/kamus",
			loading: false,
			text: "",
			// kata: "",
			// makna: "",
			ket: "",
			title: "Form Wizard",
			items: [
				{
					text: "Forms",
					href: "/",
				},
				{
					text: "Form Wizard",
					active: true,
				},
			],
			dataHtml: [],
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
			fields: [
				{ key: "_id", sortable: true, label: "ID" },
				{ key: "kata", sortable: true, label: "Kata" },
				{ key: "keterangan", sortable: true, label: "Makna" },
				{ key: "View", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},
	created() {
		this.getKamus();
		this.loading = true;
	},
	components: {
		EllipsisLoader,
	},
	computed: {
		/** Total no. of records */
		rows() {
			return this.dataKata.length;
		},
	},

	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},
	methods: {
		handleFilter(val) {
			clearTimeout(this.$_timeout);
			this.$_timeout = setTimeout(() => {
				this.criteria = val;
			}, 150); // set this value to your preferred debounce timeout
		},

		async getKamus() {
			try {
				const response = await axios.get(this.getKamusUrl);
				this.dataHtml = response.data;
				this.jumlahData = response.data.length;
				String.prototype.escapeSpecialChars = function () {
					return (
						this.replace(/&lt;\/b&gt;/g, "</b>")
							/* eslint-disable */
							.replace(/&lt;b&gt;/g, "<b>")
							.replace(/&lt;\/sup&gt;/g, "</sup>")
							.replace(/&lt;sup&gt;/g, "<sup>")
							.replace(/&lt;\/i&gt;/g, "</i>")
							.replace(/&lt;i&gt;/g, "<i>")
							.replace(/&lt;br&gt;/g, "<br>")
							.replace(/\\b/g, "\\b")
							.replace(/\\f/g, "\\f")
					);
				};

				var myJSONString = JSON.stringify(this.dataHtml);
				var myEscapedJSONString = myJSONString.escapeSpecialChars();
				this.loading = false;
				this.dataKata = JSON.parse(myEscapedJSONString);
			} catch (err) {
				console.log(err);
			}
		},

		// Delete Product
		async deleteKata(id) {
			console.log(id);
			try {
				await axios.delete(`http://72.26.117.203:3002/kamus/${id}`);
				this.getKamus();
				Swal.fire({
					icon: "info",
					title: "Word Deleted",
					text: "Successfully deleted word!",
				});
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.row-page {
	width: 100px;
}

.lds-ellipsis {
	position: absolute;
	margin-top: 50px;
}
</style>