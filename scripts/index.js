$(function() {

    // Create Loader

    $('body').prepend('<section class="overlay-loading text-center"><div class="lds-dual-ring"></div></section>');

    // Make The Loader Page

    $('.overlay-loading').fadeOut(1500, function() {

        $(this).fadeOut(1500, function() {

            $(this).remove();

            $('body').css('display', 'visible')

        });

    });

    // Make The Navbar With Low Opacity When You Scrolled Down

    let myNav = $('.navbar');

    $(window).scroll(function() {

        if ($(window).scrollTop() >= myNav.height()) {

            if (!myNav.hasClass('scrolled')) {

                myNav.addClass('scrolled');

            };

        } else {

            myNav.removeClass('scrolled');

        };

    });

    // Give Color Border To Input In form

    $('textarea, input[type="text"], input[type="password"], input[type="email"]').focus(function() {

        $(this).css('border', '1px solid #FF8B38');

    });

    $('textarea, input[type="text"], input[type="password"], input[type="email"]').blur(function() {

        $(this).css({
            border: 'none',
            border: '1px solid transparent',
            borderBottom: '1px solid rgb(204, 204, 204)'
        });

    });

    // Put The Class Selected To The Tabs 

    $('.tabs-section .leftside li').click(function() {

        // To Give Class Selected To Tab You Clicked On it
        $(this).addClass('selected').siblings().removeClass('selected');

        // To Hidden All Divs Inside The Section
        $('.tab-contents div').slideUp(450);

        // To Show The Content
        $($(this).data('target')).delay(400).slideDown(450);

    });

    // When Clicked On The Links In The Navbar Go To The it Section

    $('#mynav li a').click(function(e) {

        e.preventDefault();

        $('body, html').animate({
            scrollTop: $($(this).data('scrolled')).offset().top
        }, 500)

    });

});