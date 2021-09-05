<template>
	<div class="sidePage">
		<div class="row">
			<div class="card w-100 m-2">
				<div class="card-body">
					<h4 class="card-title">Nama Populer</h4>
					<p class="card-title-desc">Nama populer berdasarkan pencarian</p>

					<b-list-group>
						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Cras justo odio
							<b-badge variant="primary" pill>14</b-badge>
						</b-list-group-item>

						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Dapibus ac facilisis in
							<b-badge variant="primary" pill>2</b-badge>
						</b-list-group-item>

						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Morbi leo risus
							<b-badge variant="primary" pill>1</b-badge>
						</b-list-group-item>
					</b-list-group>
				</div>
			</div>

			<div class="adv w-100 mt-4 pt-4">
				<b-container v-if="dataImage">
					<b-card
						:title="dataImage.title"
						:img-src="urlImg + dataImage.images"
						img-alt="Image"
						img-top
						tag="article"
						class="m-1 w-100"
					>
						<b-card-text>
							{{ dataImage.details }}
						</b-card-text>

						<b-button href="#" variant="primary">Pesan Sekarang</b-button>
					</b-card>
				</b-container>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			urlSecondId: "http://72.26.117.203:3002/getSecondAdv",
			urlImg: "http://72.26.117.203:3002/images/client/",
			dataImage: [],
		};
	},

	created() {
		this.getSecond();
	},

	methods: {
		async getSecond() {
			const resp = await axios.get(this.urlSecondId);
			console.log(resp.data[0]);
			this.dataImage = resp.data[0];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>