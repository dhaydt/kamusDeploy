<template>
	<div class="istilah">
		<b-card class="text-left">
			<h1 class="mb-0 text-left section-label">
				Hasil pencarian Glosarium untuk kata <em>{{ kata }}</em>
			</h1>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<p class="mt-4 pt-4">
				Arti istilah {{ kata }}, maksud, definisi, pengertian dan makna istilah
				terkait dengan arti istilah {{ kata }}.
			</p>
			<div
				class="text-left"
				v-for="kata in dataKata.istilah"
				:key="kata.id_glos"
			>
				<b-card class="capital">
					<h1 class="card-title">
						<em class="text-black">Arti Istilah </em>{{ kata.judul_glos }}
					</h1>
					<b-card-text>
						<p class="makna ml-4">
							Bidang : <em>{{ kata.bid_glos }}</em>
						</p>
					</b-card-text>
					<p class="pl-4 ml-4">Makna : {{ kata.isi_glos }}</p>
				</b-card>
			</div>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<div class="mt-4">
				<h4 class="mb-0 text-left section-label">Related word</h4>
				<b-table
					:items="dataKata.related"
					:fields="fields"
					striped
					hover
					head-variant="dark"
					responsive="sm"
					class="text-left mt-2"
				>
				</b-table>
			</div>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<div class="mt-4">
				<h4 class="mb-0 text-left section-label">Arti kata lainnya</h4>
				<b-table
					:items="dataKata.random"
					:fields="random"
					striped
					hover
					head-variant="dark"
					responsive="sm"
					class="text-left mt-2"
				>
				</b-table>
			</div>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<b-card class="mt-4 share d-flex">
				<div class="d-flex">
					<div class="shares">
						<span>Bagikan Makna</span>
					</div>
					<div class="group">
						<b-button to="#" variant="outline" class="p-0 m-0"
							><i class="fab fa-facebook-square fb"></i
						></b-button>
						<b-button to="#" variant="outline" class="p-0 m-0"
							><i class="fab fa-twitter-square twit"></i>
						</b-button>
						<b-button to="#" variant="outline" class="p-0 m-0"
							><i class="fab fa-google-plus-square ig"></i>
						</b-button>
					</div>
				</div>
			</b-card>
		</b-card>
	</div>
</template>

<script>
export default {
	props: ["dataKata", "kata"],
	data() {
		return {
			data: [],
			fields: [
				{ key: "judul_artikel", label: "Inggris" },
				{ key: "isi_artikel", label: "Indonesia" },
			],
			random: [
				{ key: "judul_artikel", label: "Indonesia" },
				{ key: "isi_artikel", label: "Inggris" },
			],
		};
	},

	created() {
		console.log(this.dataKata);
	},
};
</script>

<style lang="scss" scoped>
.section-label {
	font-weight: 600;
	em {
		text-transform: capitalize;
		font-weight: 900;
	}
}

.share {
	display: flex;
}
.shares {
	display: flex;
	align-items: center;
}
.fab {
	font-size: 40px;
	margin: 0 5px 0 10px;
}

.fb {
	color: #3a3ae0;
}
.twit {
	color: #5b67fb;
}
.ig {
	color: #e00b0b;
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
	text-transform: capitalize !important;
}

.makna {
	font-size: 20px;
}
</style>