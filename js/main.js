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

    
    // Home main slider
    if ($('.home__slider_list').length) {
        $('.home__slider_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false,
            dots: true,
            dotsClass: 'home__slider_pagination',
            // fade: true,
            // autoplay: true,
            // infinite: true,
            speed: 1000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        infinite: true
                    }
                },
            ]
        });
    }

    // Home tile section (sale)
    if ($('.slider__tile_sale').length) {
        $('.slider__tile_sale').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }

    // Home tile section (new)
    if ($('.slider__tile_new').length) {
        $('.slider__tile_new').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }

    // Home tile section (top)
    if ($('.slider__tile_top').length) {
        $('.slider__tile_top').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            draggable: true,
            autoplay: true,
            infinite: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });
    }
})