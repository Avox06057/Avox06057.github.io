$(document).ready(function(){
	$(this).scrollTop(0);
});

$(function() {
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
    });
});
