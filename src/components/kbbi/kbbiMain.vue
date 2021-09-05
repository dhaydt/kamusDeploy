<template>
	<div class="mainCol">
		<b-row class="mb-5 justify-content-center">
			<b-col lg="12">
				<div class="bg-white p-5">
					<b-card>
						<div class="title">Cari dikamus KBBI kami</div>
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
					</b-card>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data() {
		return {
			keyword: "",
			error: "",
			showDismissibleAlert: false,
			urlReport: "http://72.26.117.203:3002/report",
			urlFind: "http://72.26.117.203:3002/find/",
		};
	},

	components: {},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			try {
				const resp = await axios.get(this.urlFind + this.keyword);
				const data = resp.data;
				const row = data.length;

				if (row === 0) {
					this.error = "Data tidak ditemukan!";
					this.showDismissibleAlert = true;

					await axios.post(this.urlReport, {
						kata: this.keyword,
						bidang: "KBBI",
					});
				} else {
					window.location.href = "/cari/kbbi/" + this.keyword;
				}
			} catch (err) {
				console.log(err);
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