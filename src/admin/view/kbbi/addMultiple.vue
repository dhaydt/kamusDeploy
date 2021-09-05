<template>
	<div class="addKata">
		<b-alert
			:show="dismissCountDown"
			dismissible
			variant="success"
			@dismissed="dismissCountDown = 0"
			@dismiss-count-down="countDownChanged"
		>
			<p>{{ messages }}</p>
			<b-progress
				variant="warning"
				:max="dismissSecs"
				:value="dismissCountDown"
				height="4px"
			></b-progress>
		</b-alert>
		<PageHeader :title="title" :items="items"></PageHeader>
		<b-card title="Tambah Kamus" class="mb-2">
			<b-card-text> Masukan beberapa data dalam sekali klik </b-card-text>
			<b-row
				v-for="record in records"
				:key="record._id"
				class="d-flex justify-content-center"
				style="border-bottom: 2px solid #ced4da"
			>
				<b-col md="8" class="mt-4">
					<b-input-group>
						<template #prepend>
							<b-input-group-text>Kata</b-input-group-text>
						</template>
						<b-form-input v-model="record.kata" required></b-form-input>

						<template #append>
							<b-input-group-text
								><strong class="text-danger">!</strong></b-input-group-text
							>
						</template>
					</b-input-group>
				</b-col>
				<b-col md="9" class="mt-4">
					<b-input-group>
						<template #prepend>
							<b-input-group-text style="height: 40px"
								>Makna</b-input-group-text
							>
						</template>
						<ckeditor
							v-model="record.keterangan"
							:editor="editor"
							style="border: 1px solid #ced4da"
						></ckeditor>
						<template #append>
							<b-input-group-text style="height: 40px"
								><strong class="text-danger">!</strong></b-input-group-text
							>
						</template>
					</b-input-group>
				</b-col>
			</b-row>

			<b-row class="justify-content-around d-flex">
				<b-button @click="submit" class="mt-4" size="md" variant="primary">
					<div v-if="loading">
						<b-spinner small type="grow"></b-spinner> Menyimpan...
					</div>
					<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
				</b-button>
				<b-button
					@click="addRecordsRow"
					class="mt-4"
					size="sm"
					variant="success"
					><i class="fa fa-plus"></i> Baris</b-button
				>
			</b-row>
		</b-card>
	</div>
</template>

<script>
import PageHeader from "../../components/page-header.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { BSpinner } from "bootstrap-vue";
import store from "../../../store/index";

import axios from "axios";
import { mapMutations } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
export default {
	data() {
		return {
			postUrl: "http://72.26.117.203:3002/postKamus",
			loading: "",
			dismissSecs: 5,
			dismissCountDown: 0,
			messages: "",
			title: "Tambah Kamus",
			items: [
				{
					text: "Admin",
				},
				{
					text: "KBBI",
				},
				{
					text: "Tambah kata",
					active: true,
				},
			],
			editor: ClassicEditor,
			editorData:
				"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
		};
	},
	components: {
		PageHeader,
		BSpinner,
		ckeditor: CKEditor.component,
	},
	computed: {
		...mapMultiRowFields(["records"]),
	},
	methods: {
		...mapMutations(["addRecordsRow"]),

		async submit() {
			const check = store.state.records[0].kata;
			if (check === "" || store.state.records[0].keterangan === "") {
				alert("Isi semua data");
			} else {
				try {
					this.loading = true;
					const resp = await axios
						.post(this.postUrl, {
							data: store.state.records,
						})
						.then(console.log(resp));
				} catch (err) {
					console.log(err);
				}
				this.messages = "Kata tersimpan";
				this.loading = "";
				this.showAlert();
				let state = this.$store;
				let newState = {
					records: [
						{
							_id: "",
							kata: "",
							keterangan: "",
						},
					],
				};

				state.replaceState(newState);
			}
		},

		countDownChanged(dismissCountDown) {
			this.dismissCountDown = dismissCountDown;
		},
		showAlert() {
			this.dismissCountDown = this.dismissSecs;
		},
	},
};
</script>
<style lang="scss">
.ck {
	border: 1px solid #ced4da;
}

.ck-editor__main {
	margin-bottom: 20px;
	border-radius: 10px;
}
</style>
<style lang="scss" scoped>
</style>
