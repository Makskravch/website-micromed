$(document).ready(function() {

    const body = $('body');
    
    // MENU
    if ($('#menu').length) {

        const menu    = $('#menu');
        const menuBtn = $('.menu__btn');

        $(document).click(function(e) {

            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu')) {
                body.toggleClass('overflow')
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
                body.toggleClass('overflow')
                search.toggleClass('search--open')
            }
        })
    }

    // CARD
    if ($('#card').length) {

        const card = $('#card');

        $(document).click(function(e) {

            if ($(e.target).closest('.card__btn').length || $(e.target).hasClass('card')) {
                body.toggleClass('overflow')
                card.toggleClass('card--open')
            }
        })
    }

    
    // HOME main slider
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

    // HOME tile section (sale)
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

    // HOME tile section (new)
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

    // HOME tile section (top)
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

    // PRODUCT PAGE
    // Preview tabs (photo)
    if ($("#product__preview").length) {

        let img, 
            container = $('.product__photo_inner')

        $("#product__preview").click(function(e) {
            if ($(e.target).closest('.product__preview_item')) {
                img = $(e.target).closest('.product__preview_item').find('.product__preview_img')
                src = img.attr('src')
                container.find('img').attr('src', src)
            }
        })
    }

    // Preview tabs (description)
    if ($("#product__description").length) {

        let tabs = $('.product__description_tab_item')
        let panes = $('.product__description_pane_item')

        $("#product__description").click(function(e) {
            tabs.removeClass('product__description_tab_item--active');
            $(e.target).closest('.product__description_tab_item').addClass('product__description_tab_item--active')

            panes.removeClass('product__description_pane_item--active');

            for (let i = 0; i < tabs.length; i++) {
                if ($(tabs[i]).hasClass('product__description_tab_item--active')) {
                    $(panes[i]).addClass('product__description_pane_item--active')
                }
            }
        })
    }
})