// Page Loader
$(window).on('load', function () {
    setTimeout(function () {
        $('.page-loader').fadeOut();
    }, 500);
});

// Feather Fonts
feather.replace()

// Header Scroll
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('body').addClass('navbar--scrolled');
    } else {
        $('body').removeClass('navbar--scrolled');
    }
});

// Navigation ACTIVE class
$(document).ready(function(){
	$('.navbar-nav li a[href="' + document.location.pathname + '"]').addClass('active');
});

// We put modals out of wrapper to working properly
$(document).ready(function(){
	$('.modal').appendTo("body");
});

// Document Ready
$(document).ready(function () {
	
	// Body Theme/Portal Switch
	$('body').on('click', '.themes__item', function (e) {
        e.preventDefault();

        // Set active item
        $('.themes__item').removeClass('active');
        $(this).addClass('active');

        // Set theme
        var theme = $(this).data('sa-value');
        $('body').attr('data-sa-theme', theme);
    });
    
    // Navbar Theme/Portal Switch
	$('.navbar').on('click', '.themes__item', function (e) {
        e.preventDefault();

        // Set active item
        $('.themes__item').removeClass('active');
        $(this).addClass('active');

        // Set theme
        var theme = $(this).data('sa-value');
        $('.navbar').attr('data-sa-theme', theme);
    });
    
    // Tooltips and Popovers
  	$('[data-toggle="popover"]').popover()
  	$('[data-toggle="tooltip"]').tooltip()
	
});