<template>
	<div id="app">
		<div id="nav" v-if="!$route.meta.hideNavbar">
			<b-container>
				<b-navbar class="pl-5 pr-5" toggleable="lg" type="light" fixed="top">
					<b-navbar-brand to="/"
						><img
							src="../assets/imgClient/logo-kbbi.png"
							class="d-inline-block align-top"
							alt="Kamus KBBI"
							style="height: 35px"
					/></b-navbar-brand>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav>
							<b-nav-item to="/">Home</b-nav-item>
							<b-nav-item to="/kbbi">Kamus</b-nav-item>
							<b-nav-item to="/artinama">Arti Nama</b-nav-item>
							<b-nav-item to="/glossarium">Istilah</b-nav-item>
							<b-nav-item to="/terjemahan">Terjemahan</b-nav-item>
							<!-- <b-nav-item-dropdown right>
								<template #button-content>
									<em>Translate</em>
									<span class="fas fa-caret-down ml-2"></span>
								</template>
								<b-dropdown-item to="/engin"
									>Ingris - Indonesia</b-dropdown-item
								>
								<b-dropdown-item to="/ineng"
									>Indonesia - Ingris</b-dropdown-item
								>
							</b-nav-item-dropdown> -->
						</b-navbar-nav>

						<!-- Right aligned nav items -->
						<b-navbar-nav class="ml-auto">
							<b-nav-item to="/admin"> Admin </b-nav-item>
							<b-nav-item-dropdown right>
								<!-- Using 'button-content' slot -->
								<template #button-content>
									<em>User</em>
									<span class="fas fa-caret-down ml-2"></span>
								</template>
								<b-dropdown-item to="#">Profile</b-dropdown-item>
								<b-dropdown-item to="#">Sign Out</b-dropdown-item>
							</b-nav-item-dropdown>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</b-container>
			<!-- <router-link to="/">Home</router-link> | -->
		</div>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from "../components/partials/Footer.vue";
export default {
	components: {
		Footer,
	},
};
</script>

<style lang="scss" scoped>
</style>