<template>
	<div class="reportPage">
		<PageHeader :title="title" :items="items" />
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

					<!-- <div class="col-sm-6 col-md-3 d-flex justify-content-end">
						<div class="text-center mr-1">
							<router-link to="/admin/addNama">
								<b-button v-b-modal.modal-center variant="success"
									><i class="fa fa-plus mr-1"></i>&nbsp; Nama</b-button
								>
							</router-link>
						</div>
					</div> -->
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
						:filter="filter"
						:filter-included-fields="filterOn"
						@filtered="onFiltered"
					>
						<template v-slot:cell(created_at)="data">
							<td>{{ data.item.created_at | moment }}</td>
						</template>
						<template v-slot:cell(action)>
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
import moment from "moment";
import PageHeader from "../../components/page-header.vue";

export default {
	data() {
		return {
			getReportUrl: "http://72.26.117.203:3002/getReport",
			title: "Report Kata",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Report",
					active: true,
				},
			],
			loading: "",
			dataKata: [],
			jumlahData: null,
			totalRows: 1,
			currentPage: 1,
			perPage: 5,
			pageOptions: [5, 10, 25, 50],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "id", label: "ID", sortable: true },
				{ key: "kata", label: "Kata", sortable: true },
				{ key: "bidang", label: "Bidang", sortable: true },
				{ key: "created_at", label: "Tanggal report", sortable: true },
				{ key: "action" },
			],
		};
	},

	created() {
		this.getReport();
		this.loading = true;
	},

	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},

	components: {
		PageHeader,
		EllipsisLoader,
	},

	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.dataKata.length;
		},
	},

	methods: {
		async getReport() {
			const report = await axios.get(this.getReportUrl);
			console.log(report.data);
			this.dataKata = report.data;
			this.loading = false;
			this.jumlahData = report.data.length;
		},

		onFiltered(filteredItems) {
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},
	},
	filters: {
		moment: function (date) {
			return moment(date).format("Do MMMM YYYY");
		},
	},
};
</script>

<style lang="scss" scoped>
</style>