<template>
	<div>
		<div class="home"></div>
		<!--Hero Banner  Start-->
		<Hero></Hero>

		<!-- Landing menu -->
		<Landing></Landing>

		<Populer></Populer>

		<Konten></Konten>
	</div>
</template>

<script>
import Hero from "../components/home/hero.vue";
import Landing from "../components/home/menuLanding.vue";
import Populer from "../components/home/populer.vue";
import Konten from "../components/home/konten.vue";
export default {
	components: {
		Hero,
		Landing,
		Populer,
		Konten,
	},
};
</script>

<style lang="scss" scoped>
</style>