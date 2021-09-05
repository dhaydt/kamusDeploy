<template>
	<div class="home">
		<section id="hero" class="d-flex align-items-center">
			<div class="container" style="margin-bottom: 200px">
				<h1>Selamat Datang di Kamus KBBI</h1>
				<h2>
					Kami menyediakan berbagai macam kamus seperti Glosarium, Kamus Besar
					Bahasa Indonesia, Translator Bahasa Inggris dan Nama anak dan artinya.
				</h2>
				<a href="#why-us" class="btn-get-started scrollto hover"
					>Mulai mencari</a
				>
			</div>
		</section>
		<!-- End Hero -->

		<main id="main">
			<!-- ======= Why Us Section ======= -->
			<section id="why-us" class="why-us">
				<div class="container">
					<div class="row d-flex justify-content-center wd-100">
						<div
							class="col col-sm-12 col-md-8 d-flex wd-100 align-items-stretch"
						>
							<div class="content wd-100">
								<h3>Apa kata kuncinya ?</h3>
								<b-form @submit="onSubmit">
									<b-input-group id="searchBar" class="search mt-4">
										<template #prepend> </template>

										<b-form-input
											v-model="cari"
											id="cari"
											placeholder="Kata kunci"
											required
										></b-form-input>

										<template #append>
											<b-form-select
												v-model="selected"
												:options="options"
												required
											></b-form-select>
											<b-button
												variant="outline-primary"
												id="searchButton"
												type="submit"
												>Cari</b-button
											>
											<b-button
												variant="outline-danger"
												:disabled="disabled"
												id="reset"
												>Reset</b-button
											>
										</template>
									</b-input-group>
								</b-form>
								<div class="text-center mt-4">
									<b-button
										class="mr-2 sm-link"
										variant="outline-primary"
										href="#"
										size="sm"
										to="/kbbi"
										>Kbbi</b-button
									>
									<b-button
										class="mr-2 sm-link"
										variant="outline-primary"
										href="#"
										size="sm"
										to="/glossarium"
										>Glosarium</b-button
									>
									<b-button
										class="mr-2 sm-link"
										variant="outline-primary"
										to="/carinama"
										size="sm"
										>Cari nama</b-button
									>
									<b-button
										class="mr-2 sm-link"
										variant="outline-primary"
										to="/engin"
										size="sm"
										>Translator</b-button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="mainBody" class="container text-center mt-2">
					<EllipsisLoader :loading="loading"></EllipsisLoader>
					<ul id="results"></ul>
				</div>
				<footer class="mt-4"></footer>
				<!-- <footer class="" else>Data Kosong</footer> -->
			</section>
			<!-- End Why Us Section -->
		</main>
	</div>
</template>

<script>
import "../assets/jQ/jquery/jquery.min.js";
import "../assets/jQ/jquery.easing/jquery.easing.min.js";
import { EllipsisLoader } from "vue-spinners-css";

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

