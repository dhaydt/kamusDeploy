<template>
	<div class="mainCol">
		<b-row class="mb-5 justify-content-center">
			<b-col lg="12">
				<div class="bg-white p-5">
					<b-card>
						<div class="title">Cari dikamus terjemahan kami</div>
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
									<b-form-select
										v-model="selected"
										:options="options"
										required
									></b-form-select>
									<b-button variant="danger" id="searchButton" type="submit"
										>Terjemahkan</b-button
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
					</b-card>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			selected: "",
			keyword: "",
			error: "",
			showDismissibleAlert: false,
			urlReport: "http://72.26.117.203:3002/report",
			urlTrans: {
				engin: "http://72.26.117.203:3002/translateEng/",
				ineng: "http://72.26.117.203:3002/translateInd/",
			},
			options: [
				{ value: "", text: "Pilih Bahasa Tujuan" },
				{ value: "engin", text: "Indonesia" },
				{ value: "indeng", text: "Inggris" },
			],
		};
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			var bahasa = this.selected;

			if (bahasa == "engin") {
				try {
					const resp = await axios.get(this.urlTrans.engin + this.keyword);
					const data = resp.data;
					const row = data.length;

					if (row === 0) {
						this.error = "Data terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;

						await axios.post(this.urlReport, {
							kata: this.keyword,
							bidang: "ENG - IND",
						});
					} else {
						window.location.href = "/cari/engInd/" + this.keyword;
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				try {
					const resp = await axios.get(this.urlTrans.ineng + this.keyword);
					const data = resp.data;
					const row = data.length;

					if (row === 0) {
						this.error = "Data terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;

						await axios.post(this.urlReport, {
							kata: this.keyword,
							bidang: "IND - ENG",
						});
					} else {
						window.location.href = "/cari/indEng/" + this.keyword;
					}
				} catch (err) {
					console.log(err);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.bg-white {
	min-height: 80vh;
}
</style>