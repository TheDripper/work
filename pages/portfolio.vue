<template>
<div id=all>
<div id=intro>
	<h1>Tyler Hill</h1>
	<h1>JS ES6+ / CSS / PHP</h1>
</div>
<div id=portfolio>
	<img id=word class=mass src=/wp.svg @click="word">
	<ul id=php>	
		<li><h1>PHP / WordPress</h1></li>
		<li class=site v-for="site in php"> 
		<div class=copy>
		<a class=head target=_blank :href="site.href">{{ site.name }}</a>
		<p v-html="site.desc"></p>
		</div>
		<div class=mage :style="{backgroundImage:'url('+site.src+')'}" >
		</div>
		</li>
	</ul>
	<img id=node class=mass src=/blode.svg @click="word">
	<ul id=js>	
		<li><h1>JS / Node</h1></li>
		<li class=site v-for="site in js"> 
		<div class=copy>
		<a class=head target=_blank :href="site.href">{{ site.name }}</a>
		<p v-html="site.desc"></p>
		</div>
		<div class=mage :style="{backgroundImage:'url('+site.src+')'}" >
		</div>
		</li>
	</ul>
</div>
</div>
</template>
<script>
let php = [
		{
			name: "Berkeley Food Institute",
			href: "https://food.berkeley.edu",
			desc: "Site build w/ visual layout system controlled via ACF + <a target=_blank href='https://food.berkeley.edu/resources/news/'>infinite scroll masonry blog</a>, controlled via ACF",
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
		href: 'http://drownlux.net/tape/',
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
		desc: "IN PROGRESS - Nuxt app to scrape a WP install + generate a static version. stuck on chunking templates into <500 lines of markup",
		src: "/static.jpg"
	}
]
export default {
	asyncData(context) {
		return {
			php: php,
			js: js
		}
	}
}
</script>
<style>
ul {
	list-style: none;
}
li {
	margin-bottom: 20px;
}
#js {
	text-align: right;
}
#node {
	shape-outside: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	width: 400px;
	float: right;
}
#word {
	shape-outside: circle(50%);
	float: left;
	width: 400px;
}
#intro {
	text-align: center;
	padding: 20px 0;
}
@media(max-width:700px) {
	#word, #node {
		width: 40% !important;
	}
}
</style>
