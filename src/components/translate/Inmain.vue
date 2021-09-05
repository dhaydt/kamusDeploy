<template>
	<div class="row" id="translateFormIndo">
		<div class="col-md-12 col-md-offset-3 d-flex justify-content-center mt-5">
			<form id="transForm" class="form-inline well" v-on:submit="formSubmit">
				<input
					class="form-control"
					type="text"
					v-model="textToTranslate"
					placeholder="Enter a Word..."
				/>
				<select class="form-control" v-model="language">
					<option value="ru">Inggris</option>
					<!-- <option value="es">Spanish</option> -->
					<!-- <option value="fr">French</option> -->
					<!-- <option value="zh">Chinese</option> -->
				</select>
				<input class="btn btn-primary" type="submit" value="Translate" />
			</form>
		</div>
	</div>
</template>
<script>
export default {
	name: "translateFormIndo",
	data() {
		return {
			textToTranslate: "",
			language: "",
		};
	},
	created() {
		this.language = "ru";
	},
	methods: {
		formSubmit(e) {
			this.$emit("formSubmit", this.textToTranslate, this.language);
			e.preventDefault();
		},
	},
};
</script>

<style>
#transForm {
	border-radius: 10px;
	border: 1px #ccc solid;
}
</style>