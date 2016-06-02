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
	});
	$(function () {
	    // Get the context of the canvas element we want to select
	    var data = {
		    labels: ["JavaScript/ES6", "NodeJS/Express", "Backbone/Marionette", "ReactJS", "CSS3", "CSS pre-processor", "HTML5", "Design"],
		    datasets: [
		        {
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "rgba(151,187,205,1)",
		            pointColor: "rgba(151,187,205,1)",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [75, 40, 70, 45, 50, 55, 60, 25]
		        }
		    ]
		};
		var option = {
		    responsive: true,
		};
	    var ctx = document.getElementById("skillsChart").getContext('2d');
	    var myRadarChart = new Chart(ctx).Radar(data, option);
	    // document.getElementById('skillsChart').innerHTML = ctx;
	});
});