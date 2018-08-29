<template>
<div id=port>
	<div id=tro>
		<div class=slide>
			<img src="/word.svg" />
			<h1>PHP</h1>
		</div>
		<div class=slide>
			<img src="/node.svg" />
			<h1>JS</h1>
		</div>
		<h1 id=name>Tyler Hill</h1>
	</div>
	<ul>	
	<li v-for="site in sites"> 
	<div class=copy>
	<a class=head target=_blank :href="site.href">{{ site.name }}</a>
	<p v-html="site.desc"></p>
	</div>
	<div class=mage :style="{backgroundImage:'url('+site.src+')'}" >
	</div>
	</li>
	</ul>	
	<div id=end>
	<a target=_blank href='https://github.com/thedripper'>Github</a>
	<a target=_blank href='https://www.linkedin.com/in/tyler-hill-936798110/'>linkedin</a>
	<a target=_blank href='mailto:tylerhillwebdev@gmail.com'>tylerhillwebdev@gmail.com</a>
	</div>
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
					desc: "Built custom visual layout system for <a target=_blank href='https://food.berkeley.edu/priorities/'>primary</a> + <a target=_blank href='https://food.berkeley.edu/about-us/centers/dfs/'>secondary</a> landing pages + <a target=_blank href='https://food.berkeley.edu/resources/news/'>infinite scroll masonry blog</a>, controlled via ACF",
					src: "/bfi1.png"
				},
				{
					name: "Biochain US",
					href: "https://www.biochain.com/",
					desc: "Full WP site build from provided mockups w/ custom Woocommerce Shipping/Checkout functionality",
					src: "/bio.png"

				},
				{
					name: "Face Reality Acne Clinic",
					href: "https://facerealityacneclinic.com/",
					desc: "Custom JS cart builder to allow Woocommerce shopping from full inventory list, custom Woocommerce shipping router w/ FedEx/USPS API + user roles",
					src: "/face.png"
				},
				{
					name: "Alameda Health Consortium",
					href: "https://www.alamedahealthconsortium.org/",
					desc: "Full WP site build from provided mockups incuding WP REST API to merge calendar events across installs",
					src: "/ahc.png"
				},
				{
					name: "Create Real Impact",
					href: "https://createrealimpact.com/",
					desc: "Built content submission + voting system for teen driving/texting PSA contest",
					src: "/real.png"
				}
			]
		}
	}
}
</script>
<style>
.slide {
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
}
.slide h1 {
	text-align: center;
	color: lime;
	text-shadow: none;
}
#end {
	width: 100vw;
	height: 100vh;
	background: url('/dayjob.jpg');
	background-size: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
#end a {
	text-decoration: none;
	font-family: "vcr";
}
.mage {
	height: 500px;
	width: 50%;
	flex-shrink: 0;
	background-size: contain;
}
.copy {
	padding: 0 20px;
}
html, body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	overflow-x: hidden;
	background: blue;
}
#name {
	position: absolute;
	bottom: 20px;
	right: 20px;
}
#tro img {
	width: 400px;
	height: 400px;
}
#tro {
	position: relative;
	font-family: "vcr", "courier new";
	width: 100vw;
	height: 100vh;
	background: blue;
	display: flex;
	justify-content: space-around;
	padding-top: 20px;
}
h1, #end a {
	color: white;
	font-size: 64px;
	text-transform: uppercase;
	text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black, 5px -5px 0 black;
	padding: 5px;
	margin-bottom: 10px;
	text-align: right;
	width: 100%;
}
li {
	list-style: none;
	display: flex;
	align-items: center;
	position: relative;
	padding-bottom: 50px;
	padding-top: 0;
	margin: 0;
}
li:after {
	content: '';
	height: 50px;
	background-image: url('/static.jpg');
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-size: cover;
}
li img {
	flex-shrink: 0;
}
li:nth-child(even) .mage {
	order: 1;
}
li:nth-child(even) .copy {
	order: 2;
}
li a {
	color: lime;
	text-transform: uppercase;
	font-family: "vcr";
	text-decoration: none;
}
li a.head {
	font-size: 54px;
}
li a:hover {
	color: cyan;
}
ul {
	padding: 0;
	width: 100%;
}
li p {
	font-family: "courier new";
	font-size: 32px;
	color: white;
}
@font-face {
  font-family: "vcr";
  src: url("~/vcr.ttf"); }

@media(max-width: 820px) {
	h1 {
		font-size: 32px;
		text-shadow: 3px 3px 0 black, -3px -3px 0 black, -3px 3px 0 black, 3px -3px 0 black;
	}
	li a.head {
		font-size: 32px;
	}
	li p {
		font-size: 26px;
	}
}
@media(max-width: 600px) {
	li {
		flex-direction: column;
	}
	.mage {
		width: 100%;
		height: 300px;
		order: 2 !important;
	}
	.copy {
		order: 1 !important;
		padding: 10px;
	}
}
</style>
