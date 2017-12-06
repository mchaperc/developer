$(document).on('ready', function() {
	$('.fa-bars').on('click', function(e) {
		e.preventDefault();
		$('.header-nav-links-mobile').toggleClass('active');
	});
	$(document).on('click touchstart', '.header-nav-links-link', function(e) {
		e.preventDefault();
		switch (e.target.id) {
			case 'work':
				console.log( 'in work' );
				$('html,body').animate({scrollTop: Math.ceil($('.secondary-container').offset().top)}, 500);
				break;
			case 'skills':
				$('html,body').animate({scrollTop: Math.ceil($('.quinary-container').offset().top)}, 500);
				break;
			case 'about':
				$('html,body').animate({scrollTop: Math.ceil($('.senary-container').offset().top)}, 500);
				break;
			case 'contact':
				$('html,body').animate({scrollTop: Math.ceil($('.septenary-container').offset().top)}, 500);
				break;
		}
	});
	$('#myModal').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	});
	$(window).on('scroll', () => {
		let currentLocation = $('html,body').scrollTop();
		let headerOffset = $('.header-nav-links').offset().top;
		if ( currentLocation <= headerOffset ) {
			$('#returnToTop').hide();
			return;
		}
		if ( currentLocation > headerOffset ) {
			$('#returnToTop').show(500);
			return;
		}
	});
	$('#returnToTop').on('click', (e) => $(window).css({scrollTop: 0}));
	$(function () {
	    // Get the context of the canvas element we want to select
	    let data = {
		    labels: ["JavaScript/ES6", "Python", "NodeJS/Express", "Backbone/Marionette", "ReactJS/Redux", "CSS3", "HTML5"],
		    datasets: [
		        {
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [90, 85, 60, 90, 85, 85, 85],
		        }
		    ]
		};
		let option = {
		    responsive: true,
		};
	    let ctx = document.getElementById("skillsChart").getContext('2d');
	    let myRadarChart = new Chart(ctx).Radar(data, option);
	    document.getElementById('skillsChart').innerHTML = ctx;
	});
});