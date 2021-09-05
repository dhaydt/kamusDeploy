<template>
	<div>
		<b-card class="text-left">
			<h6 class="mb-0 text-left section-label">
				Hasil pencarian Terjemahan Inggris untuk kata <em>{{ kata }}</em>
			</h6>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<p class="mt-4 pt-4">
				Terjemahan Inggris untuk kata {{ kata }}, maksud, definisi, pengertian
				dan makna istilah terkait dengan terjemahan kata {{ kata }}.
			</p>
			<div class="text-left" v-for="kata in dataKata.idEng" :key="kata.id">
				<b-card class="capital">
					<h1 class="card-title">
						<em class="text-black">Arti Terjemahan </em>{{ kata.judul_artikel }}
					</h1>
					<b-card-text>
						<p class="makna ml-4">
							<em>{{ kata.isi_artikel }}</em>
						</p>
					</b-card-text>
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
			fields: [
				{ key: "judul_nama", label: "Nama" },
				{ key: "isi_nama", label: "Makna" },
			],
			random: [
				{ key: "judul_glos", label: "Istilah" },
				{ key: "isi_glos", label: "Makna" },
			],
		};
	},

	mounted() {
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
	text-transform: capitalize;
}

.makna {
	font-size: 20px;
}
</style>