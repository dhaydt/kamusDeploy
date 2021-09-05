<template>
	<div class="terjemahanPage">
		<Terjemahan></Terjemahan>
	</div>
</template>

<script>
import Terjemahan from "../components/translate/terjemahanMain.vue";
export default {
	components: {
		Terjemahan,
	},
};
</script>

<style lang="scss" scoped>
.terjemahanPage {
	background-color: #eef1f8;
}
</style>