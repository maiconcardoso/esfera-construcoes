$(".btn-menu").click(function(){
    $(".menu").show();
});

$(".btn-close").click(function(){
    $(".menu").hide();
});

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
    return false;
});