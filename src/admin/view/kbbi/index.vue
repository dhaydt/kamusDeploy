<script>
import Kbbi from "./Kbbi.vue";
import PageHeader from "../../components/page-header.vue";

/**
 * Dashboard component
 */
export default {
	components: {
		PageHeader,
		Kbbi,
	},
	data() {
		return {
			title: "Kamus Besar Bahasa Indonesia",
			items: [
				{
					text: "Admin",
				},
				{
					text: "KBBI",
					active: true,
				},
			],
		};
	},
};
</script>

<template>
	<div>
		<PageHeader :title="title" :items="items" />
		<div class="row">
			<div class="col-xl-12">
				<Kbbi />
			</div>
		</div>
	</div>
</template>