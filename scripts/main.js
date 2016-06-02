$(document).on('ready', function() {
	$('.fa-bars').on('click', function(e) {
		e.preventDefault();
		$('.header-nav-links-mobile').toggleClass('active');
	});
	$(document).on('click touchstart', '.header-nav-links-link', function(e) {
		e.preventDefault();
		switch (e.target.id) {
			case 'work':
				$('body').animate({scrollTop: Math.ceil($('.secondary-container').offset().top)}, 500);
				break;
			case 'skills':
				$('body').animate({scrollTop: Math.ceil($('.quinary-container').offset().top)}, 500);
				break;
			case 'about':
				$('body').animate({scrollTop: Math.ceil($('.senary-container').offset().top)}, 500);
				break;
			case 'contact':
				$('body').animate({scrollTop: Math.ceil($('.septenary-container').offset().top)}, 500);
				break;
		}
	});
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	})
});