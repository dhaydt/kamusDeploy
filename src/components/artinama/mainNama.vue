<template>
	<div class="artinama m-4">
		<div class="kbbi-search">
			<b-container class="p-4">
				<b-row>
					<b-col sm="12" lg="8" class="main-col mt-2">
						<!-- kolom main -->
						<Main></Main>
					</b-col>
					<b-col lg="4" class="">
						<!-- sidepage -->
						<Side></Side>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
import Main from "./namaMain.vue";
import Side from "./namaSide.vue";
import axios from "axios";
/**
 * Advanced table component
 */
export default {
	page: {
		title: "Advanced Table",
		meta: [{ name: "description", content: "ariNamw" }],
	},
	components: {
		Main,
		Side,
	},
	data() {
		return {
			tableData: [],
			title: "Advanced Table",
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
	},
};
</script>
<style lang="scss" scoped>
.main-col {
	background-color: #fff;
}
</style>