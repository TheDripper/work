<template>
<div id=dayjob>
<h1>I WORK AT COMPUTER COURAGE</h1>
<h1>I WORK AT <span>COMPUTER COURAGE</span></h1>
<h1>I WORK <span>AT</span> COMPUTER COURAGE</h1>
<h1><span>I WORK</span> AT <span>COMPUTER</span> COURAGE</h1>
<h1>I WORK AT <span>COMPUTER</span> COURAGE</h1>
<h1>I WORK AT <span>COMPUTER</span> COURAGE</h1>
<h1>I WORK AT <span>COMPUTER</span> COURAGE</h1>
<h1>I WORK AT <span>COMPUTER</span> COURAGE</h1>
<h1>I WORK AT COMPUTER <span>COURAGE</span></h1>
<div id=maintain>
<label>I MAINTAIN HYPERTEXT DOCUMENTS FOR US DOLLARS AT COMPUTER COURAGE IN EMERYVILLE CALIFORNIA USA</label>	
<a href="https://food.berkeley.edu">Berkeley Food Institute</a>
<a href="https://www.biochain.com">Biochain US</a>
<a href="https://www.alamedahealthconsortium.org/">Alameda Health Consortium</a>
<a href="https://createrealimpact.com/">Create Real Impact</a>
<a href="https://facerealityacneclinic.com/">Face Reality Acne Clinic</a>
<a href="https://www.newomics.com/">Newomics Inc.</a>
</div>
</div>
</template>
<script>
export default {
}
</script>
<style>
a {
	font-family: "courier";
	display: block;
}
label {
	font-family: "Comic Sans MS";
	font-size: 22px;
	display: block;
}
#maintain {
	position: fixed;
	top: 20px;
	right: 20px;
	background: white;
	width: 400px;
	height: 600px;
}
@media(max-width: 600px) {
	#maintain {
		top: 400px;
	}
}
#dayjob {
	background-image: url('/dayjob.jpg');
	background-size: 20%;
	width: 100vw;
	min-height: 100vh;
}
h1 {
}
h1:nth-child(2) span {
	color: cyan;
}
h1:nth-child(3) span {
	color: lime;
}
h1:nth-child(4) span {
	color: magenta;
}
h1:nth-child(5) span {
	color: red;
}
h1:nth-child(6) span {
	color: orange;
}
h1:nth-child(7) span {
	color: yellow;
}
h1:nth-child(8) span {
	color: purple;
}
h1:nth-child(9) span {
	color: white;
}
</style>


