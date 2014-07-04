$(window).resize(updateHeader);

var titleHeight = 0;
var navHeight = 0;

$(document).ready(function() {
    updateHeader();
    
    $('.scroll').click(function(event){
        event.preventDefault();
        $('html,body').stop();
        var scrollTop = $(window).scrollTop();
        var dest = $(this.hash).offset().top;
        $('html,body').animate({scrollTop:dest-navHeight}, 1400, 'easeOutCubic');
    });
});

function updateHeader() {
    var windowHeight = $(window).height();
    navHeight = $('nav').height();
    titleHeight = $('#title').height();
    $('#header').css('height', windowHeight);
    $('#title').css('top', parseInt(windowHeight/2-titleHeight/2+navHeight/2));
}

$(window).bind('mousewheel', function(e){
    $('html,body').stop();
});

$(window).bind('DOMMouseScroll', function(e){
    $('html,body').stop();
});