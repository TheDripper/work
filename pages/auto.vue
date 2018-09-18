<template>
<div id=post>
	<div id=mages>
		<li v-for="mage in mages">
		<a target=_blank :href="'https://reddit.com' + mage.link">
		<img :src="mage.mage" @mouseover="imgBack" />
		</a>
		</li>
	</div>
	<div id=words>
		<div v-for="word in words" class=wrap>
		<h1>{{ word.word }}</h1>
		<a target=_blank :href="'https://reddit.com' + word.link"></a>
		</div>
	</div>
	<h1>SWIPE>></h1>
</div>
</template>
<script>
let axios = require('axios')
let shuffle = require('shuffle-array')
export default {
	methods: {
		imgBack: function(event){
			let src = event.target.src
			document.querySelector('#post').style.backgroundImage = 'url('+src+')'
		}
	},
	async asyncData(context) {
		let { data } = await axios('https://www.reddit.com/r/pics/.json')
		let mages = []
		let words = []
		data.data.children.forEach(child=>{
			//words = words.concat(child.data.title.split(' ')[0])
			let word = { word:child.data.title.split(' ')[0], link: child.data.permalink }
			words = words.concat(word)
			//mages.push(child.data.thumbnail)
			let mage = { mage:child.data.thumbnail, link: child.data.permalink }
			mages.push(mage)
		});
		return { mages: mages, words: words }
	}
}
</script>
<style>
html, body {
	background: lime;
}
li {
	list-style: none;
}
#post {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
h1 {
	padding: 10px;
	position: relative;
	z-index: 808;
	word-break: break-all;
	font-size: 34px;
	text-transform: uppercase;
	text-shadow: 2px 2px 0 cyan,
		    -2px -2px 0 orange;
	font-family: "courier";
	letter-spacing: 8px;
	display: block;
	color: yellow;
}
a {
	text-decoration: none;
}
#mages {
	display: flex;
	width: 100vw;
	overflow-y: visible;
	overflow-x: scroll;
	position: relative;
	height: 150px;
	flex-shrink: 0;
	transition: all 2s ease;
}
#words {
	display: flex;
	width: 100vw;
	overflow: hidden;
	overflow-x: scroll;
}
.wrap {
	width: 150px;
	flex-shrink: 0;
	background: blue;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
}
.wrap h1 {
	width: 20px;
}
.wrap:hover {
	background: black;
}
.wrap:hover h1 {
	text-shadow: none;
	color: white;
}
img {
	width: 150px;
	height: 150px;
	cursor: pointer;
	z-index: 999;
	transition: all 5s ease;
}
</style>
