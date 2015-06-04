var animationEndString = 'webkitAnimationEnd oanimationend msAnimationEnd animationend';
var scrollThreshold = 40;
var maxScrollThreshold = 50;
$(document).ready(function(){

	var home_box = $('.home-content-box');
	var information_box = $('.information-content-box');
	$(window).on('DOMMouseScroll mousewheel', function(event){
		console.log(event.originalEvent.wheelDelta)
		if( (Math.abs(event.originalEvent.wheelDelta) < scrollThreshold)){
			return; 
		}
		outClass = '', inClass = '';
		$currentPage = null;
		$nextPage = null;

		if (event.originalEvent.wheelDelta >= 0) {
			outClass = "slide-moveToBottom"
			inClass = "slide-moveFromTop"
			$currentPage = information_box
			$nextPage = home_box
		}
		else{
			//scroll bottom
			outClass = "slide-moveToTop"
			inClass = "slide-moveFromBottom"
			$currentPage = home_box
			$nextPage = information_box
		}

		$currentPage.addClass(outClass).on( animationEndString,
			function(){
 				$currentPage.removeClass('active');
 				$currentPage.removeClass(outClass);
 				// $nextPage.addClass('active');
			}
		);
		// $nextPage.addClass("active");
		$nextPage.addClass(inClass).on( animationEndString,
			function(){
				$nextPage.addClass("active");
				$nextPage.removeClass(inClass);
			});
	});

});