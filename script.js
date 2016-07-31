+function() {
	var slides = {'0-0':6, '0-1':6};
	var page = 0;
	var UP = 38;
	var DOWN = 40;
	var LEFT = 37;
	var RIGHT = 39;
	var depth = 0;
	addEventListener('keyup', function() {
		var code = event.keyCode;
		var iframe = document.querySelector('iframe');
		if (code == UP && depth > 0) {
			depth -= 1;
		} else if (code == DOWN && (page + '-' + (depth + 1)) in slides) {
			depth += 1;
		} else if (code == LEFT && page > 0) {
			page -= 1;
		} else if (code == RIGHT && ((page + 1) + '-' + depth) in slides) {
			page += 1;
		}

		iframe.src = page + '-' + depth + '.html';
	});
} ();

