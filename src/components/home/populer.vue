<template>
	<div class="populer mt-5 pt-5">
		<b-container>
			<b-row class="justify-content-center">
				<b-col>
					<div class="heading">
						<h2>Kata yang sering <span class="head">Dicari</span></h2>
						<p>
							Setiap hari 5-6k pengunjung mencari makna kata di web
							kamuskbbi.id. Berikut kata yang sering mereka cari dikelompokkan
							sesuai kategorinya.
						</p>
					</div>
					<div class="content mt-4 pt-4">
						<b-container>
							<b-card-group deck>
								<b-row class="w-100 justify-content-center">
									<b-col md="6" lg="4" sm="12" class="mb-4">
										<b-card style="max-height: 60vh; min-height: 60vh">
											<div class="title">
												<h4 class="text-left title-card">KBBI</h4>
											</div>
											<div class="content-card mt-4">
												<div class="btn-rainbow">
													<b-badge
														pill
														to="/kbbi"
														class="bad p-2"
														v-for="kata in popKbbi"
														:key="kata._id"
														>{{ kata.kata }}</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												to="/kbbi"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
									<b-col md="6" lg="4" sm="12" class="mb-4">
										<b-card style="max-height: 60vh; min-height: 60vh">
											<div class="title">
												<h4 class="text-left title-card">
													Inggris -> Indonesia
												</h4>
											</div>
											<div class="content-card mt-4">
												<div class="btn-rainbow">
													<b-badge
														pill
														to="terjemahan"
														class="bad p-2"
														v-for="kata in popEngIn"
														:key="kata.id"
														>{{ kata.judul_artikel }}</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												to="/terjemahan"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
									<b-col md="6" lg="4" sm="12" class="mb-4">
										<b-card style="max-height: 60vh; min-height: 60vh">
											<div class="title">
												<h4 class="text-left title-card">
													Indonesia -> Inggris
												</h4>
											</div>
											<div class="content-card mt-4">
												<div class="btn-rainbow">
													<b-badge
														pill
														to="/terjemahan"
														class="bad p-2"
														v-for="kata in popInEng"
														:key="kata.id"
														>{{ kata.judul_artikel }}</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												to="/terjemahan"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
									<b-col md="6" lg="4" sm="12" class="mb-4">
										<b-card style="max-height: 60vh; min-height: 60vh">
											<div class="title">
												<h4 class="text-left title-card">Arti Nama</h4>
											</div>
											<div class="content-card mt-4">
												<div class="btn-rainbow">
													<b-badge
														pill
														to="/artinama"
														class="bad p-2"
														v-for="kata in popNama"
														:key="kata.id"
														>{{ kata.judul_nama }}</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												to="/artinama"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
									<b-col md="6" lg="4" sm="12" class="mb-4">
										<b-card style="max-height: 60vh; min-height: 60vh">
											<div class="title">
												<h4 class="text-left title-card">Istilah</h4>
											</div>
											<div class="content-card mt-4">
												<div class="btn-rainbow">
													<b-badge
														pill
														to="/glossarium"
														class="bad p-2"
														v-for="kata in popIstilah"
														:key="kata.id"
														>{{ kata.judul_glos }}</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												to="/glossarium"
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
			urlPopKbbi: "http://72.26.117.203:3002/kamus/pop",
			urlPopIstilah: "http://72.26.117.203:3002/istilah/pop",
			urlPopNama: "http://72.26.117.203:3002/nama/pop",
			urlPopEngIn: "http://72.26.117.203:3002/engin/pop",
			urlPopInEng: "http://72.26.117.203:3002/ineng/pop",
			popKbbi: [],
			popIstilah: [],
			popNama: [],
			popEngIn: [],
			popInEng: [],
		};
	},

	created() {
		this.getPopKbbi();
		this.getPopNama();
		this.getPopIstilah();
		this.getPopEngIn();
		this.getPopInEng();
	},

	methods: {
		async getPopKbbi() {
			const resp = await axios.get(this.urlPopKbbi);
			this.popKbbi = resp.data;
			localStorage.setItem("popKbbi", JSON.stringify(this.popKbbi));
		},
		async getPopNama() {
			const resp = await axios.get(this.urlPopNama);
			this.popNama = resp.data;
		},
		async getPopEngIn() {
			const resp = await axios.get(this.urlPopEngIn);
			this.popEngIn = resp.data;
		},
		async getPopInEng() {
			const resp = await axios.get(this.urlPopInEng);
			this.popInEng = resp.data;
		},
		async getPopIstilah() {
			const resp = await axios.get(this.urlPopIstilah);
			this.popIstilah = resp.data;
			localStorage.setItem("popIstilah", JSON.stringify(this.popIstilah));
		},
	},
};
</script>

<style lang="scss" scoped>
.populer {
	background-color: #f6f7f9;
}

.head {
	color: #0b85ec;
	font-weight: 600;
}

.title h4 {
	font-weight: 900;
	text-transform: capitalize;
}

div.btn-rainbow > a:nth-child(1) {
	background: #ffeee8;
	color: #ff5722;
}
div.btn-rainbow > a:nth-child(2) {
	background: #ffebf3;
	color: #ff63a5;
}
div.btn-rainbow > a:nth-child(3) {
	background: #f4eefa;
	color: #9057d0;
}
div.btn-rainbow > a:nth-child(4) {
	background: #e6f7fc;
	color: #09b2e4;
}
div.btn-rainbow > a:nth-child(5) {
	background: #e8f9ee;
	color: #1ac556;
}
div.btn-rainbow > a:nth-child(6) {
	background: #fef6e0;
	color: #f4bd0e;
}
div.btn-rainbow > a:nth-child(7) {
	background: #ffebf3;
	color: #ff63a5;
}
div.btn-rainbow > a:nth-child(8) {
	background: #ffeee8;
	color: #ff5722;
}
div.btn-rainbow > a:nth-child(9) {
	background: #e6f7fc;
	color: #09b2e4;
}
div.btn-rainbow > a:nth-child(10) {
	background: #e8f9ee;
	color: #1ac556;
}

.bad {
	font-size: 16px;
	margin: 10px 10px 20px 10px;
	text-transform: capitalize;
	max-width: 100px;
	overflow: hidden;
}

.style-1 {
	background: #ffeee8;
	color: #ff5722;
}
.style-2 {
	background: #ffebf3;
	color: #ff63a5;
}
.style-3 {
	background: #f4eefa;
	color: #9057d0;
}
.style-4 {
	background: #e6f7fc;
	color: #09b2e4;
}
.style-5 {
	background: #e8f9ee;
	color: #1ac556;
}
.style-6 {
	background: #fef6e0;
	color: #f4bd0e;
}
</style>