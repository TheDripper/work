<template> 
<div id=blog>
<div class=mages id=one>
<ul>
	<span class=after id=blucol><a href=/posts/1>One</a></span>
	<li id=blu v-for="hit in hits.blue" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>

</ul>
<ul>
	<span class=after id=cycol><a href=/posts/2>Two</a></span>
	<li id=tur v-for="hit in hits.turquoise" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<ul>
	<span class=after id=purpcol><a href=/posts/3>Three</a></span>
	<li id=lac v-for="hit in hits.lilac" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<ul>
	<span class=after id=blackcol><a href=/posts/4>Four</a></span>
	<li id=noir v-for="hit in hits.black" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<h1 id=insta>INSTA</h1>
<h1 id=hot @click="posts">HOT TAPE</h1>
</div>
<div class=mages id=two>
<ul>
	<span class=after id=redcol><a href=/posts/archive/>Jul</a></span>
	<li id=blu v-for="hit in hits.red" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<ul>
	<span class=after id=orangecol><a href=/posts/archive/>Aug</a></span>
	<li id=tur v-for="hit in hits.orange" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<ul>
	<span class=after id=pinkcol><a href=/posts/archive/>Sep</a></span>
	<li id=lac v-for="hit in hits.pink" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<ul>
	<span class=after id=graycol><a href=/posts/archive/>Oct</a></span>
	<li id=noir v-for="hit in hits.gray" v-bind:style="{ backgroundImage:'url('+hit.prev+')' }" v-bind:data-full="hit.full" @click="mode">
	</li>
</ul>
<h1 id=chives @click="posts">ARCHIVES</h1>
<h1 id=back @click="insta">INSTA</h1>
</div>
<div id=over @click="clear">
</div>
</div>
</template>
<script>
let axios = require('axios')
let getColor = async function(color) {
	console.log(color)
	let pics = await axios('https://pixabay.com/api/?key=10493578-e0c15b403dc08f3bc106b40b8&per_page=12&colors='+color)
	let urls = []
	pics.data.hits.forEach(hit=>{
		urls.push({prev:hit.previewURL,full:hit.webformatURL})
	})
	return urls
}
export default {
	async asyncData(context) {
		let colors = [
			'blue',
			'turquoise',
			'lilac',
			'black',
			'red',
			'orange',
			'pink',
			'gray'
		]
		let hits = {}
		for(const color of colors) {
			hits[color] = await getColor(color)
		}
		console.log(hits)
		return {
			hits: hits
		}
	},
	methods: {
		posts: function() {
			let onelists = document.querySelector('#one').querySelectorAll('ul')
			let twolists = document.querySelector('#two').querySelectorAll('ul')
			let after = document.querySelectorAll('.after a')
			document.querySelector('#insta').textContent = 'NEW'
			document.querySelector('#back').style.display = 'block'
			onelists.forEach(list=>{
				list.style.transform = "rotate(-10deg) translate(300px,-5vw)"
			})
			twolists.forEach(list=>{
				list.style.transform = "rotate(10deg) translate(300px,-5vw)"
			})
			after.forEach(word=>{
				word.style.marginTop = '100vw';
			})

		},
		insta: function() {
			let onelists = document.querySelector('#one').querySelectorAll('ul')
			let twolists = document.querySelector('#two').querySelectorAll('ul')
			let after = document.querySelectorAll('.after a')
			document.querySelector('#insta').textContent = 'NEW'
			document.querySelector('#back').style.display = 'block'
			onelists.forEach(list=>{
				list.style.transform = "rotate(-10deg) translateY(-5vw)"
			})
			twolists.forEach(list=>{
				list.style.transform = "rotate(10deg) translateY(-5vw)"
			})
			after.forEach(word=>{
				word.style.marginTop = '40vw';
			})
		},
		mode: function(e) {
			console.log(e)
			e.target.style.filter = 'blur(5px)'
			let src = e.target.dataset.full
			console.log(src)
			document.querySelector('#over').style.backgroundImage = 'url('+src+')'
			document.querySelector('#over').style.display = 'flex'
		},
		clear: function(e) {
			document.querySelector('#over').style.display = 'none'
		}
	}
}
</script>
<style>
* {
	box-sizing: border-box;
}
html, body {
	margin: 0;
	background: #F2EBCD;
}
ul {
	list-style: none;
	padding: 0;
	width: 100px;
	height: 100vh;
	position: relative;
	transform: rotate(-10deg) translateX(50vw);
	transition: all 0.3s ease;
}
#two {
}
#two ul {
	transform: rotate(10deg) translate(50vw,-40vh);
}
ul:nth-child(1) {
	background: blue;
}
#one ul:nth-child(1):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: blue;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#one ul:nth-child(2):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: teal;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#one ul:nth-child(3):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: purple;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#one ul:nth-child(4):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: black;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#two ul:nth-child(1):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: red;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#two ul:nth-child(2):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: orange;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#two ul:nth-child(3):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: pink;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
#two ul:nth-child(4):after {
	content: '';
	width: 100px;
	height: 230vh;
	background: black;
	position: absolute;
	top: 0;
	transform: rotate(180deg);
}
ul:nth-child(2) {
	background: teal;
}
ul:nth-child(3) {
	background: purple;
}
ul:nth-child(4) {
	background: black; 
}

