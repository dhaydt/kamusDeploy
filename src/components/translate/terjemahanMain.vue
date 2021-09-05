<template>
	<div class="mainTerjemahan">
		<b-container class="p-4">
			<b-row>
				<b-col sm="12" lg="8" class="main-col mt-2">
					<!-- Main page -->
					<Main></Main>
				</b-col>
				<b-col lg="4">
					<!-- sidepage -->
					<Side></Side>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Main from "./mainTerjemahan.vue";
import Side from "./sideTerjemahan.vue";
export default {
	components: {
		Main,
		Side,
	},
};
</script>

<style lang="scss" scoped>
</style>