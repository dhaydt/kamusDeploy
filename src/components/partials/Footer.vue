<template>
	<footer class="dark-footer skin-dark-footer">
		<div class="container">
			<b-row>
				<b-col lg="6" md="6" class="text-left"></b-col>
				<b-col lg="6" md="6" class="text-right mt-4 mb-2">
					<ul class="footer-bottom-social m-0">
						<li><router-link to="/about">About Us</router-link></li>
						<li><router-link to="/disclaimer">Disclaimer</router-link></li>
						<li><router-link to="/privacy">Privacy Policy</router-link></li>
						<li><router-link to="contact">Contact Us</router-link></li>
					</ul>
				</b-col>
			</b-row>
			<div class="footer-bottom">
				<div class="row">
					<div class="col-lg-6 col-md-6 text-left">
						<p class="mb-0">
							© 2021 KamusKbbi.id Designd By
							<a href="#">KamusKbbi Official</a> All Rights Reserved
						</p>
					</div>
					<div class="col-lg-6 col-md-6 text-right">
						<ul class="footer-bottom-social">
							<li>
								<a href="#"><i class="fab fa-facebook"></i></a>
							</li>
							<li>
								<a href="#"><i class="fab fa-twitter"></i></a>
							</li>
							<li>
								<a href="#"><i class="fab fa-instagram"></i></a>
							</li>
							<li>
								<a href="#"><i class="fab fa-linkedin"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
	z-index: 99;
	position: relative;
}
.skin-dark-footer {
	color: rgb(129, 141, 165);
	font-size: 14px;
	transition: all 0.4s ease 0s;
}

.dark-footer {
	background: rgb(25, 31, 43);
}

ul {
	list-style: none;
}

ul.footer-bottom-social li {
	display: inline-block;
	margin-right: 17px;
	margin-top: 0px;
	list-style: none;
}

ul.footer-bottom-social li a {
	color: rgba(255, 255, 255, 0.6);
	font-size: 17px;
}

.skin-dark-footer .footer-bottom {
	border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-bottom {
	padding: 30px 0px;
	border-top: 1px solid rgb(233, 237, 243);
}

ul.footer-bottom-social {
	margin: 0px;
	padding: 0px;
}
</style>