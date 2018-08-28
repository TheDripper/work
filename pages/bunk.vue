<template>
<div class=work>
	<ul>
	<li><a href=port>Portfolio</a></li>
	<li><a href=auto>Ideas</a></li>
	</ul>
	<h1>TYLER HILL</h1>
</div>
</template>
<script>
export default {
}
</script>
<style>
@font-face {
  font-family: "vcr";
  src: url("~/vcr.ttf"); }

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue; }

h1 {
  font-family: "vcr", Helvetica, Arial;
  font-size: 64px;
  text-transform: uppercase;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 9999;
  color: white;
  cursor: pointer;
  text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black, 5px -5px 0 black; }

a {
	color: lime;
	text-decoration: none;
	margin-right: 40px;
}
ul {
	position: fixed;
	top: 40px;
	left: 40px;
}
li {
	list-style: none;
	color: lime;
  	font-family: "vcr", Helvetica, Arial;
	font-size: 48px;
	text-transform: uppercase;
}
@media(max-width:600px) {
	ul {
		position: relative;
		top: auto;
		left: auto;
		font-size: 32px;
		padding: 0;
	}
	h1 {
		right: 10px;
		bottom: 10px;
		font-size: 48px;
  		text-shadow: 3px 3px 0 black, -3px -3px 0 black, -3px 3px 0 black, 3px -3px 0 black; 
	}
	.work {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 10px;
		align-items: center;
	}
	li {
		margin-bottom: 20px;
	}
}
</style>
