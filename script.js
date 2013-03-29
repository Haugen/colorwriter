$(document).ready(function() {

	var avalibleKeys = new Array(
		113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104,
		106, 107, 108, 122, 120, 99, 118, 98, 110, 109, 113, 32
	);

	$(window).keypress(function(e) {
		if ($.inArray(e.which, avalibleKeys) != -1) {
			keystroke(e.which);
		}
	});

	function keystroke(key) {
		$('#canvas').append('<div class="color-' + key + '"></div>');
	}

})