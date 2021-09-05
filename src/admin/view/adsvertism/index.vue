<template>
	<div class="advPagess">
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-xl-12">
				<Iklan></Iklan>
			</div>
		</div>
	</div>
</template>

<script>
import Iklan from "./advTable.vue";
import PageHeader from "../../components/page-header.vue";

export default {
	data() {
		return {
			title: "Advertism Manejemen",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Advertism",
					active: true,
				},
			],
		};
	},

	components: {
		Iklan,
		PageHeader,
	},
};
</script>

<style lang="scss" scoped>
</style>