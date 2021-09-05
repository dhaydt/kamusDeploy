<template>
	<div class="main-col">
		<div class="row mb-5">
			<div class="col-lg-12 mx-auto">
				<div class="bg-white p-5 rounded shadow">
					<!-- Custom rounded search bars with input group -->
					<!-- <form action=""> -->
					<p>Terjemahan Kamus KBBI</p>

					<div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
						<div class="input-group">
							<input
								type="search"
								id="searchBar"
								required
								placeholder="Masukkan terjemahan yang anda cari..."
								aria-describedby="button-addon1"
								class="form-control border-0 bg-light"
							/>
							<div class="input-group-append">
								<button
									id="button-addon1"
									@click="cari"
									class="btn btn-link text-primary mt-1"
								>
									<i class="fa fa-search"></i>
								</button>
							</div>
						</div>
					</div>
					<!-- </form> -->
					<!-- End -->
					<div id="mainBody" class="container text-center">
						<EllipsisLoader :loading="loading" v-if="!kata"></EllipsisLoader>
						<!-- <input id="checker" @isLoading="isLoading" type="text" /> -->
						<div id="results"></div>
					</div>
					<footer class="text-center"></footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { EllipsisLoader } from "vue-spinners-css";

export default {
	data() {
		return {
			loading: false,
		};
	},

	components: {
		EllipsisLoader,
	},

	methods: {
		cari() {},
	},
};
</script>

<style lang="scss" scoped>
.main-col {
	min-height: 80vh;
	background-color: white;
}
</style>