<template>
<div id=post>
<div id=top>
<span id=black class=bar></span>
<span id=purple class=bar></span>
<span id=turq class=bar></span>
<span id=blu class=bar></span>
</div>

<h1>Post: {{ id }}</h1>
<h2>Content Here</h2>
<a href=/tape/>Back to archive <<< </a>

<div id=bottom>
<span id=red class=bar></span>
<span id=orange class=bar></span>
<span id=pink class=bar></span>
<span id=black class=bar></span>
</div>

</div>
</template>
<script>
export default {
	asyncData(context) {
		return {
			id: context.params.id
		}
	}
}
</script>
<style>
#black { background: black; }
#blu { background: blue; }
#turq { background: cyan; }
#purple { background: purple; }
#red { background: red; }
#orange { background: orange; }
#pink { background: pink; }
.bar {
	width: 100vw;
	height: 50px;
	display: block;
}
#top {
	position: fixed;
	top: 0;
	left: 0;
}
#bottom {
	position: fixed;
	bottom: 0;
	left: 0;
}
#post {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
}
</style>
