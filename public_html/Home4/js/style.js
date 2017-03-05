$(document).ready(function() {

	/*Put loading at very center*/
	function moveLoading() {
		var w = ($(window).width() - $('.loading').width()) / 2 - 150;
		var h = ($(window).height() - $('.loading').height()) / 2;
		$('.loading').css("top", h + "px");
		$('.loading').css("left", w + "px");
	}
	moveLoading();
	setTimeout(function() {
		$('.loading').fadeOut("slow");
		$('.after-loading').fadeIn("slow");
		moveDiv();
	}, 2000);

	var clickCount = 0;
	
	/*Remove Filpping effect from navbar*/
	if($(window).width() < 768) {
		$(".nav li").removeClass("cl-effect-20");
	}

	$(window).resize(function() {
		moveDiv();
		moveLoading();
		var w = $(window).width();
		if(w < 768) {
			$(".nav li").removeClass("cl-effect-20");
		} else {
			$(".nav li").addClass("cl-effect-20");
		}
	});

	/*Adjust drawer button width*/
	$('#nav-toggle').click(function() {
		clickCount++;
		if(clickCount % 2 === 1) {
			$("#2").animate({width: '66.67%'},"fast");
			$("#3").animate({width: '33.33%'},"fast");
		} else {
			$("#2").animate({width: '100%'},"fast");
			$("#3").animate({width: '100%'},"fast");
		}
	});

	/*Make shadow down*/
	$('.center-logo').mouseover(function() {
		$(this).animate({opacity: 0.5}, "slow");
	});

	$('.center-logo').mouseout(function() {
		$(this).animate({opacity: 1}, "slow");
	});

	/*Set year into middle of a window*/
	function moveDiv() {
		var left = ($(window).width() - $('.year-box').width()) / 2;
		$('.year-box').css("left", left + "px");
	}
});