<template>
	<div>
		<input type="file" @change="loadText" />
	</div>
</template>

<script>
export default {
	methods: {
		loadText(ev) {
			const file = ev.target.files[0];
			const reader = new FileReader();

			reader.onload = (e) => this.$emit("load", e.target.result);
			reader.readAsText(file);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>