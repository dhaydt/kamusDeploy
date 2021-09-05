<template>
	<div class="landing mt-4 pt-4">
		<b-container>
			<b-row class="w-100 justify-content-center">
				<b-col lg="12" md="9">
					<div class="header">
						<h2>
							<span class="titleLanding">KamusKBBI.id</span> 5 Kamus Dalam 1
							Website
						</h2>
						<p>Kamus KBBI, Eng-Ind, Ind-Eng, Istilah dan Arti Nama.</p>
					</div>
					<div class="content mt-4 pt-4">
						<b-container>
							<b-card-group deck>
								<b-row class="w-100 justify-content-center">
									<b-col
										md="6"
										lg="4"
										sm="12"
										class="mb-4"
										v-for="menu in menus"
										:key="menu.id"
									>
										<b-card
											:img-src="menu.img"
											style="max-height: 60vh; min-height: 60vh"
										>
											<!-- footer="Card Footer"
											footer-tag="footer" -->
											<div class="title">
												<h4 class="text-left title-card">{{ menu.title }}</h4>
											</div>
											<div class="content-card mt-4">
												<b-card-text class="text-left">{{
													menu.content
												}}</b-card-text>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												href="#"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
								</b-row>
							</b-card-group>
						</b-container>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			getAdUrl: "http://72.26.117.203:3002/getLastAdv",
			urlImageData: "http://72.26.117.203:3002/getAdv/",
			urlImg: "http://72.26.117.203:3002/images/client/",
			iklanTitle: "1weqwwewe",
			iklanDetail: "",
			iklanImage: "",
			menus: [
				{
					id: 1,
					title: "Kamus KBBI",
					content:
						"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
				},
				{
					id: 2,
					title: "Kamus Eng - Ind",
					content:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
				},
				{
					id: 3,
					title: "Kamus Ind - Eng",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use ...",
				},
				{
					id: 4,
					title: "",
					content: "",
					img: "",
				},
				{
					id: 5,
					title: "Istilah",
					content:
						"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text.",
				},
				{
					id: 6,
					title: "Arti Nama",
					content:
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use ...",
				},
			],
			idImg: "",
		};
	},

	created() {
		this.getIdLast();
	},

	methods: {
		async getIdLast() {
			const resp = await axios.get(this.getAdUrl);
			this.idImg = resp.data.data[0].lastId;
			this.getImageData();
		},

		async getImageData() {
			const resp = await axios.get(this.urlImageData + this.idImg);
			const data = resp.data.data[0];
			console.log(data.title);
			this.menus[3].title = data.title;
			this.menus[3].content = data.details;
			this.menus[3].img = this.urlImg + data.images;
		},
	},
};
</script>

<style lang="scss" scoped>
.titleLanding {
	color: #0b85ec;
	font-weight: 900;
}

.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.title-card {
	font-weight: 700;
	text-transform: capitalize;
}

.content-card {
	white-space: normal;
	overflow-y: hidden;
	text-overflow: ellipsis;
	max-height: 200px;
}
</style>