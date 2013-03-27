$(document).ready(function() {

	$(window).keypress(function(e) {
		keystroke(e.which);
	});

	function keystroke(key) {
		$('#canvas').append('<div class="color-' + key + '"></div>');
	}

})