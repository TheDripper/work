<template>
<div class=work>
	<nav id=nav>
	<a href=/auto>AUTOBLOG</a>
	<a href=/dayjob>DAYJOB</a>
	<a href=/chat>CHAT</a>
	</nav>
	<video playsinline autoplay muted loop id=splash src=back.mp4></video>
	<h1 id=flash class=day v-on:click="night">DROWN YOURSELF IN LUXURY</h1>
</div>
</template>
<script>
export default {
	methods: {
		night: function(e) {
			document.getElementById('splash').src='night.mp4'
			e.target.style.color = 'lime'
			e.target.style.textShadow = 'none'
			document.getElementById('nav').style.display='flex'
		}
	}
}
</script>
<style>
@keyframes blink {
  50% {
    opacity: 0.0; } }

@-webkit-keyframes blink {
  50% {
    opacity: 0.0; } }

.blink {
  animation: blink 1s step-start 0s infinite;
  -webkit-animation: blink 1s step-start 0s infinite; }

@keyframes zoom {
  from {
    transform: translate(-50%, -50%) scale(1); }
  to {
    transform: translate(-50%, -10%) scale(2); } }

@font-face {
  font-family: "vcr";
  src: url("~/assets/vcr.ttf"); }

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
