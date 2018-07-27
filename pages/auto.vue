<template>
<div id=post>
	<div id=words>
		<h1 v-for="word in words">{{ word }}</h1>
	</div>
	<div id=mages>
		<li v-for="mage in mages">
		<img :src="mage" />
		</li>
	</div>
</div>
</template>
<script>
let axios = require('axios')
let shuffle = require('shuffle-array')
export default {
	async asyncData(context) {
		let { data } = await axios('https://www.reddit.com/r/pics/.json');
		let mages = [];
		let words = [];
		data.data.children.forEach(child=>{
			words = words.concat(child.data.title.split(' '));
			mages.push(child.data.thumbnail);
			console.log(words);
		});
		shuffle(words);
		//words = words.join(' ');
		return { mages: mages, words: words }
	}
}
</script>
<style>
html, body {
	background: lime;
}
img {
	width: 400px;
	height: 400px;
	transform: rotate(45deg);
}
li:nth-child(2n + 1) img {
	transform: rotate(13deg);
}
li:nth-child(3n + 2) img {
	transform: rotate(93deg);
}
li:nth-child(5n + 7) img {
	transform: rotate(160deg) scale(1.1) !important;
	position: relative;
	z-index: 999;
	
}
li {
	list-style: none;
}
#post {
	display: grid;
	grid-template-rows: repeat(4,120px);
	grid-template-columns: repeat(4,150px);
	width: 100vw;
}
h1 {
	padding: 10px;
	position: relative;
	z-index: 808;
	word-break: break-all;
	color: yellow;
	font-size: 34px;
	text-transform: uppercase;
	text-shadow: 2px 2px 0 cyan,
		    -2px -2px 0 orange;
	font-family: "courier";
	letter-spacing: 8px;
	display: block;
	background: blue;
	margin-bottom: 40px;
}
#mages, #words {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
}
</style>
