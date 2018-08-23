<template>
<div id=port>
	<div id=tro>
		<h1>Tyler Hill builds Hypertext Documents</h1>
		<ul>	
		<li v-for="site in sites"> 
		<a target=_blank :href="site.href">{{ site.name }}</a>
		</li>
		</ul>	
		<img src=/dayjob.jpg />
	</div>
</div>
</template>
<script>
export default {
	asyncData(context) {
		return {
			sites: [
				{
					name: "Berkeley Food Institute",
					href: "https://food.berkeley.edu",
				},
				{
					name: "Biochain US",
					href: "https://www.biochain.com/"
				},
				{
					name: "Alameda Health Consortium",
					href: "https://www.alamedahealthconsortium.org/",
				},
				{
					name: "Newomics Biotechnology",
					href: "https://www.newomics.com/",
				},
				{
					name: "Face Reality Acne Clinic",
					href: "https://facerealityacneclinic.com/",
				},
				{
					name: "Create Real Impact",
					href: "https://createrealimpact.com/",
				}
			]
		}
	}
}
</script>
<style>
html, body {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	overflow-x: hidden;
}
#tro img {
	position: absolute;
	bottom: 5px;
	right: 5px;
	width: 400px;
	height: 400px;
}
#tro {
	font-family: "vcr", "courier new";
	width: 100vw;
	height: 100vh;
	background: blue;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	overflow: hidden;
}
#tro h1 {
	color: white;
	font-size: 64px;
	text-transform: uppercase;
	text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black, 5px -5px 0 black;
	padding: 5px;
	margin-bottom: 10px;
}
li {
	list-style: none;
	margin-bottom: 10px;
}
li a {
	color: lime;
	text-transform: uppercase;
	font-size: 44px;
}
li a:hover {
	color: magenta;
}
ul {
	height: 90vh;
	padding: 0;
	width: 700px;
	padding-left: 5px;
	overflow: scroll;
}
@font-face {
  font-family: "vcr";
  src: url("~/vcr.ttf"); }

@media(max-width: 1080px) {
	#tro {
		flex-direction: column;
		height: auto;
	}
	#tro h1 {
		position: relative;
	}
	#tro img {
		position: relative;	
		bottom: auto;
		right: auto;
	}
	ul {
		height: auto;
		width: 100%;
	}
	li {
		margin-bottom: 10px;
	}
}
@media(max-width: 600px) {
	#tro h1 {
		font-size: 32px;
		text-shadow: 3px 3px 0 black, -3px -3px 0 black, -3px 3px 0 black, 3px -3px 0 black;
		margin-bottom: 10px;
	}
	li a {
		font-size: 22px;
	}
	li {
		margin-bottom: 15px;
	}
	#tro img {
		height: auto;
		width: 100%;
	}
}
</style>
