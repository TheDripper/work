<template>
<div id=post>
	<div id=left>
	<div id=mages>
		<li v-for="post in posts">
		<a target=_blank :href="'https://reddit.com' + post.link">
		<img :src="post.mage" @mouseover="imgBack" />
		</a>
		</li>
	</div>
	<div id=words>
		<div v-for="post in posts" class=wrap>
		<h1>{{ post.word }}</h1>
		<a target=_blank :href="'https://reddit.com' + post.link" :data-words="post.title" @mouseover="loadWords"></a>
		</div>
	</div>
	<div id=swipe>
	<h1>SWIPE>></h1>
	<h1>SWIPE>></h1>
	<h1>SWIPE>></h1>
	<h1>SWIPE>></h1>
	<h1>SWIPE>></h1>
	</div>
	</div>
	<div id=right>
	<h2 id=title></h2>
	</div>
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
		},
		loadWords: function(event) {
			let words = event.target.dataset.words
			console.log(words)
			document.querySelector('#title').innerHTML = words
		}
	},
	async asyncData(context) {
		let { data } = await axios('https://www.reddit.com/r/pics/.json?limit=100')
		let posts = []
		data.data.children.forEach(child=>{
			//words = words.concat(child.data.title.split(' ')[0])
			let post = { 
				word:child.data.title.split(' ')[0], 
				title: child.data.title,
				link: child.data.permalink,
				mage: child.data.thumbnail
			}
			//words = words.concat(word)
			//mages.push(child.data.thumbnail)
			//let mage = { mage:child.data.thumbnail, link: child.data.permalink }
			posts.push(post)
		});
		return { posts: posts }
	}
}
</script>
<style>
#title {
	background: lime;
}
html, body {
	background: lime;
}
li {
	list-style: none;
}
#post {
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
#left {
	display: flex;
	flex-direction: column;
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
	width: 50vw;
	overflow: hidden;
	overflow-x: scroll;
	position: relative;
	height: 150px;
	flex-shrink: 0;
}
#words {
	display: flex;
	width: 50vw;
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
	position: relative;
}
.wrap a {
	position: absolute;
	width: 100%;
	height: 100%;
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
}
#swipe {
display: flex;
}
#swipe h1 {
	 color: red;
}
#right {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
