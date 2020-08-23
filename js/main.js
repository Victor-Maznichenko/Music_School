$(function(){
	
	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.menu-mobile').toggleClass('menu-mobile--active');
	});
	
});
