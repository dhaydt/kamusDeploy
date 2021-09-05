<template>
	<div class="addImage">
		<Header :title="title" :items="items"></Header>
		<b-card class="addImg">
			<form @submit.prevent="submitForm">
				<b-input-group>
					<template #prepend>
						<b-input-group-text>Title</b-input-group-text>
					</template>
					<b-form-input
						v-model="formFields.title"
						id="title"
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
						<b-input-group-text>Detail</b-input-group-text>
					</template>
					<b-form-input v-model="formFields.detail" id="detail"></b-form-input>

					<template #append>
						<b-input-group-text
							><strong class="text-danger">!</strong></b-input-group-text
						>
					</template>
				</b-input-group>

				<label class="btn btn-default">
					<input
						type="file"
						required
						v-on:change="handleFileUpload()"
						name="images"
						id="images"
					/>
				</label>

				<button
					class="btn btn-success"
					:disabled="!formFields.images"
					type="submit"
				>
					<div v-if="loading">
						<b-spinner small type="grow"></b-spinner> Menyimpan...
					</div>
					<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
				</button>
			</form>
		</b-card>
	</div>
</template>

<script>
import axios from "axios";
import { BSpinner } from "bootstrap-vue";
import Header from "../../components/page-header.vue";
export default {
	data() {
		return {
			urlPostImg: "http://72.26.117.203:3002/postAdv",
			loading: false,
			formFields: {
				title: null,
				images: null,
				detail: null,
			},
			file: null,
			title: "Tambah Advertism",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Advertism",
				},
				{
					text: "Tambah Advertism",
					active: true,
				},
			],
		};
	},

	components: {
		Header,
		BSpinner,
	},

	methods: {
		async submitForm() {
			this.loading = true;
			let formData = new FormData();

			formData.append("detail", this.formFields.detail);
			formData.append("title", this.formFields.title);
			formData.append("images", this.formFields.images);

			await axios
				.post("http://72.26.117.203:3002/postAdv", formData)
				.then((res) => {
					console.log(res);
					this.loading = false;
				})
				.catch((err) => {
					console.log(err);
				});
			this.formFields.title = "";
			this.formFields.images = "";
			this.formFields.detail = "";
			this.loading = false;
		},

		handleFileUpload() {
			this.formFields.images = event.target.files[0];
			console.log(this.formFields.images);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>