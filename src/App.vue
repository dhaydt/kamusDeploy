<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");

* {
	font-family: "lato", sans-serif;
	font-weight: 700;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

#app {
	// font-family: Avenir, Helvetica, Arial, sans-serif;
	font-family: "lato", sans-serif !important;
	font-weight: 700;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#app > div:nth-child(2) {
	margin-top: 60px;
}

.navbar {
	background-color: #fff;
	box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
}

.a {
	text-decoration: none;
	color: rgb(128 156 159);
}

body {
	background-color: #fff !important;
}
</style>
