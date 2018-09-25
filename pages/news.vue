<template>
<div>
<li v-for="hit in hits" @click="getHit"> 
<h1>
<span v-for="(word, index) in hit.title">{{ word }} </span>
</h1>
</li>
</div>
</template>
<script>
let axios = require('axios')
export default {
	async asyncData(context) {
		try {
			let hits = []
			let { data } = await axios('https://www.reddit.com/r/worldnews.json?limit=50')
			data.data.children.forEach(post=>{
				let hitter = {
					title: post.data.title.split(' '),
					link: 'https://www.reddit.com'+post.data.permalink
				}
				console.log(hitter)
				hits.push(hitter)
			})
			return { hits: hits }
		} catch(err) {
			console.log(err)
		}
	},
	methods: {
		getHit: e=>{
			e.target.style.color = "blue"
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
}
li {
	list-style: none;
	padding: 20px 0;
	position: relative;
}
li a {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}
h1 span:nth-child(1), h1 span:nth-child(2), h1 span:nth-child(3) {
	text-transform: uppercase;
}


</style>
