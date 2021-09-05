<template>
	<div class="addUser">
		<PageHeader :items="items" :title="title"></PageHeader>
		<b-card class="card-add">
			<b-alert
				v-model="showDismissibleAlert"
				v-if="error"
				class="mt-2"
				variant="danger"
				dismissible
			>
				{{ error }}
			</b-alert>
			<b-alert
				v-if="success"
				v-model="showDismissibleAlert"
				class="mt-2"
				variant="success"
				dismissible
			>
				{{ success }}
			</b-alert>
			<b-row class="d-flex justify-content-center mt-4">
				<b-col lg="8" md="9" sm="12">
					<b-form @submit="onSubmit">
						<b-input-group>
							<template #prepend>
								<b-input-group-text class="w-15">Nama</b-input-group-text>
							</template>
							<b-form-input
								v-model="form.username"
								id="username"
								placeholder="Masukan nama"
								required
							></b-form-input>

							<template #append>
								<b-input-group-text
									><strong class="text-danger">!</strong></b-input-group-text
								>
							</template>
						</b-input-group>

						<b-input-group class="mt-4">
							<template #prepend>
								<b-input-group-text class="w-15">Email</b-input-group-text>
							</template>
							<b-form-input
								type="email"
								required
								placeholder="Masukan email"
								v-model="form.email"
								id="email"
							></b-form-input>

							<template #append>
								<b-input-group-text
									><strong class="text-danger">!</strong></b-input-group-text
								>
							</template>
						</b-input-group>

						<b-input-group class="mt-4">
							<template #prepend>
								<b-input-group-text class="w-15">Password</b-input-group-text>
							</template>
							<b-form-input
								type="password"
								required
								placeholder="Masukan password"
								v-model="form.password"
								id="password"
							></b-form-input>

							<template #append>
								<b-input-group-text
									><strong class="text-danger">!</strong></b-input-group-text
								>
							</template>
						</b-input-group>

						<b-input-group class="mt-4">
							<template #prepend>
								<b-input-group-text class="w-15"
									>Confirm Password</b-input-group-text
								>
							</template>
							<b-form-input
								type="password"
								placeholder="Masukan password lagi"
								v-model="form.c_password"
								required
								id="c_password"
							></b-form-input>

							<template #append>
								<b-input-group-text
									><strong class="text-danger">!</strong></b-input-group-text
								>
							</template>
						</b-input-group>

						<b-button-group class="mt-4">
							<b-button type="submit" variant="primary"
								><div v-if="loading">
									<b-spinner small type="grow"></b-spinner> Menyimpan...
								</div>
								<span v-if="!loading"
									><i class="fa fa-save"></i> Simpan</span
								></b-button
							>
						</b-button-group>
					</b-form>
				</b-col>
			</b-row>
		</b-card>
	</div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
import PageHeader from "../../components/page-header.vue";
import axios from "axios";
export default {
	data() {
		return {
			urlRegister: "http://72.26.117.203:3002/register",
			showDismissibleAlert: true,
			error: "",
			success: "",
			loading: false,
			form: {
				username: "",
				email: "",
				password: "",
				c_password: "",
			},
			title: "Tambah Admin",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Administrator",
				},
				{
					text: "Tambah Admin",
					active: true,
				},
			],
		};
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			this.error = "";
			this.success = "";
			this.loading = true;
			const pass = this.form.password;
			const c_pass = this.form.c_password;

			if (pass != c_pass) {
				console.log("password beda");
				this.loading = false;
				this.showDismissibleAlert = true;
				this.error = "Password tidak sama";
				this.form.password = "";
				this.form.c_password = "";
			} else if (pass.length < 6) {
				console.log("pass min 6");
				this.form.password = "";
				this.form.c_password = "";
				this.loading = false;
				this.showDismissibleAlert = true;
				this.error = "Password minimal 6 Karakter";
			} else {
				try {
					await axios.post(this.urlRegister, {
						username: this.form.username,
						email: this.form.email,
						password: this.form.password,
					});
					console.log("berhasil");
					this.loading = false;
					this.success = "Berhasil Mendaftarkan Admin!!!";
					this.$router.push("/admin/user");
				} catch (err) {
					console.log(err);
					this.loading = false;
					this.error = "Email sudah terdaftar!!!";
				}
			}

			// await axios.post(this.urlRegister, {
			//   username: this.form.username,
			//   email: this.form.email,
			//   password: this.form.password
			// })
		},
	},
	components: {
		PageHeader,
		BSpinner,
	},
};
</script>

<style lang="scss" scoped>
.w-15 {
	width: 150px;
}
.card-add {
	min-height: 70vh;
}
</style>