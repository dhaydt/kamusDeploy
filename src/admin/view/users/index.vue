<template>
	<div class="userAdmin">
		<PageHeader :title="title" :items="items"></PageHeader>
		<div class="row">
			<div class="col-xl-12"><Main></Main>`</div>
		</div>
	</div>
</template>

<script>
import PageHeader from "../../components/page-header.vue";
import Main from "./userMain.vue";
export default {
	data() {
		return {
			title: "Managemnet User",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Administrator",
					active: true,
				},
			],
		};
	},
	components: {
		PageHeader,
		Main,
	},
};
</script>

<style lang="scss" scoped>
</style>