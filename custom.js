// Adjust intro header height to Window height
$(function() {
    $(window).resize(function() {
        $('header').height($(window).height());
    });
    $(window).resize();
});


// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})


// Close the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
$('.navbar-toggle:visible').click();
});
