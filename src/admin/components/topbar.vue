<template>
	<header id="page-topbar" style="position: fixed; z-index: 2">
		<div class="navbar-header">
			<div class="d-flex">
				<!-- LOGO -->
				<div class="navbar-brand-box">
					<router-link to="/" class="logo logo-dark">
						<span class="logo-sm">
							<img src="@/assets/images/logo-sm-dark.png" alt height="22" />
						</span>
						<span class="logo-lg">
							<img src="@/assets/images/logo-dark.png" alt height="20" />
						</span>
					</router-link>

					<router-link to="/" class="logo logo-light">
						<span class="logo-sm">
							<img src="@/assets/images/logo-sm-light.png" alt height="22" />
						</span>
						<span class="logo-lg">
							<img src="@/assets/assets/img/logo-kbbi.png" alt height="28" />
						</span>
					</router-link>
				</div>

				<button
					@click="toggleMenu"
					type="button"
					class="btn btn-sm px-3 font-size-24 header-item waves-effect"
					id="vertical-menu-btn"
				>
					<i class="ri-menu-2-line align-middle"></i>
				</button>

				<!-- App Search-->
				<!-- <form class="app-search d-none d-lg-block">
					<div class="position-relative">
						<input type="text" class="form-control" placeholder="Search" />
						<span class="ri-search-line"></span>
					</div>
				</form> -->
			</div>

			<div class="d-flex">
				<div class="dropdown d-inline-block d-lg-none ml-2">
					<button
						type="button"
						class="btn header-item noti-icon waves-effect"
						id="page-header-search-dropdown"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i class="ri-search-line"></i>
					</button>
					<div
						class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
						aria-labelledby="page-header-search-dropdown"
					>
						<form class="p-3">
							<div class="form-group m-0">
								<div class="input-group">
									<input
										type="text"
										class="form-control"
										placeholder="Search ..."
									/>
									<div class="input-group-append">
										<button class="btn btn-primary" type="submit">
											<i class="ri-search-line"></i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="dropdown d-none d-lg-inline-block ml-1">
					<button
						type="button"
						class="btn header-item noti-icon waves-effect"
						@click="initFullScreen"
					>
						<i class="ri-fullscreen-line"></i>
					</button>
				</div>

				<b-dropdown
					right
					menu-class="dropdown-menu-lg p-0"
					toggle-class="header-item noti-icon"
					variant="black"
				>
					<template v-slot:button-content>
						<i class="ri-notification-3-line"></i>
						<span class="noti-dot"></span>
					</template>
					<div class="p-3">
						<div class="row align-items-center">
							<div class="col">
								<h6 class="m-0">Notifications</h6>
							</div>
							<div class="col-auto">
								<a href="#!" class="small">View All</a>
							</div>
						</div>
					</div>
					<simplebar style="max-height: 230px">
						<a href class="text-reset notification-item">
							<div class="media">
								<div class="avatar-xs mr-3">
									<span
										class="avatar-title bg-primary rounded-circle font-size-16"
									>
										<i class="ri-shopping-cart-line"></i>
									</span>
								</div>
								<div class="media-body">
									<h6 class="mt-0 mb-1">Your order is placed</h6>
									<div class="font-size-12 text-muted">
										<p class="mb-1">Some body text</p>
										<p class="mb-0">
											<i class="mdi mdi-clock-outline"></i>
											20.20
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href class="text-reset notification-item">
							<div class="media">
								<img
									src="@/assets/images/users/avatar-3.jpg"
									class="mr-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="media-body">
									<h6 class="mt-0 mb-1">Mugiwara NoLuffy</h6>
									<div class="font-size-12 text-muted">
										<p class="mb-1">He will be kaizukou nuaori</p>
										<p class="mb-0">
											<i class="mdi mdi-clock-outline"></i>
											1 hours ago
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href class="text-reset notification-item">
							<div class="media">
								<div class="avatar-xs mr-3">
									<span
										class="avatar-title bg-success rounded-circle font-size-16"
									>
										<i class="ri-checkbox-circle-line"></i>
									</span>
								</div>
								<div class="media-body">
									<h6 class="mt-0 mb-1">Your item Shipped</h6>
									<div class="font-size-12 text-muted">
										<p class="mb-1">Free packeges for use</p>
										<p class="mb-0">
											<i class="mdi mdi-clock-outline"></i>
											a few moments later
										</p>
									</div>
								</div>
							</div>
						</a>
						<a href class="text-reset notification-item">
							<div class="media">
								<img
									src="@/assets/images/users/avatar-4.jpg"
									class="mr-3 rounded-circle avatar-xs"
									alt="user-pic"
								/>
								<div class="media-body">
									<h6 class="mt-0 mb-1">Selena Gomes</h6>
									<div class="font-size-12 text-muted">
										<p class="mb-1">Selena love u so much</p>
										<p class="mb-0">
											<i class="mdi mdi-clock-outline"></i>
											today
										</p>
									</div>
								</div>
							</div>
						</a>
					</simplebar>
					<div class="p-2 border-top">
						<a
							class="btn btn-sm btn-link font-size-14 btn-block text-center"
							href="javascript:void(0)"
						>
							<i class="mdi mdi-arrow-right-circle mr-1"></i>
							Load More
						</a>
					</div>
				</b-dropdown>

				<b-dropdown
					right
					variant="black"
					toggle-class="header-item"
					class="d-inline-block user-dropdown"
				>
					<template v-slot:button-content>
						<img
							class="rounded-circle header-profile-user"
							src="@/assets/images/users/avatar-2.jpg"
							alt="Header Avatar"
						/>
						<span class="d-none d-xl-inline-block ml-1 mx-2">{{
							user.username
						}}</span>
						<i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
					</template>
					<!-- item-->
					<a class="dropdown-item" href="#">
						<i class="ri-user-line align-middle mr-1"></i>
						Profile list
					</a>
					<a class="dropdown-item" href="#">
						<i class="ri-wallet-2-line align-middle mr-1"></i>
						Wallet
					</a>
					<a class="dropdown-item d-block" href="#">
						<span class="badge badge-success float-right mt-1">11</span>
						<i class="ri-settings-2-line align-middle mr-1"></i>
						Setting
					</a>
					<a class="dropdown-item" href="#">
						<i class="ri-lock-unlock-line align-middle mr-1"></i>
						Lock Screen
					</a>
					<div class="dropdown-divider"></div>
					<a type="button" class="dropdown-item text-danger" @click="logout">
						<i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
						Logout
					</a>
				</b-dropdown>
			</div>
		</div>
	</header>
</template>

<script>
import simplebar from "simplebar-vue";
// import i18n from "../i18n";

export default {
	data() {
		return {
			user: {},
		};
	},
	components: { simplebar },

	created() {
		this.user = JSON.parse(localStorage.getItem("user"));
		console.log(this.user.username);
	},
	methods: {
		logout() {
			localStorage.clear();
			this.$router.push("/");
		},
		toggleMenu() {
			this.$parent.toggleMenu();
		},
		initFullScreen() {
			document.body.classList.toggle("fullscreen-enable");
			if (
				!document.fullscreenElement &&
				/* alternative standard method */ !document.mozFullScreenElement &&
				!document.webkitFullscreenElement
			) {
				// current working methods
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(
						Element.ALLOW_KEYBOARD_INPUT
					);
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar();
		},
	},
};
</script>



<style lang="scss" scoped>
.notify-item {
	.active {
		color: #16181b;
		background-color: #f8f9fa;
	}
}
</style>