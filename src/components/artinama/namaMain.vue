<template>
	<div class="mainNama">
		<div class="row mb-5">
			<div class="col-lg-12 mx-auto">
				<div class="bg-white p-5 rounded shadow">
					<!-- Custom rounded search bars with input group -->
					<!-- <form action=""> -->
					<p>Cari di Database nama kami</p>
					<b-form @submit="onSubmit">
						<b-input-group id="searchBar" class="search mt-4">
							<template #prepend> </template>

							<b-form-input
								v-model="keyword"
								id="keyword"
								placeholder="Kata kunci"
								required
							></b-form-input>

							<template #append>
								<b-button variant="danger" id="searchButton" type="submit"
									>Cari</b-button
								>
							</template>
						</b-input-group>
						<b-alert
							v-model="showDismissibleAlert"
							class="mt-2"
							variant="danger"
							dismissible
						>
							{{ error }}
						</b-alert>
					</b-form>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Random Nama</h4>
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div id="tickets-table_length" class="dataTables_length">
							<label class="d-inline-flex align-items-center">
								Show&nbsp;
								<b-form-select
									v-model="perPage"
									size="sm"
									:options="pageOptions"
								></b-form-select
								>&nbsp;entries
							</label>
						</div>
					</div>
					<!-- Search -->
					<div class="col-sm-12 col-md-6">
						<div
							id="tickets-table_filter"
							class="dataTables_filter text-md-right"
						>
							<label class="d-inline-flex align-items-center">
								Search:
								<b-form-input
									v-model="filter"
									type="search"
									placeholder="Search..."
									class="form-control form-control-sm ml-2"
								></b-form-input>
							</label>
						</div>
					</div>
					<!-- End search -->
				</div>
				<!-- Table -->
				<div class="table-responsive mb-0">
					<b-table
						:items="tableData"
						:fields="fields"
						responsive="sm"
						:per-page="perPage"
						:current-page="currentPage"
						:sort-by.sync="sortBy"
						:sort-desc.sync="sortDesc"
						:filter="filter"
						:filter-included-fields="filterOn"
						@filtered="onFiltered"
					></b-table>
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
import axios from "axios";

export default {
	page: {
		title: "Advanced Table",
		meta: [{ name: "description", content: "ariNamw" }],
	},
	components: {},
	data() {
		return {
			tableData: [],
			keyword: "",
			error: "",
			loading: "",
			hasil: "",
			showDismissibleAlert: false,
			title: "Advanced Table",
			urlFind: "http://72.26.117.203:3002/findNama/",
			urlReport: "http://72.26.117.203:3002/report",
			items: [
				{
					text: "Tables",
					href: "/",
				},
				{
					text: "Advanced",
					active: true,
				},
			],
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "age",
			sortDesc: false,
			fields: [
				{ key: "judul_nama", label: "Nama", sortable: true },
				{ key: "kelamin_nama", label: "Kelamin", sortable: true },
				{ key: "asal_nama", label: "Asal", sortable: true },
				{ key: "isi_nama", label: "Arti Nama", sortable: true },
				{ key: "perfix_nama", label: "Prefix Nama", sortable: true },
			],
		};
	},
	created() {
		this.getNama();
	},
	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.tableData.length;
		},
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.items.length;
	},
	methods: {
		async getNama() {
			const response = await axios.get("http://72.26.117.203:3002/nama");
			// console.log("name", response);
			this.tableData = response.data;
		},
		/**
		 * Search the table data with search input
		 */
		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},

		async onSubmit(e) {
			e.preventDefault();
			const resp = await axios.get(this.urlFind + this.keyword);
			const data = resp.data;
			const row = data.length;

			if (row === 0) {
				this.showDismissibleAlert = true;
				this.error = "Nama tidak ditemukan";

				await axios.post(this.urlReport, {
					kata: this.keyword,
					bidang: "Nama",
				});
			} else {
				window.location.href = "/cari/artiNama/" + this.keyword;
			}
		},
	},
};
</script>
