<template>
<div id=cc>
	<ul>	
	<li v-for="site in sites" v-bind:style="{backgroundImage:'url('+site.src+')'}">
	<a :href="site.href">{{ site.name }}</a>
	<a :href="site.href">{{ site.name }}</a>
	<a :href="site.href">{{ site.name }}</a>
	<a :href="site.href">{{ site.name }}</a>
	<a :href="site.href">{{ site.name }}</a>
	<a :href="site.href">{{ site.name }}</a>
	</li>
	</ul>	
</div>
</template>
<script>
export default {
	asyncData(context) {
		return {
			sites: [
				{
					name: "Berkeley Food Institute",
					href: "https://food.berkeley.edu",
					src: "food.jpg"
				},
				{
					name: "Alameda Health Consortium",
					href: "https://www.alamedahealthconsortium.org/",
					src: "help.jpg"
				},
				{
					name: "Newomics Biotechnology",
					href: "https://www.newomics.com/",
					src: "new.jpg"
				},
				{
					name: "Face Reality Acne Clinic",
					href: "https://facerealityacneclinic.com/",
					src: "face.jpg"
				}
			]
		}
	}
}
</script>
<style>
@font-face {
  font-family: "vcr";
  src: url("~/vcr.ttf"); }
ul {
	padding: 0;
}
li {
	width: 100vw;
	height: 100vh;
	background-size: 30%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	position: relative;
}
a {
	position: absolute;
	background: rgba(0,0,255,0.3);
	font-family: "vcr", courier;
	text-decoration: none;
}
a:first-child {
	color: purple;
	font-size: 144px;
	z-index: 2;
}
a:nth-child(2) {
	color: magenta;
	font-size: 122px;
	z-index: 2;
}
a:nth-child(3) {
	color: black;
	font-size: 108px;
	z-index: 3;
}
a:nth-child(4) {
	color: blue;
	font-size: 98px;
	z-index: 4;
}
a:nth-child(5) {
	color: lime;
	font-size: 84px;
	z-index: 5;
}
</style>
