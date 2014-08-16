$(window).resize(updateHeader);

var titleHeight = 0;
var navHeight = 0;

$(document).ready(function() {
    updateHeader();
    
    $('.scroll').click(function(event){
        event.preventDefault();
        scrollTo($(this.hash).offset().top, 0);
    });
    
    $('.more').click(function(event){
        event.preventDefault();
        var project = $(this).closest('.project');
        var mask = project.find('.project_mask');
        var detail = project.find('.project_detail');
        if ($(this).html().indexOf("More") != -1) {
            $(this).html('Read Less <i class="fa fa-chevron-left"></i>');
            mask.stop();
            mask.animate({left:'100%'}, 800, 'easeInCubic');
            scrollTo(mask.offset().top+mask.height()-navHeight, 100);
        }
        else {
            $(this).html('Read More <i class="fa fa-chevron-right"></i>');
            mask.stop();
            mask.animate({left:'0'}, 800, 'easeOutCubic');
        }
        detail.animate({height:'toggle', opacity:'toggle'}, 700, 'easeOutCubic');
    });
    
    $('.collapse').click(function(event){
        event.preventDefault();
        var project = $(this).closest('.project');
        var more = project.find('.more');
        more.click();
    });
});

function updateHeader() {
    var windowHeight = $(window).height();
    navHeight = $('nav').height();
    titleHeight = $('#title').height();
    $('#header').css('height', windowHeight);
    $('#title').css('top', parseInt(windowHeight/2-titleHeight/2+navHeight/2));
}

function scrollTo(dest, delay, time) {
    $('html,body').stop();
    $('html,body').delay(delay).animate({scrollTop:dest-navHeight}, 1400, 'easeInOutCubic');
}

$(window).bind('mousewheel', function(e){
    $('html,body').stop();
});

$(window).bind('DOMMouseScroll', function(e){
    $('html,body').stop();
});