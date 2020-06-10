;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		
		// Smooth Scrolling
		$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        $('.header').removeClass('nav-visible');
		        return false;
		      }
		    }
		  });
		});

		// Mobile Menu
		$('.btn-menu').on('click', function() {
			$(this).closest('.header').toggleClass('nav-visible');
		});
	});
})(jQuery, window, document);
