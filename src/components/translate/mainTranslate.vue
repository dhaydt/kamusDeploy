<template>
	<div class="mainTranslate">
		<div class="transCol">
			<b-container class="p-4">
				<b-row>
					<b-col sm="12" lg="8" class="mt-2">
						<Main></Main>
					</b-col>
					<b-col lg="4">
						<Side></Side>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
import Main from "./transMain.vue";
import Side from "./transSide.vue";
export default {
	data() {
		return {};
	},

	components: {
		Main,
		Side,
	},
};
</script>

<style lang="scss" scoped>
</style>