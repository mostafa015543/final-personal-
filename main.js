$(document).ready(function () {
    $('.robot').show();
    $('.page1,.page2, .page3, .page4').hide();

    $('nav a').on('click', function (e) {
        e.preventDefault();
        $('.robot').hide();
        var targetPage = $(this).attr('href');
        
        $('.page1, .page2, .page3, .page4:visible').fadeOut(300, function() {

            $(targetPage).delay(100).fadeIn(500);
        });
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
});
