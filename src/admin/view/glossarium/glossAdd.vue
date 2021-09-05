<template>
	<div class="addGloss">
		<PageHeader :title="title" :items="items"></PageHeader>
		<div class="card" style="min-height: 70vh">
			<div class="card-body">
				<b-row class="justify-content-center">
					<b-col md="8">
						<div>
							<b-form
								@submit="onSubmit"
								@reset="onReset"
								v-for="gloss in glosarium"
								:key="gloss.id_glos"
							>
								<b-input-group prepend="Istilah" class="mt-3">
									<b-form-input
										v-model="gloss.judul_glos"
										required
									></b-form-input>
									<template #append>
										<b-input-group-text
											><strong class="text-danger"
												>!</strong
											></b-input-group-text
										>
									</template>
								</b-input-group>

								<b-input-group prepend="Bidang" class="mt-3">
									<b-form-input
										v-model="gloss.bid_glos"
										required
									></b-form-input>
									<template #append>
										<b-input-group-text
											><strong class="text-danger"
												>!</strong
											></b-input-group-text
										>
									</template>
								</b-input-group>

								<b-input-group prepend="SEO" class="mt-3">
									<b-form-input
										v-model="gloss.judul_seo"
										required
									></b-form-input>
									<template #append>
										<b-input-group-text
											><strong class="text-danger"
												>!</strong
											></b-input-group-text
										>
									</template>
								</b-input-group>
								<b-input-group prepend="Makna" class="mt-3">
									<b-form-input
										v-model="gloss.isi_glos"
										required
									></b-form-input>
									<template #append>
										<b-input-group-text
											><strong class="text-danger"
												>!</strong
											></b-input-group-text
										>
									</template>
								</b-input-group>
								<b-input-group prepend="Prefix" class="mt-3 mb-3">
									<b-form-input
										v-model="gloss.perfix_glos"
										required
									></b-form-input>
									<template #append>
										<b-input-group-text
											><strong class="text-danger"
												>!</strong
											></b-input-group-text
										>
									</template>
								</b-input-group>
								<b-col md="12" class="d-flex justify-content-around">
									<b-button type="submit" variant="primary"
										><div v-if="loading">
											<b-spinner small type="grow"></b-spinner> Menyimpan...
										</div>
										<span v-if="!loading"
											><i class="fa fa-save"></i> Simpan</span
										></b-button
									>
									<b-button type="reset" variant="danger">Reset</b-button>
									<b-button type="button" variant="success" @click="addGlosRow"
										><i class="fa fa-plus"> Baris</i></b-button
									>
								</b-col>
							</b-form>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>


<script>
import PageHeader from "../../components/page-header.vue";
import { mapMutations } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
import axios from "axios";

export default {
	data() {
		return {
			postUrl: "http://72.26.117.203:3002/postGlos",
			loading: "",
			selected: null,
			title: "Tambah Glosarium",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Glosarium",
				},
				{
					text: "Tambah Glosarium",
					active: true,
				},
			],
		};
	},

	computed: {
		...mapMultiRowFields(["glosarium"]),
	},
	components: {
		PageHeader,
	},

	methods: {
		...mapMutations(["addGlosRow"]),

		async onSubmit(e) {
			e.preventDefault();
			this.loading = true;
			const check = this.$store.state.glosarium;
			const resp = await axios
				.post(this.postUrl, {
					data: check,
				})
				.then(console.log(resp));
			this.loading = "";
			console.log(check);
			this.$store.state.glosarium = [
				{
					id_glos: "",
					judul_glos: "",
					bid_glos: "",
					isi_glos: "",
					judul_seo: "",
					perfix_glos: "",
				},
			];
		},

		onReset() {
			this.$store.state.glosarium = [
				{
					id_glos: "",
					judul_glos: "",
					bid_glos: "",
					isi_glos: "",
					judul_seo: "",
					perfix_glos: "",
				},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>