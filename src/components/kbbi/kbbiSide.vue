<template>
	<div class="sidePage">
		<div class="row">
			<div class="card w-100 m-2">
				<div class="card-body">
					<h4 class="card-title">Kata Populer</h4>
					<p class="card-title-desc">Kata populer berdasarkan pencarian</p>

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
				<b-container>
					<b-card
						:title="imgData.title"
						:img-src="urlImg + imgData.images"
						img-alt="Adv Space"
						img-top
						tag="article"
						class="m-1 w-100"
					>
						<b-card-text>
							{{ imgData.details }}
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
			urlLastId: "http://72.26.117.203:3002/getLastAdv",
			urlImgData: "http://72.26.117.203:3002/getAdv/",
			urlImg: "http://72.26.117.203:3002/images/client/",
			lastId: "",
			imgData: [],
		};
	},

	created() {
		this.getLastId();
	},

	methods: {
		async getLastId() {
			const resp = await axios.get(this.urlLastId);
			this.lastId = resp.data.data[0].lastId;
			this.getImageData();
		},

		async getImageData() {
			const resp = await axios.get(this.urlImgData + this.lastId);
			this.imgData = resp.data.data[0];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>