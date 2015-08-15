$(document).ready(function() {
	$(".open-popup").on('click', function() {
		var target = $(this).data("target");
		$(target).toggleClass("hidden");
		return false;
	});
	
	$(".close-popup").on('click', function() {
		var target = $(this).data("target");
		$(target).addClass("hidden");
		return false;
	});
	
	$("#logout").on('click', function() {
		var leavegame = confirm("Are you sure you want to leave this game? Your points will be reset to zero.");
		return leavegame;
	});

	//prevent pull down to refresh 
	//http://stackoverflow.com/questions/29008194/disabling-androids-chrome-pull-down-to-refresh-feature
	var lastTouchY = 0;
	var preventPullToRefresh = false;

	$('body').on('touchstart', function(e) {
		if (e.originalEvent.touches.length != 1) { return; }
		lastTouchY = e.originalEvent.touches[0].clientY;
		preventPullToRefresh = window.pageYOffset == 0;
	});

	$('body').on('touchmove', function(e) {
		var touchY = e.originalEvent.touches[0].clientY;
		var touchYDelta = touchY - lastTouchY;
		lastTouchY = touchY;
		if (preventPullToRefresh) {
			preventPullToRefresh = false;
			if (touchYDelta > 0) {
				e.preventDefault();
				return;
			}
		}
	});
});
