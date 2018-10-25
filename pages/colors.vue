<template> 
<div id=blog>
<ul>
	<li id=blu v-for="hit in blue" v-bind:style="{ backgroundImage:'url('+hit.webformatURL+')' }">
	</li>
</ul>
<ul>
	<li id=tur v-for="hit in turq" v-bind:style="{ backgroundImage:'url('+hit.webformatURL+')' }">
	</li>
</ul>
<ul>
	<li id=lac v-for="hit in lac" v-bind:style="{ backgroundImage:'url('+hit.webformatURL+')' }">
	</li>
</ul>
<ul>
	<li id=noir v-for="hit in black" v-bind:style="{ backgroundImage:'url('+hit.webformatURL+')' }">
	</li>
</ul>
</div>
</template>
<script>
let axios = require('axios')
export default {
	async asyncData(context) {
		try {
			let  blue = await axios('https://pixabay.com/api/?key=10493578-e0c15b403dc08f3bc106b40b8&colors=blue')
			blue = blue.data.hits
			let  turq = await axios('https://pixabay.com/api/?key=10493578-e0c15b403dc08f3bc106b40b8&colors=turquoise')
			turq = turq.data.hits
			let  lac = await axios('https://pixabay.com/api/?key=10493578-e0c15b403dc08f3bc106b40b8&colors=lilac')
			lac = lac.data.hits
			let  black = await axios('https://pixabay.com/api/?key=10493578-e0c15b403dc08f3bc106b40b8&colors=black')
			black = black.data.hits
			return {
				blue: blue,
				turq: turq,
				lac: lac,
				black: black
			}
		} catch(err) {
			console.log(err)
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
}
#blog {
	transform: rotate(-90deg);
	height: 100vw;
}
ul {
	list-style: none;
	padding: 0;
	display: flex;
	transform: rotate(-20deg) translateX(-250vw);
	transform-origin: right top;
	height: 25vw;
}
li {
	width: 25vw;
	height: 25vw;
	background-size: cover;
	flex-shrink: 0;
	transform: rotate(90deg);
	transform-origin: right top;

}
#blu {
	background: blue;
}
</style>
