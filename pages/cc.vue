<template>
<div id=cc>
	<div id=tro>
		<h1>I maintain hypertext documents at <a target=_blank href="https://www.computercourage.com">Computer Courage</a> in Emeryville California USA.</h1>	
	</div>
	<ul>	
	<li v-for="site in sites" :style="{backgroundImage:'url('+site.src+')'}">
	<a target=_blank :href="site.href">{{ site.name }}</a>
	<a target=_blank :href="site.href">{{ site.name }}</a>
	<a target=_blank :href="site.href">{{ site.name }}</a>
	<a target=_blank :href="site.href">{{ site.name }}</a>
	<a target=_blank :href="site.href">{{ site.name }}</a>
	<a target=_blank :href="site.href">{{ site.name }}</a>
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
					src: "../food.jpg"
				},
				{
					name: "Alameda Health Consortium",
					href: "https://www.alamedahealthconsortium.org/",
					src: "../help.jpg"
				},
				{
					name: "Newomics Biotechnology",
					href: "https://www.newomics.com/",
					src: "../new.jpg"
				},
				{
					name: "Face Reality Acne Clinic",
					href: "https://facerealityacneclinic.com/",
					src: "../face.jpg"
				}
			]
		}
	}
}
</script>
<style>
#tro {
	font-family: "vcr", "courier new";
	width: 100vw;
	height: 100vh;
	background-image: url('/dayjob.jpg');
	background-size: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
}
#tro h1 {
	color: white;
	font-size: 64px;
	text-transform: uppercase;
	text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black, 5px -5px 0 black;
}
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
	font-family: "vcr", courier new;
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
h1 a {
	position: relative;
	color: cyan !important;
	font-size: 64px !important;
	text-shadow: 5px 5px 0 blue, -5px -5px 0 magenta, -5px 5px 0 blue, 5px -5px 0 magenta;
	text-decoration: underline;
}
@media(max-width:600px) {
	#tro {
		height: auto;
		display: block;
	}
	#tro h1 {
		font-size: 52px;
	}
	li {
		height: 100vh;
		background-size: 50%;
		justify-content: flex-end;
	}
a:first-child {
	color: purple;
	font-size: 64px;
	z-index: 2;
}
a:nth-child(2) {
	color: magenta;
	font-size: 52px;
	z-index: 2;
}
a:nth-child(3) {
	color: black;
	font-size: 48px;
	z-index: 3;
}
a:nth-child(4) {
	color: blue;
	font-size: 32px;
	z-index: 4;
}
a:nth-child(5) {
	color: lime;
	font-size: 24px;
	z-index: 5;
}
}
#cc {
	width: 100vw;
	max-width: 100%;
	overflow-x: hidden;
}
</style>
