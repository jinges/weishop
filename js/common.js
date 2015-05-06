(function(){
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function(){
		var width = document.body.clientWidth;
		if(!width){ return false;};
		width = width > 640 ? 640 : width;
		document.documentElement.style.fontSize = 10 * (width / 320) +"px";
	}
	window.addEventListener(resizeEvt, recalc, false);
	document.addEventListener('DOMContentLoaded', recalc, false);
})();

// function openwin() { 
//    var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !==     null) ||    // alternative standard method  
//             (document.mozFullScreen || document.webkitI*sFullScreen);

//     var docElm = document.documentElement;
//     if (!isInFullScreen) {

//         if (docElm.requestFullscreen) {
//             docElm.requestFullscreen();
//         }
//         else if (docElm.mozRequestFullScreen) {
//             docElm.mozRequestFullScreen();
//             alert("Mozilla entering fullscreen!");
//         }
//         else if (docElm.webkitRequestFullScreen) {
//             docElm.webkitRequestFullScreen();
//         }
//     }
// }

// $("body").click(openwin);