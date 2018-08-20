$(document).ready(function(){
	$('.burger').on('click', function(e) {
		$('.burger').toggleClass('burger-open');
		$('.main_nav').slideToggle();
	});
});