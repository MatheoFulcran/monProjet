window.addEventListener("load",display);

function display(){
	document.getElementById("1joueur").addEventListener("click",snake1);
	document.getElementById("2joueurs").addEventListener("click",snake2);
}

function snake1(){
	document.getElementById("menu").innerHTML="<script language='javascript' src='scripts/wz_jsgraphics.js'></script><script src='scripts/snake1P.js'></script>";
}

function snake2(){
	document.getElementById("menu").innerHTML="<script language='javascript' src='scripts/wz_jsgraphics.js'></script><script src='scripts/snake2P.js'></script>";
}