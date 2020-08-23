$(function(){

		disable: function () {
			var maxWidth = 1000;
			return window.innerWidth < maxWidth;
		},
		throttleDelay: 99
	});
	
	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.menu-mobile').toggleClass('menu-mobile--active');
	});
	
});