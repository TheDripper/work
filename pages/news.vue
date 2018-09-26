<template>
<div id=main>
<div id=left>
	<li v-for="hit in hits" @click="getHit"> 
	<h1 :data-link="hit.link">
	<span v-for="(word, index) in hit.title" v-bind:class="{ trio: index<3 }">{{ word }} </span>
	</h1>
	</li>
</div>
<div id=right>
	<p v-for="graph in graphs">{{ graph.text }}</p>
</div>
</div>
</template>
<script>
let axios = require('axios')
const cheerio = require('cheerio')
export default {
	async asyncData(context) {
		try {
			let hits = []
			let graphs = [{text:''}]
			let { data } = await axios('https://www.reddit.com/r/worldnews.json?limit=50')
			data.data.children.forEach(post=>{
				let hitter = {
					title: post.data.title.split(' '),
					link: post.data.url,
					id: post.data.id
				}
				hits.push(hitter)
			})
			return { hits: hits, graphs: graphs }
		} catch(err) {
			console.log(err)
		}
	},
	methods: {
		getHit: async function(e) {
			document.querySelector('#left').classList.add('freeze')
			document.querySelector('#right').classList.add('freeze')
			let link = e.target.parentNode.dataset.link
			e.target.parentNode.parentNode.classList.add('open')
			console.log(link)
			let graphs = await axios.post('/hit',{hit:link})
			console.log(graphs)
			this.graphs = graphs.data.text
			this.mages = graphs.data.mages
			document.querySelector('#left').style.width = '17vw'
			document.querySelector('#right').style.width = '83vw'
		}
	}
}
</script>
<style>
html, body {
	margin: 0;
	padding: 0;
	background: #F2EBCD;
	font-family: "Times", Times, serif;
	box-sizing: border-box;
}
li {
	list-style: none;
	padding: 20px 0;
	position: relative;
	cursor: pointer;
}
li:hover {
}
li a {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
h1 .trio {
	text-transform: uppercase;
}

#main {
	display: flex;
}
#right {
	width: 10vw;
	transition: all 0.5s ease;
}
#left {
	transition: all 0.5s ease;
	width: 90vw;
}
.freeze {
	height: 100vh;
	overflow: scroll;
}
.freeze li:not(.open) {
	display: none;
}
.open {
	padding: 0;
}
.open span:not(.trio) {
	display: none;
}
.open h1 {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	font-size: 11vw;
	word-break: break-all;
}
#right p {
	font-size: 24px;
	display: inline;
}
#right p:nth-child(3n) {
	text-transform: uppercase;
	font-weight: bold;
	font-size: 28px;
	padding: 0;
}
#right p:nth-child(4n) {
	font-style: italic;
}
#right p:nth-child(5n) {
	background: black;
	color: white;
	font-family: "courier";
	padding: 0;
}
</style>
