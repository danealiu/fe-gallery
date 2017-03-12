/**
 * Created by xiaojuan on 17/2/28.
 */
(function() {
	require("../css/style.scss");

	const appendJS = function (src) {
		let js = document.createElement('script');
		js.type = 'text/javascript';
		js.src = src;
		js.async = false;
		document
			.getElementsByTagName('head')[0]
			.appendChild(js);
	};
	setTimeout(function () {
		appendJS("../../build/js/hotcss.js");
	}, 0);
})();
$(function() {
	//选择画框
	var $frames = $(".frames ul");
	$frames.css("width", 5.3 * $frames.find('li').length + 'rem');
	$frames.delegate('li', 'click', function() {
		$(this).addClass("active").siblings().removeClass('active');
		$('.img').find('.border').attr("src", $(this).find('img').attr('src'));
		var $img = $('#frontImg');
		$('#borderImg').css({width: (parseInt($img[0].dataset.width)) + 'px', height: (parseInt($img[0].dataset.height)) + 'px'})
	});

	//选择尺寸
	$('.size .nav-list li').click(function() {
		$(this).addClass("active").siblings().removeClass('active');
		$('.nav-list-content ul').eq($(this).index()).show().siblings().hide();
	});
	$('.size .skill li').click(function() {
		$(this).addClass("active").siblings().removeClass('active');
	});
});