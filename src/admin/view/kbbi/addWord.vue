<template>
	<div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Textual inputs</h4>
				<p class="card-title-desc">
					Here are examples of
					<code>.form-control</code> applied to each textual HTML5
					<code>&lt;input&gt;</code>
					<code>type</code>.
				</p>

				<div class="row">
					<div class="col-12">
						<form class="form-horizontal" role="form">
							<b-form-group
								id="nama"
								label-cols-sm="1"
								label-cols-lg="1"
								label="Nama"
								label-for="nama"
							>
								<b-form-input
									for="nama"
									name="nama"
									size="sm"
									v-model="nama"
								></b-form-input>
							</b-form-group>

							<b-form-group
								id="dasar"
								label-cols-sm="1"
								v-if="dasar"
								label-cols-lg="1"
								label="Kata Dasar"
								label-for="dasar"
							>
								<b-form-input
									size="sm"
									for="dasar"
									name="dasar"
									v-model="dasar"
								></b-form-input>
							</b-form-group>

							<b-form-group
								id="makna"
								label-cols-sm="1"
								label-cols-lg="1"
								label="Makna"
								label-for="makna"
							>
								<b-form-textarea id="makna" v-model="makna"></b-form-textarea>
							</b-form-group>

							<div class="row justify-content-end">
								<div class="col-md-12">
									<b-form-group
										id="contoh"
										label-cols-sm="1"
										label-cols-lg="1"
										label="Contoh"
										v-if="contoh"
										label-for="contoh"
									>
										<b-form-input
											for="contoh"
											size="sm"
											name="contoh"
											v-model="contoh"
										></b-form-input>
									</b-form-group>

									<b-form-group
										id="kode"
										label-cols-sm="1"
										label-cols-lg="1"
										label="Kode"
										v-if="kode"
										label-for="kode"
									>
										<b-form-input
											for="kode"
											size="sm"
											name="kode"
											v-model="kode"
										></b-form-input>
									</b-form-group>

									<b-form-group
										id="desk"
										label-cols-sm="1"
										label-cols-lg="1"
										label="Deskripsi"
										v-if="desk"
										label-for="desk"
									>
										<b-form-input
											for="desk"
											size="sm"
											name="desk"
											v-model="desk"
										></b-form-input>
									</b-form-group>
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- end row -->
			</div>
		</div>
		<!-- end card -->
		<textarea cols="30" rows="10" v-html="text"></textarea>
		<br />
		<Readers @load="jsonReader"></Readers>
	</div>
</template>

<script>
import Readers from "./Reader.vue";

export default {
	data() {
		return {
			text: "",
			nama: "",
			dasar: "",
			desk: "",
			makna: "",
			contoh: "",
			kode: "",
		};
	},
	components: {
		Readers,
	},

	methods: {
		jsonReader(val) {
			var toJson = JSON.parse(val);
			var array = toJson.entri[0];

			this.text = array;
			this.nama = array.nama;

			this.dasar = array.kata_dasar[0];
			var joinMakna = array.makna[0].submakna;
			this.makna = joinMakna.join("\n");

			this.contoh = array.makna[0].contoh;
			this.desk = array.makna[0].kelas[0].deskripsi;
			this.kode = array.makna[0].kelas[0].nama;

			// GABUNG JSON ARRAY DALAM OBJECT
			// var jo = array.makna;
			// var result = jo.reduce(function (r, a) {
			// 	r[a.submakna] = r[a.submakna] || JSON.stringify();
			// 	r[a.submakna];
			// 	return r;
			// }, Object.create(null));

			// // console.log(result);
			// console.log("arr", result);
			// this.makna = result;
		},
	},
};
</script>

<style lang="scss" scoped>
</style>