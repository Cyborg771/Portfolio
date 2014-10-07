$(window).resize(updateHeader);

var titleHeight = 0;
var navHeight = 0;
var lockScroll = false;

$(document).ready(function() {
    updateHeader();
    
    //alert($(window).width()+" "+$(window).height());
    
    $('.scroll').click(function(event){
        event.preventDefault();
        autoScroll($(this.hash).offset().top, 0, 1400);
    });
    
    $('.nav-link').click(function(event){
        if ($('#nav-button').css("display") != 'none') {
            $('#nav-links').animate({height:'toggle', opacity:'toggle'}, 700, 'easeInOutCubic');
        }
    });
    
    $('.title_link').click(function(event){
        event.preventDefault();
        var project = $(this).closest('.project');
        var more = project.find('.more');
        more.click();
    });
    
    $('.more').click(function(event){
        event.preventDefault();
        var project = $(this).closest('.project');
        var mask = project.find('.project_mask');
        var detail = project.find('.project_detail');
        if ($(this).html().indexOf("More") != -1) {
            $(this).html('Read Less <i class="fa fa-chevron-left"></i>');
            mask.stop();
            mask.animate({left:'100%'}, 700, 'easeInOutCubic');
            autoScroll(project.offset().top, 100, 1400);
        }
        else {
            $(this).html('Read More <i class="fa fa-chevron-right"></i>');
            mask.stop();
            mask.animate({left:'0'}, 700, 'easeInOutCubic');
        }
        detail.animate({height:'toggle', opacity:'toggle'}, 700, 'easeInOutCubic');
    });
    
    $('.collapse').click(function(event){
        event.preventDefault();
        var project = $(this).closest('.project');
        var more = project.find('.more');
        more.click();
        autoScroll(project.offset().top, 0, 700);
    });
    
    $('#plink').mouseenter(function(event){
        $('#project_navigation').addClass('show');
    });
    
    $('#project_navigation').mouseleave(function(event){
        $(this).removeClass('show');
    });
    
    $('#nav-button').click(function(event){
        event.preventDefault();
        $('#nav-links').animate({height:'toggle', opacity:'toggle'}, 700, 'easeInOutCubic');
    });
    
});

function updateHeader() {
    var windowHeight = $(window).height();
    navHeight = $('nav').height();
    titleHeight = $('#title').height();
    $('#header').css('height', windowHeight);
    $('#title').css('top', parseInt(windowHeight/2-titleHeight/2+navHeight/2));
}

function autoScroll(dest, delay, time) {
    if (dest == 0) dest += navHeight;
    else if (dest > $(document).height() - $(window).height()){
        dest = $(document).height() - $(window).height() + navHeight;
    }
    $('html,body').stop();
    $('html,body').delay(delay).animate({scrollTop:dest-navHeight}, time, 'easeInOutCubic');
    $('#project_navigation').removeClass('show');
}

$(window).bind('mousewheel', function(e){
    onScroll(e);
});

$(window).bind('DOMMouseScroll', function(e){
    onScroll(e);
});

function onScroll(e) {
    $('html,body').stop();
    if (lockScroll) e.preventDefault();
    $('#project_navigation').removeClass('show');
}

$('.project_image').fancybox({
    beforeShow  : function() {
        lockScroll = true;
    },
    afterClose  : function(){
        lockScroll = false;
    },
    helpers : {
        overlay : {
            locked : false
        }
    }
});