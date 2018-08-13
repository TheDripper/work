<template>
<div class=work>
	<h1 id=flash class=day v-on:click="night">TYLER HILL</h1>
</div>
</template>
<script>
export default {
	
}
</script>
<style>
@font-face {
  font-family: "vcr";
  src: url("/vcr.ttf"); }

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue; }

video {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -10%) scale(2);
  animation-duration: 10s;
  animation-name: zoom; }

h1 {
  font-family: "vcr";
  font-size: 64px;
  text-transform: uppercase;
  position: relative;
  z-index: 999; }

.day {
  color: white;
  cursor: pointer;
  text-shadow: 5px 5px 0 black, -5px -5px 0 black, -5px 5px 0 black, 5px -5px 0 black; }

.night {
  color: lime;
  cursor: pointer; }

nav {
	z-index: 9999;
	position: relative;
  	font-family: "vcr";
  	font-size: 32px;
}
a {
	color: lime;
	text-decoration: none;
	margin-right: 40px;
}
#nav {
	display: none;
}
</style>
