$(document).ready(function() {

    // MENU
    if ($('#menu').length) {

        const menu    = $('#menu');
        const menuBtn = $('.menu__btn');

        $(document).click(function(e) {

            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu')) {
                menuBtn.toggleClass('menu__btn--open')
                menu.toggleClass('menu--open')
            }
        })
    }

    // SEARCH
    if ($('#search').length) {

        const search = $('#search');

        $(document).click(function(e) {

            if ($(e.target).closest('.search__btn').length || $(e.target).hasClass('search')) {
                search.toggleClass('search--open')
            }
        })
    }

    // CARD
    if ($('#card').length) {

        const card = $('#card');

        $(document).click(function(e) {

            if ($(e.target).closest('.card__btn').length || $(e.target).hasClass('card')) {
                card.toggleClass('card--open')
            }
        })
    }
})