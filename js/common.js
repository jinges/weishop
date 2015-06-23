$(function() {
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

	$("#search-icon").click(function() {
		$(".search").addClass("show").find(".txt").focus();
	});

	$("#nav-icon").click(function() {
		alert('1');
	});

	$(".minus").click(function(){
		var countObj = $(this).next();
		var count =  countObj.val()*1;
		if(count == 1){
			return false;
		}
		countObj.val(-- count);
	});

	$(".plus").click(function(){
		var countObj = $(this).prev();
		var count =  countObj.val()*1;

		countObj.val(++ count);
	});

	$(".delcar").click(function(){
		//异步移除订单
		
		$(this).parent().parent().remove();
	})
});