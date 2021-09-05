<template>
	<div class="addNama">
		<PageHeader :title="title" :items="items"></PageHeader>
		<div class="card" style="min-height: 70vh">
			<div class="card-body">
				<b-row class="justify-content-center">
					<b-col md="8">
						<div>
							<b-form
								@submit="onSubmit"
								@reset="onReset"
								v-for="nama in artiNama"
								:key="nama.id"
							>
								<b-input-group prepend="Nama" class="mt-3">
									<b-form-input
										v-model="nama.judul_nama"
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

								<b-input-group class="mt-3">
									<b-form-select
										v-model="nama.kelamin_nama"
										required
										class="mb-3"
									>
										<template #first>
											<b-form-select-option :value="null" disabled
												>-- Pilih Kelamin --</b-form-select-option
											>
										</template>
										<b-form-select-option value="Laki-Laki"
											>Laki - Laki</b-form-select-option
										>
										<b-form-select-option value="Perempuan"
											>Perempuan</b-form-select-option
										>
									</b-form-select>
								</b-input-group>

								<b-input-group prepend="Asal" class="mt-3">
									<b-form-input
										v-model="nama.asal_nama"
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
									<b-form-input v-model="nama.isi_nama" required></b-form-input>
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
										v-model="nama.perfix_nama"
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
									<b-button
										type="button"
										variant="success"
										@click="addArtiNamaRow"
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
			postUrl: "http://72.26.117.203:3002/postNama",
			loading: "",
			selected: null,
			title: "Tambah Nama",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Arti nama",
				},
				{
					text: "Tambah nama",
					active: true,
				},
			],
		};
	},

	computed: {
		...mapMultiRowFields(["artiNama"]),
	},
	components: {
		PageHeader,
	},

	methods: {
		...mapMutations(["addArtiNamaRow"]),

		async onSubmit(e) {
			e.preventDefault();
			this.loading = true;
			const check = this.$store.state.artiNama;
			const resp = await axios
				.post(this.postUrl, {
					data: check,
				})
				.then(console.log(resp));
			this.loading = "";
			console.log(check);
			this.$store.state.artiNama = [
				{
					id: "",
					judul_nama: "",
					kelamin_nama: null,
					asal_nama: "",
					isi_nama: "",
					perfix_nama: "",
				},
			];
		},

		onReset() {
			this.$store.state.artiNama = [
				{
					id: "",
					judul_nama: "",
					kelamin_nama: null,
					asal_nama: "",
					isi_nama: "",
					perfix_nama: "",
				},
			];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>