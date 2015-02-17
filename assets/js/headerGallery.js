/**
 * headerGallery.js v1.0.0
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015 Austin Chan, Class of 2017
 * Kappa Sigma Fraternity
 */
var headerGallery = (function() {

	function init() {
		$('header .anchor .image:gt(0)').hide();
	    setInterval(function(){
			$('header .anchor :first-child').fadeOut(1400)
			.next('.image').fadeIn(1400)
			.end().appendTo('header .anchor');
		}, 5500);
	}

	init();

})();