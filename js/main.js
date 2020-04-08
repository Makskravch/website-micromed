$(document).ready(function() {

    // MENU
    if ($('.menu__btn').length) {
        
        $(document).click(function(e) {
            $(e.target).closest('.menu__btn').toggleClass('menu__btn--open')
        })
    }
})