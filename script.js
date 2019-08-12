$(function() {

    $('body').animate({ 'opacity': 1 }, 500);

    $('section input').off('input blur');
    $('section input').on('input blur', function() {
        const $node = $(this);
        showPressMessage($node);
    });
});

function showPressMessage($node) {
    if($node.val()) {
        const $section = $node.parents('section');
        const $next    = $section.next('section');

        $section.find('p').css('opacity', 1);

        $(window).off('keydown');
        $(window).on('keydown', function(e) {
            if(e.which === 9) {
                e.preventDefault();
                $('html, body').animate({ 'opacity': 1, scrollTop: $next.offset().top }, 500);
                $next.find('input[type=text]').focus();
            }
        });
    } else {
        $(window).off('keydown');
        $node.parents('section').find('p').css('opacity', 0);
    }
}

function submit() {
    
}