#two ul:nth-child(1) {
	background: red;
}
#two ul:nth-child(2) {
	background: brown;
}
#two ul:nth-child(3) {
	background: pink;
}
#two ul:nth-child(4) {
	background: black; 
}
.after {
	width: 100px;
	height: 230vh;
	position: absolute;
	margin-top: -20vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
.after a {
	text-decoration: none;
	font-size: 48px;
	font-weight: bold;
	transform: rotate(10deg);
	margin-top: 40vw;
}
#blucol {
	background: blue;
	transform: translateX(-100px);
}
#blucol a {
	color: cyan;
}
#cycol {
	background: cyan;
	transform: translateX(-299px);
}
#purpcol a {
	color: black;
}
#purpcol {
	background: purple;
	transform: translateX(-498px);
}
#blackcol {
	background: black; 
	transform: translateX(-696px);
}
#blackcol a {
	color: white;
}

#redcol {
	background: red;
	transform: translateX(-100px);
}
#orangecol {
	background: orange;
	transform: translateX(-299px);
}
#pinkcol {
	background: pink;
	transform: translateX(-498px);
}
#graycol {
	background: black; 
	transform: translateX(-696px);
}

#redcol a {
	color: orange;
}
#orangecol a {
	color: pink;
}
#pinkcol a {
	color: black;
}
#graycol a {
	 color: white;
}

li {
	background-size: cover;
	flex-shrink: 0;
	width: 100px;
	height: 100px;
	position: relative;
	z-index: 5;
	transition: all 0.1s ease;
}
#blog {
	width: 100vw;
	height: 100vh;
}
.mages {
	display: flex;
	height: 100vh;
	overflow: hidden;
	position: relative;
}
#insta {
	position: absolute;
	top: 20px;
	right: 10%;
	transform: rotate(-8deg);
	font-size: 48px;
	color: black;
}
#hot {
	position: absolute;
	bottom: 20px;
	left: 0;
	font-size: 48px;
	color: black;
}
#chives {
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 48px;
	color: black;
}
#two .after a {
	transform: rotate(-10deg);
}
#back {
	position: absolute;
	bottom: 0;
	left: 0;
	display: none;
}
#over {
	position: fixed;
	display: none;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
}
@media(max-width:1230px) {
	#hot {
		color: red;
		transform: translateX(100%);
	}
}
@media(max-width:1200px) {
	#insta {
		transform: rotate(-8deg) translateX(-100%);
		color: white;
	}
}
@media(max-width:430px) {
	#hot {
		left: -130px;
	}
	ul {
		transform: rotate(-10deg) translateY(-5vw);
	}
	#two ul {
		transform: rotate(10deg) translateY(-5vw);
	}

}
</style>
