<template>
<div id=port>
<div id=shapes>
	<div id=php class=half :class="{ 'open': isOpen=='php' }">
		<div id=leftrow @click="word" class=row>
			<h1>PHP</h1>
			<h1> < </h1>
		</div>
		<img id=word class=mass src=/wpdiapink.svg @click="word">
		<ul id=phlist class=list>
		<li>fluent CSS+PHP+JS = fully customized themes + plugins to act and look however you want.</li>
		<li>REST API / Woocommerce / MailChimp Integration / Payment Processing / User Roles / etc.etc.etc...</li>
		<li>fluent CSS+PHP+JS = fully customized themes + plugins to act and look however you want.</li>
		<li>REST API / Woocommerce / MailChimp Integration / Payment Processing / User Roles / etc.etc.etc...</li>
		<li>fluent CSS+PHP+JS = fully customized themes + plugins to act and look however you want.</li>
		<li>REST API / Woocommerce / MailChimp Integration / Payment Processing / User Roles / etc.etc.etc...</li>
		</ul>
	</div>
	<div id=js class=half :class="{ 'open': isOpen=='js' }">
		<img id=node class=mass src=/odedia.svg @click="node">
		<ul id=jslist class=list>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		<li>JS+CSS = the future of web as art.</li>
		<li>ES6+, Node/Vue/Nuxt/, JAM Stack + static gen...</li>
		</ul>
		<div id=rightrow @click="node" class=row>
			<h1>JS</h1>
			<h1> > </h1>
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
					desc: "Full WP site build w/ custom Woocommerce Shipping/Checkout functionality",
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
					desc: "Full WP site build incuding WP REST API to merge calendar events across installs",
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
		name: "HOT TAPE",
		href: '/tape',
		desc: 'Example blog layout w/ instagram feed, hot posts + archive. This is a static example but it could be hosted as a live app',
		src: '/hottape.png'

	},
	{
		name: "Newspaper",
		href: 'http://drownlux.net/news/',
		desc: 'hosted on my live app site (drownlux), Newspaper lists the headlines from reddit.com/r/worldnews and offers the target articles in text-only ADD friendly formatting.',
		src: '/news.png'
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
		word: function(event) {
			if(!this.isOpen) {
				this.sites = php
				this.isOpen = 'php'
				document.querySelector('#js').style.width='0'
				document.querySelector('#name').textContent='SCROLL DOWN FOR WORK VVVVVVV'
			} else {
				this.sites = []
				this.isOpen = ''
				document.querySelector('#js').style.width='50vw'
				document.querySelector('#name').textContent='Tyler Hill'
			}
		},
		node: function(event) {
			document.querySelector('#php').style.width='0';
			if(!this.isOpen) {
				this.sites = js
				this.isOpen = 'js'
				document.querySelector('#php').style.width='0';
				document.querySelector('#name').textContent='SCROLL DOWN FOR WORK VVVVVVV';
			} else {
				this.sites = []
				this.isOpen = ''
				document.querySelector('#php').style.width='50vw';
				document.querySelector('#name').textContent='Tyler Hill'
			}
		}
	},
	asyncData(context) {
		return {
			sites: [],
			isOpen: ''
		}
	}
}
</script>
<style>
#jshole {
	height: 100vh;
	width: 50vw;
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
	float: left;
}
#phdats {
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
	width: 100%;
}
#phdats li a {
	pointer-events: auto;
}
#phlist, #jslist {
	width: 100%;
	margin-top: 1%;
	opacity: 0;
	transition: all 0.5s ease;
	color: lime;
	font-family: "vcr";
	padding-right: 10px;
	word-break: break-all;
}
.list li {
	font-size: 5vmin;
	margin-bottom: 5vmin;
	list-style: none;
	display: inline;
}
.list li:nth-child(3n + 2) {
	color: cyan;
}
.list li:nth-child(3n + 3) {
	color: fuchsia;
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
	shape-outside: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
#word {
	transform: translateX(-50%);
	shape-outside: circle(50%);
}
.open {
	width: 100vw !important;
}
.open .list {
	opacity: 1 !important;
}
.open #word {
	transform: translateX(0) !important;
	width: auto;
	float: left;
}

.open #node {
	transform: translateX(0) !important;
	width: auto;
	float: right;
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
	transition: all 0.3s ease-in-out;
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
	word-break: break-all;
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
@media(max-width:500px) {
	#end a {
		font-size: 32px;
		text-shadow: 2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black, 2px -2px 0 black;
	}
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
#leftrow {
	position: absolute;
	right: 0;
	top: 10vw;
}
#leftrow h1 {
	color: lime;
	text-shadow: 2px 2px 0 fuchsia, -2px -2px 0 cyan, -2px 2px 0 fuchsia, 2px -2px 0 cyan;
	font-family: "vcr";
}
#rightrow {
	position: absolute;
	left: 0;
	bottom: 20vh;
}
#rightrow h1 {
	color: lime;
	text-shadow: 2px 2px 0 fuchsia, -2px -2px 0 cyan, -2px 2px 0 fuchsia, 2px -2px 0 cyan;
	font-family: "vcr";
}
.row {
	cursor: pointer;
	z-index: 999;
}
.open .row {
	position: absolute;
	left: 0 !important;
	bottom: 0 !important;
	right: auto !important;
	top: auto !important;
}
@media(max-width:1200px) {
	.open .mass {
		height: 500px !important;
	}
}
@media(max-width:650px) {
	.open .mass {
		height: 200px !important;
	}
}
.scroll {
	color: white !important;
}
</style>
