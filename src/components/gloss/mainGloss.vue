<template>
	<div class="mainGlos">
		<div class="glosCol">
			<b-container class="p-4">
				<b-row>
					<b-col sm="12" lg="8" class="main-col mt-2">
						<!-- kolom main -->
						<Main></Main>
					</b-col>
					<b-col lg="4">
						<!-- sidepage -->
						<Side></Side>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
import Main from "./glossMain.vue";
import Side from "./glosSide.vue";
export default {
	components: {
		Main,
		Side,
	},
};
</script>

<style lang="scss" scoped>
</style>

