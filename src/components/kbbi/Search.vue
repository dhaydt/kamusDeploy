<template>
	<div class="kbbi-search">
		<b-container class="p-4">
			<b-row>
				<b-col sm="12" lg="8" class="main-col mt-2">
					<!-- kolom main -->
					<Main></Main>
				</b-col>
				<b-col lg="4" class="">
					<!-- sidepage -->
					<Side></Side>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Main from "./kbbiMain.vue";
import Side from "./kbbiSide.vue";
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
.main-col {
	background-color: #fff;
}
</style>