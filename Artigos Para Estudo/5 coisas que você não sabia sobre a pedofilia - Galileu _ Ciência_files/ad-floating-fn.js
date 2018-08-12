function getqueryString(url) {
	var scripts = document.getElementsByTagName("script");
	var i = 0;
	while (scripts[i]) {
		if (scripts[i].src.indexOf("ad-floating-fn") >= 0) {
			var myscript = scripts[i].src.replace(/^[^\?]+\??/, "").split("&");
			break;
		}
		i++;
	}
	for (var i = 0; i < myscript.length; i++) {
		var parse = myscript[i].split("=");
		if (parse[0] == url) {
			return parse[1];
		}
	}
	return;
}

var tempo = window.setTimeout(function () {
	clearTempo();
	closeInterv();
}, getTempo());

function getTempo() {
	var parseTempo = parseInt(getqueryString("tempo"));
	return parseTempo *= 1000;
}

function closeInterv() {
	clearTempo();
	var container = document.getElementById('ad-floating');
	container.parentNode.removeChild(container);
}

function clearTempo() {
	tempo = window.clearInterval(tempo);
	console.log("limpo " + getTempo() / 1000 + " segundos");
}