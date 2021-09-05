<template>
	<div>
		<b-card class="text-left">
			<h1 class="mb-0 text-left section-label">
				Hasil pencarian Arti Nama untuk nama <em>{{ kata }}</em>
			</h1>
			<b-card-group deck class="mt-4">
				<b-card class="text-left" style="background-color: yellow">
					banner iklan
				</b-card>
			</b-card-group>
			<p class="mt-4 pt-4">
				Arti nama {{ kata }}, pengertian dan makna nama terkait dengan arti nama
				{{ kata }}.
			</p>
			<div class="text-left" v-for="kata in dataKata.nama" :key="kata.id">
				<b-card class="capital">
					<h1 class="card-title">
						<em class="text-black">Arti Nama </em>{{ kata.judul_nama }}
					</h1>
					<b-card-text>
						<p class="makna ml-4">
							Asal : <em>{{ kata.asal_nama }}</em>
						</p>
					</b-card-text>
					<p class="pl-4 ml-4">Makna : {{ kata.isi_nama }}</p>
					<p class="pl-4 ml-4">Kelamin : {{ kata.kelamin_nama }}</p>
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
				{ key: "judul_artikel", label: "Kata" },
				{ key: "isi_artikel", label: "Makna" },
			],
			random: [
				{ key: "judul_nama", label: "Nama" },
				{ key: "isi_nama", label: "Makna" },
			],
		};
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