/**
 * headerParallax.js v1.0.0
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015 Austin Chan, Class of 2017
 * Kappa Sigma Fraternity
 */
var headerParallax = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( 'header' ),
		$anchor = $( 'header .anchor' ),
		didScroll = false,
		changeHeaderOn = 100;

	function init() {

		if ( !header ) {
			return;
		}

		headerHeight = getHeaderHeight();

		window.addEventListener( 'scroll', function( event ) {

			var percent = percentDownHeader();

			if ( percent <= 1 ) {
				setHeaderPercent( percent );
			}

		}, false );

		window.addEventListener( 'resize', function( event ) {
			headerHeight = getHeaderHeight();
			$(window).scroll();
		}, false);
	}

	function getHeaderHeight() {
		return header.offsetHeight;
	}

	function percentDownHeader() {
		return scrollY() / headerHeight;
	}

	function setHeaderPercent( percent ) {
		var scalar = percent * 23 - 7;

		$anchor.css('transform', 'translateY(' + scalar + '%)');
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();