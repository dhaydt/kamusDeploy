<template>
	<div class="hero">
		<div
			class="hero-banner full jumbo-banner row"
			style="background: #f4f9fd; height: 90vh"
		>
			<div class="container">
				<div class="row h-100 align-items-center">
					<div class="col-lg-7 col-md-8 mt-4 text-left">
						<!--<a href="#" class="header-promo light w-inline-block"><div class="label bg-success">NEW</div><div class="header-promo-text">Klioeo is now UK-Wide</div></a>-->
						<h1 class="banner-title">
							Temukan <span class="text-info">arti kata</span> & makna kata
							disini!
						</h1>
						<p class="lead">Masukkan kata yang kamu cari disini.</p>
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
										><div v-if="loading">
											<b-spinner small type="grow"></b-spinner>
										</div>
										<span v-if="!loading"><i class="fa fa-search"></i></span
									></b-button>
								</template>
							</b-input-group>
						</b-form>
						<b-alert
							v-model="showDismissibleAlert"
							class="mt-2"
							variant="danger"
							dismissible
						>
							{{ error }}
						</b-alert>
						<div class="featured-category dark d-flex mt-4">
							<p style="width: fit-content">Browse Category:</p>
							<ul class="p-0 ml-4">
								<b-button
									class="mr-2 sm-link"
									variant="success"
									href="#"
									size="sm"
									to="/kbbi"
									>Kbbi</b-button
								>
								<b-button
									class="mr-2 sm-link"
									variant="success"
									href="#"
									size="sm"
									to="/kbbi"
									>Eng - Ind</b-button
								>
								<b-button
									class="mr-2 sm-link"
									variant="success"
									href="#"
									size="sm"
									to="/kbbi"
									>Ind - Eng</b-button
								>
								<b-button
									class="mr-2 sm-link"
									variant="success"
									href="#"
									size="sm"
									to="/kbbi"
									>Arti Nama</b-button
								>
								<b-button
									class="mr-2 sm-link"
									variant="success"
									href="#"
									size="sm"
									to="/kbbi"
									>Istilah</b-button
								>
							</ul>
						</div>
					</div>
					<div class="col-lg-5 col-md-4">
						<img
							src="assets/img/a-2.png"
							alt="kamus-kbbi-eng-ind"
							class="img-fluid"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- ============================ Hero Banner End ================================== -->
	</div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
import axios from "axios";
export default {
	data() {
		return {
			selected: "",
			loading: false,
			keyword: "",
			error: "",
			showDismissibleAlert: false,
			reportUrl: "http://72.26.117.203:3002/report",
			findUrl: {
				kbbi: "http://72.26.117.203:3002/find/",
				glos: "http://72.26.117.203:3002/findGlos/",
				nama: "http://72.26.117.203:3002/findNama/",
				eng: "http://72.26.117.203:3002/translateEng/",
				ind: "http://72.26.117.203:3002/translateInd/",
			},
			options: [
				{ value: "", text: "Pilih pencarian :" },
				{ value: "kbbi", text: "KBBI" },
				{ value: "engin", text: "ENG - IND" },
				{ value: "ineng", text: "IND - ENG" },
				{ value: "artiNama", text: "Arti nama" },
				{ value: "istilah", text: "Istilah" },
			],
		};
	},

	created() {
		localStorage.popIstilah.clear();
		localStorage.popKbbi.clear();
	},

	components: {
		BSpinner,
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			var kamus = this.selected;
			this.showDismissibleAlert = false;
			this.loading = true;

			if (kamus === "kbbi") {
				console.log("cari di kbbi");
				try {
					const resp = await axios.get(this.findUrl.kbbi + this.keyword);
					const kbbi = resp.data;
					// console.log("data", kbbi);

					const row = kbbi.kbbi.length;

					if (row === 0) {
						this.error = "Data tidak ada di kamus kami!";
						this.showDismissibleAlert = true;
						this.loading = false;

						console.log("row", row);
						await axios.post(this.reportUrl, {
							kata: this.keyword,
							bidang: "KBBI",
						});
					} else {
						// console.log("data found");
						window.location.href = "/cari/kbbi/" + this.keyword;
					}
				} catch (err) {
					console.log("kbbi", err);
				}
			} else if (kamus === "istilah") {
				try {
					const resp = await axios.get(this.findUrl.glos + this.keyword);
					const glos = resp.data;
					const row = glos.istilah.length;

					if (row === 0) {
						this.error = "Data Istilah tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(this.reportUrl, {
							kata: this.keyword,
							bidang: "Istilah",
						});
					} else {
						window.location.href = "/cari/glosarium/" + this.keyword;
					}
				} catch (err) {
					console.log("istilah", err);
				}
			} else if (kamus === "artiNama") {
				try {
					const resp = await axios.get(this.findUrl.nama + this.keyword);
					const nama = resp.data;
					const row = nama.nama.length;

					if (row === 0) {
						this.error = "Data Nama tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(this.reportUrl, {
							kata: this.keyword,
							bidang: "Arti Nama",
						});
					} else {
						window.location.href = "/cari/artiNama/" + this.keyword;
					}
				} catch (err) {
					console.log("nama", err);
				}
			} else if (kamus === "engin") {
				try {
					const resp = await axios.get(this.findUrl.eng + this.keyword);
					const nama = resp.data;
					const row = nama.engin.length;

					if (row === 0) {
						this.error = "Data Terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(this.reportUrl, {
							kata: this.keyword,
							bidang: "ENG - IND",
						});
					} else {
						window.location.href = "/cari/engInd/" + this.keyword;
					}
				} catch (err) {
					console.log("EngIn", err);
				}
			} else {
				try {
					const resp = await axios.get(this.findUrl.ind + this.keyword);
					const nama = resp.data;
					const row = nama.idEng.length;

					if (row === 0) {
						this.error = "Data Terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(this.reportUrl, {
							kata: this.keyword,
							bidang: "IND - ENG",
						});
					} else {
						window.location.href = "/cari/indEng/" + this.keyword;
					}
				} catch (err) {
					console.log("inEng", err);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.banner-title {
	font-weight: 900;
}
</style>