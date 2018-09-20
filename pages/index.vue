<template>
<div id=port>
<div id=shapes>
	<div id=php class=half>
		<img id=word class=mass src=/word.svg @click="word">
		<div id=phdats>
		<div id=phhole></div>
		<ul id=phlist>
		<li>3 years building custom WP themes + plugins</li>
		<li>Woo Shipping/Checkout mods, CPTs, User Roles, REST API, etc. etc.</li>
		<li>Fluent CSS: Full site design + build, mobile layers for any device</li>
		<li>Critical Rendering Path audits to improve slow load</li>
		<li>SCROLL DOWN FOR WORK VVVVVV</li>
		</ul>
		</div>

	</div>
	<div id=js class=half>
		<img id=node class=mass src=/ode.svg @click="node">
		<div id=jsdats>
		<div id=jshole></div>
		<ul id=jslist>
		<li>Node/Vue/Nuxt/React</li>
		<li>ES6+, async, hoisting, closures...</li>
		<li>Exploring JAM stack+ CSS as art</li>
		<li>SCROLL DOWN FOR WORK VVVVVV</li>
		</ul>
		</div>
	</div>
	<h1 id=name>Tyler Hill</h1>
</div>
	<ul id=sites>	
		<li class=site v-for="site in sites"> 
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
let php = [
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
let js = [
	{
		name: "Autoblog",
		href: "/auto",
		desc: "AutoBlog pulls images/text from /r/pics.json but the format can be used on any blog you like.",
		src: "/auto.png"
	},
	{
		name: "WP Scraper",
		href: "https://github.com/TheDripper/wpstatic",
		desc: "IN PROGRESS - Nuxt app to scrape a WP install + generate a static version;;; stuck on chunking templates into <500 lines of markup",
		src: "/static.jpg"
	}
]
export default {
	
	methods: {
		word: function(e) {
			if(!e.target.classList.contains('open')) {
				e.target.parentNode.style.width = '100vw'
				e.target.classList.add('open')
				e.target.style.float='left'
				document.querySelector('#js').style.width = '0';
				document.querySelector('#phlist').style.opacity = '1';
				document.querySelector('#phlist').style.marginTop = '8%';
				this.sites = php
			} else {
				e.target.parentNode.style.width = '50vw'
				e.target.classList.remove('open')
				document.querySelector('#js').style.width = '50vw';
				document.querySelector('#phlist').style.opacity = '0';
				this.sites = []
			}
		},
		node: function(e) {
			if(!e.target.classList.contains('open')) {
				e.target.parentNode.style.width = '100vw'
				e.target.classList.add('open')
				document.querySelector('#php').style.width = '0';
				document.querySelector('#jslist').style.opacity = '1';
				document.querySelector('#jslist').style.marginTop = '8%';
				document.querySelector('#phlist').style.display = 'none';
				this.sites = js
			} else {
				e.target.parentNode.style.width = '50vw'
				e.target.classList.remove('open')
				document.querySelector('#php').style.width = '50vw';
				document.querySelector('#jslist').style.opacity = '0';
				document.querySelector('#jslist').style.marginTop = '8%';
				document.querySelector('#phlist').style.display = 'inherit';
				this.sites = []
			}
		}
	},
	asyncData(context) {
		return {
			sites: []
		}
	}
}
</script>
<style>
#jslist {
	width: 100%;
	margin-top: 1%;
	opacity: 0;
	transition: all 0.5s ease;
	color: lime;
	font-family: "vcr";
	transform: translateX(20%);
}
@media(max-width:900px) {
	#jslist {
		transform: none;
	}
}
#jshole {
	height: 100vh;
	width: 50vw;
	shape-outside: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	float: right;
	transform: translateX(50%);
}
#jsdats {
	text-align: right;
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: none;
	width: 100%;
}
#phhole {
	height: 100vh;
	width: 50vw;
	shape-outside: circle(65% at 0 50%);
	float: left;
}
@media(max-width:600px) {
	#phhole {
		shape-outside: circle(55% at -30px 50%);
	}
	#phlist {
		padding-left: 15px;
	}
}
#phdats {
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	width: 100%;
}
#phlist {
	width: 100%;
	margin-top: 1%;
	opacity: 0;
	transition: all 0.5s ease;
	color: lime;
	font-family: "vcr";
}
#phlist li {
	font-size: 5vmin;
	margin-bottom: 5vmin;
	list-style: none;
}
#jslist li {
	font-size: 5vmin;
	margin-bottom: 5vmin;
	list-style: none;
}
#shapes {
	display: flex;
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
#node {
	transform: translateX(50%);
}
#word {
	transform: translateX(-50%);
}
.half {
	width: 50vw;
	position: relative;
	flex-shrink: 0;
	transition: all 0.3s ease-in-out;
}
.mass {
	width: 100%;
	height: 100vh;
	cursor: pointer;
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
#name {
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
.site {
	list-style: none;
	display: flex;
	align-items: center;
	position: relative;
	padding-bottom: 50px;
	padding-top: 0;
	margin: 0;
}
.site:after {
	content: '';
	height: 50px;
	background-image: url('/static.jpg');
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	background-size: cover;
}
.site img {
      flex-shrink: 0;
}
.site:nth-child(even) .mage {
      order: 1;
}
.site:nth-child(even) .copy {
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
