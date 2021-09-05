<template>
	<div class="kbbiDetail">
		<b-container>
			<b-row class="justify-content-center">
				<b-col lg="8" md="8" sm="12">
					<b-card-group deck class="mt-4">
						<b-card class="text-left" style="background-color: yellow">
							banner iklan
						</b-card>
					</b-card-group>

					<b-card-group v-if="bidang === 'kbbi'" deck class="mt-4">
						<Kbbi :dataKata="dataKata" :kata="kata"></Kbbi>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'glosarium'">
						<Istilah :dataKata="dataKata" :kata="kata"></Istilah>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'artiNama'">
						<ArtiNama :dataKata="dataKata" :kata="kata"></ArtiNama>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'engInd'">
						<EngIn :dataKata="dataKata" :kata="kata"></EngIn>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'indEng'">
						<InEng :dataKata="dataKata" :kata="kata"></InEng>
					</b-card-group>
				</b-col>
				<b-col lg="4" md="4" sm="8">
					<Side></Side>
				</b-col>
			</b-row>
		</b-container>
		<div id="mainBody" class="container text-center">
			<!-- <EllipsisLoader :loading="loading"></EllipsisLoader> -->
			<ul id="results"></ul>
		</div>
		<footer class="mt-4"></footer>
	</div>
</template>

<script>
import Side from "./sideDetail.vue";
import axios from "axios";
import Kbbi from "./kbbi.vue";
import Istilah from "./istilah.vue";
import ArtiNama from "./artiNama.vue";
import EngIn from "./engIn.vue";
import InEng from "./inEng.vue";
export default {
	data() {
		return {
			kata: "",
			bidang: "",
			dataKata: [],
			findUrl: {
				kbbi: "http://72.26.117.203:3002/find/",
				glos: "http://72.26.117.203:3002/findGlos/",
				nama: "http://72.26.117.203:3002/findNama/",
				eng: "http://72.26.117.203:3002/translateEng/",
				ind: "http://72.26.117.203:3002/translateInd/",
			},
		};
	},

	created() {
		console.log(this.$route.params.kata);
		this.kata = this.$route.params.kata;
		this.bidang = this.$route.params.bidang;
		this.cariKata();
	},

	components: {
		Side,
		Kbbi,
		Istilah,
		ArtiNama,
		EngIn,
		InEng,
	},

	methods: {
		async cariKata() {
			try {
				if (this.bidang === "kbbi") {
					const res = await axios.get(this.findUrl.kbbi + this.kata);
					const data = res.data;

					String.prototype.jsonEncode = function () {
						return (
							this.replace(/&lt;\/b&gt;/g, "</b>")
								/* eslint-disable */
								.replace(/&lt;b&gt;/g, "<b>")
								.replace(/&lt;\/sup&gt;/g, "</sup>")
								.replace(/&lt;sup&gt;/g, "<sup>")
								.replace(/&lt;\/i&gt;/g, "</i>")
								.replace(/&lt;i&gt;/g, "<i>")
								.replace(/&lt;br&gt;/g, "<br>")
								.replace(/\\b/g, "\\b")
								.replace(/\\f/g, "\\f")
						);
					};
					var getString = JSON.stringify(data);
					var transform = getString.jsonEncode();
					this.dataKata = JSON.parse(transform);
				} else if (this.bidang === "glosarium") {
					const res = await axios.get(this.findUrl.glos + this.kata);
					this.dataKata = res.data;
					// console.log(this.dataKata);
				} else if (this.bidang === "artiNama") {
					const res = await axios.get(this.findUrl.nama + this.kata);
					this.dataKata = res.data;
				} else if (this.bidang === "engInd") {
					const res = await axios.get(this.findUrl.eng + this.kata);
					this.dataKata = res.data;
				} else if (this.bidang === "indEng") {
					const res = await axios.get(this.findUrl.ind + this.kata);
					this.dataKata = res.data;
					console.log(this.dataKata);
				}
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.kbbiDetail {
	background-color: #eef1f8;
	min-height: 90vh;
}

.section-label {
	font-weight: 600;
	em {
		text-transform: capitalize;
		font-weight: 900;
	}
}

footer.synonym-copyright,
.practical-alert {
	font-size: 14px;
	line-height: 1.4;
	color: gray;
	text-transform: capitalize;
}
.card-title {
	font-size: 28px;
	text-transform: capitalize;
}

.makna {
	font-size: 20px;
}
</style>