import axios from "axios";
export default {
	name: "home",
	components: {
		EllipsisLoader,
	},
	data() {
		return {
			selected: "",
			loading: null,
			cari: "",
			kbbi: "",
			form: "",
			nama: "",
			findUrl: {
				kbbi: "http://72.26.117.203:3002/find/",
				glos: "http://72.26.117.203:3002/findGlos/",
				nama: "http://72.26.117.203:3002/findNama/",
				eng: "http://72.26.117.203:3002/translateEng/",
				ind: "http://72.26.117.203:3002/translateInd/",
			},
			reportUrl: "http://72.26.117.203:3002/report",
			disabled: true,
			options: [
				{ value: "", text: "Pilih pencarian :" },
				{ value: "kbbi", text: "KBBI" },
				{ value: "glosarium", text: "Glosarium" },
				{ value: "artiNama", text: "Arti nama" },
				{ value: "engin", text: "ENG - IND" },
				{ value: "ineng", text: "IND - ENG" },
			],
		};
	},

	mounted() {
		// Activate smooth scroll on page load with hash links in the url
		$(document).ready(function () {
			if (window.location.hash) {
				var initial_nav = window.location.hash;
				if ($(initial_nav).length) {
					var scrollto = $(initial_nav).offset().top - scrolltoOffset;
					$("html, body").animate(
						{
							scrollTop: scrollto,
						},
						1500,
						"easeInOutExpo"
					);
				}
			}
		});

		$("#searchButton").click(function () {
			$("footer").empty();
			// displayResults();
			$("#searchBar").animate({ "padding-top": "0" }, 1600);
			$("#hero").animate({ height: "30vh" }, 1600);
		});

		$("#reset").click(function () {
			$("footer").empty();
			$("#results").empty();
			this.disabled = true;
			// $("#cari").val.empty();
			// displayResults();
			$("#searchBar").animate({ "padding-top": "auto" }, 1600);
			$("#hero").animate({ height: "90vh" }, 1600);
		});

		// Smooth scroll for the navigation menu and links with .scrollto classes
		var scrolltoOffset = $("#header").outerHeight() - 1;
		$(document).on(
			"click",
			".nav-menu a, .mobile-nav a, .scrollto",
			function (e) {
				if (
					location.pathname.replace(/^\//, "") ==
						this.pathname.replace(/^\//, "") &&
					location.hostname == this.hostname
				) {
					var target = $(this.hash);
					if (target.length) {
						e.preventDefault();

						var scrollto = target.offset().top - scrolltoOffset;

						if ($(this).attr("href") == "#header") {
							scrollto = 0;
						}

						$("html, body").animate(
							{
								scrollTop: scrollto,
							},
							1500,
							"easeInOutExpo"
						);

						if ($(this).parents(".nav-menu, .mobile-nav").length) {
							$(".nav-menu .active, .mobile-nav .active").removeClass("active");
							$(this).closest("li").addClass("active");
						}

						if ($("body").hasClass("mobile-nav-active")) {
							$("body").removeClass("mobile-nav-active");
							$(".mobile-nav-toggle i").toggleClass(
								"icofont-navigation-menu icofont-close"
							);
							$(".mobile-nav-overly").fadeOut();
						}
						return false;
					}
				}
			}
		);
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			this.loading = true;
			var kamus = this.selected;
			this.disabled = false;

			$("footer").empty();
			$("#results").empty();
			if (kamus === "kbbi") {
				console.log("cari kbbi");

				try {
					const resp = await axios.get(this.findUrl.kbbi + this.cari);
					this.form = resp.data;
					const kbbi = this.form;
					const row = kbbi.length;

					if (row === 0) {
						await axios.post(this.reportUrl, {
							kata: this.cari,
							bidang: "kbbi",
						});

						this.loading = false;
						$("footer").append("Kamus tidak ditemukan!!!");
					} else {
						window.location.href = "/detailKata/kbbi/" + this.cari;

						$(document).ready(function () {
							$("#results").empty();
							loadData();

							function loadData() {
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
								var getString = JSON.stringify(kbbi);
								var transform = getString.jsonEncode();
								var kbbicoll = JSON.parse(transform);
								// $.map(kbbicoll, function (data) {
								// 	var elem1 = $("<a>");
								// 	elem1.attr("target", "_blank");
								// 	var elem2 = $("<li>");
								// 	elem2.append(
								// 		$(`<h3>`).text(data ? data.kata : "Word Not Found")
								// 	);
								// 	//if(result.thumbnail) elem.append($('<img>').attr('width',150).attr('src',result.thumbnail.source));
								// 	elem2.append($(`<p>`).html(data.keterangan));
								// 	elem1.append(elem2);
								// 	$("#results").append(elem1);
								// 	console.log("cari artinama", data);
								// });

								var check = jQuery.isEmptyObject(kbbicoll);
								if (check === true) {
									$("footer").append("Data tidak ditemukan!!!");
								} else {
									$("footer").append("Mengarahkan...");
								}
							}
						});

						this.loading = false;
					}

					// console.log(resp.data);
				} catch (err) {
					console.log(err);
				}
			} else if (kamus === "glosarium") {
				console.log("cari glossarium", this.findUrl.glos);
				try {
					const resp = await axios.get(this.findUrl.glos + this.cari);
					this.form = resp.data;
					console.log(this.form);
					const data = this.form;

					const row = data.length;

					if (row === 0) {
						await axios.post(this.reportUrl, {
							kata: this.cari,
							bidang: "Glosarium",
						});

						this.loading = false;
						$("footer").append("Glosarium / Istilah tidak ditemukan!!!");
					} else {
						window.location.href = "/detailKata/glosarium/" + this.cari;
						// 	$(document).ready(function () {
						// 		$("#results").empty();

						// 		loadData();

						// 		function loadData() {
						// 			$.map(data, function (data) {
						// 				var elem1 = $("<a>");
						// 				elem1.attr("target", "_blank");
						// 				var elem2 = $("<li>");
						// 				elem2.append($(`<h3>`).text(data.judul_glos));

						// 				elem2.append(
						// 					$("<p>").html(`<em> Bidang : </em>` + data.bid_glos)
						// 				);
						// 				elem2.append(
						// 					$("<p>").html(`<em> Makna : </em>` + data.isi_glos)
						// 				);
						// 				elem1.append(elem2);
						// 				$("#results").append(elem1);
						// 			});
						// 			var check = jQuery.isEmptyObject(data);
						// 			if (check === true) {
						// 				$("footer").append("Data tidak ditemukan!!!");
						// 			} else {
						// 				$("footer").append("|----- End data -----|");
						// 			}
						// 		}
						// 	});
						// 	this.loading = false;
					}
				} catch (err) {
					console.log(err);
				}
			} else if (kamus === "artiNama") {
				try {
					const resp = await axios.get(this.findUrl.nama + this.cari);
					// this.nama =
					this.form = resp.data;

					const data = this.form;

					const row = data.length;

					if (row === 0) {
						await axios.post(this.reportUrl, {
							kata: this.cari,
							bidang: "Arti Nama",
						});

						this.loading = false;
						$("footer").append("Nama tidak ditemukan!!!");
					} else {
						window.location.href = "/detailKata/artiNama/" + this.cari;
						// $(document).ready(function () {
						// 	$("#results").empty();
						// 	loadData();

						// 	function loadData() {
						// 		$.map(data, function (data) {
						// 			var elem1 = $("<a>");
						// 			elem1.attr("target", "_blank");
						// 			var elem2 = $("<li>");
						// 			elem2.append(
						// 				$(`<h3>`).text(data ? data.judul_nama : "Word Not Found")
						// 			);

						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Makna : </em>` + data.isi_nama)
						// 			);
						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Asal : </em>` + data.asal_nama)
						// 			);
						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Kelamin : </em>` + data.kelamin_nama)
						// 			);
						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Prefix : </em>` + data.perfix_nama)
						// 			);
						// 			elem1.append(elem2);
						// 			$("#results").append(elem1);
						// 			console.log("cari artinama", data);
						// 		});

						// 		var check = jQuery.isEmptyObject(data);
						// 		if (check === true) {
						// 			$("footer").append("Data tidak ditemukan!!!");
						// 		} else {
						// 			$("footer").append("|----- End data -----|");
						// 		}
						// 	}
						// });
						this.loading = false;
					}
				} catch (err) {
					console.log(err);
				}
			} else if (kamus === "engin") {
				console.log("translate ke indonesia");
				try {
					const resp = await axios.get(this.findUrl.eng + this.cari);
					this.form = resp.data;
					const data = this.form;

					const row = data.length;

					if (row === 0) {
						await axios.post(this.reportUrl, {
							kata: this.cari,
							bidang: "ENG - IND",
						});

						this.loading = false;
						$("footer").append("Translator tidak ditemukan!!!");
					} else {
						window.location.href = "/detailKata/engInd/" + this.cari;
						// $(document).ready(function () {
						// 	$("#results").empty();
						// 	loadData();

						// 	function loadData() {
						// 		$.map(data, function (data) {
						// 			var elem1 = $("<a>");
						// 			elem1.attr("target", "_blank");
						// 			var elem2 = $("<li>");
						// 			elem2.append($(`<h3>`).text(data.judul_artikel));

						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Makna : </em>` + data.isi_artikel)
						// 			);
						// 			elem1.append(elem2);
						// 			$("#results").append(elem1);
						// 			console.log("cari artinama", data);
						// 		});
						// 		var check = jQuery.isEmptyObject(data);
						// 		if (check === true) {
						// 			$("footer").append("Data tidak ditemukan!!!");
						// 		} else {
						// 			$("footer").append("|----- End data -----|");
						// 		}
						// 	}
						// });
						this.loading = false;
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				console.log("translate ke ingris");
				try {
					const resp = await axios.get(this.findUrl.ind + this.cari);
					this.form = resp.data;
					const data = this.form;

					const row = data.length;

					if (row === 0) {
						await axios.post(this.reportUrl, {
							kata: this.cari,
							bidang: "IND - ENG",
						});

						this.loading = false;
						$("footer").append("Translate tidak ditemukan!!!");
					} else {
						window.location.href = "/detailKata/indEng/" + this.cari;

						// $(document).ready(function () {
						// 	$("#results").empty();
						// 	loadData();

						// 	function loadData() {
						// 		$.map(data, function (data) {
						// 			var elem1 = $("<a>");
						// 			elem1.attr("target", "_blank");
						// 			var elem2 = $("<li>");
						// 			elem2.append($(`<h3>`).text(data.judul_artikel));

						// 			elem2.append(
						// 				$(`<p>`).html(`<em> Makna : </em>` + data.isi_artikel)
						// 			);
						// 			elem1.append(elem2);
						// 			$("#results").append(elem1);
						// 			console.log("cari artinama", data);
						// 		});
						// 		var check = jQuery.isEmptyObject(data);
						// 		if (check === true) {
						// 			$("footer").append("Data tidak ditemukan!!!");
						// 		} else {
						// 			$("footer").append("|----- End data -----|");
						// 		}
						// 	}
						// });
						this.loading = false;
					}
				} catch (err) {
					console.log(err);
				}
			}
		},
	},
};
</script>

<style lang="scss">
.wd-100 {
	width: 100%;
}

#results li {
	letter-spacing: 0;
	padding: 20px;
	list-style: none;
	min-height: 200px;
	background: #fff;
	margin: auto;
	text-align: left;
	-webkit-transition: box-shadow 0.2s ease-out 0.2s;
	-moz-transition: box-shadow 0.2s ease-out 0.2s;
	-o-transition: box-shadow 0.2s ease-out 0.2s;
	transition: box-shadow 0.2s ease-out 0.2s;
	word-spacing: 2px;
}

#results li > h3 {
	text-transform: capitalize;
	margin-top: 0;
	color: #e35865;
	line-height: 2;
}

#results li > p {
	color: #666;
	line-height: 2;
}
</style>
<style lang="scss">
.custom-select {
	width: 85%;
}

#hero {
	width: 100%;
	height: 110vh;
	background-color: #eef1f8 !important;
	background: url("../assets/images/home.svg") top center;
	background-size: cover;
	position: relative;
	margin-bottom: -150px;
}

#hero .btn-get-started {
	font-family: "Raleway", sans-serif;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 1px;
	display: inline-block;
	padding: 12px 35px;
	margin-top: 30px;
	border-radius: 5px;
	transition: 0.5s;
	color: #fff;
	background: #1977cc;
}

#hero h1 {
	margin: 0;
	font-size: 40px;
	font-weight: 700;
	line-height: 56px;
	text-transform: unset;
	color: #2c4964;
}

#hero h2 {
	color: #2c4964;
	margin: 10px 0 0 0;
	font-size: 18px;
}

section {
	padding: 60px 0;
	overflow: hidden;
}
.sm-link {
	border-radius: 10px;
}
.why-us .content {
	padding: 30px;
	background: white;
	border: 2px solid blue;
	border-radius: 10px;
	color: #fff;
}
</style>