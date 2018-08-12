var width_window = window.top.innerWidth;
var height_window = window.top.innerHeight;

var div = document.createElement("div");
var obj = '';
var ad = '';

if (height_window > _height) {
    _top = (height_window - _height) / 2;
} else {
    _top = 0;
}

var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://estaticos.edglobo.globo.com/opec/floating/ad-floating.css";

var script = document.createElement("script");
script.src = "https://estaticos.edglobo.globo.com/opec/floating/ad-floating-fn.js?tempo=" + tempo;

function dentrodeIframe() {

    var parent = isIframe();
    parent.style.display = "none";

    if (getFlash() && swf !== "") {
        div.innerHTML = obj;
    } else {
        if (backup !== "") {
            div.innerHTML = ad;
        }
    }
    //parent.parentNode.parentNode.insertBefore(link, parent.parentNode);
    parent.parentNode.parentNode.insertBefore(script, parent.parentNode);
    parent.parentNode.parentNode.insertBefore(div, parent.parentNode);
}

div.id = "ad-floating";
div.setAttribute("style", 'position: absolute; left: 50%; margin-left: -' + parseInt(_width / 2) + 'px; top: ' + _top + 'px; z-index: 99999999999;');

obj += '<img src="https://estaticos.edglobo.globo.com/opec/floating/sample/close.gif" style="position: absolute; top: 0px; right: 0px; margin: 5px 5px 0px 0px; z-index: ' + z_index + '9; cursor: pointer;" onclick="closeInterv();">';
obj += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + _width + '" height="' + _height + '">';
obj += '<param name="movie" value="' + swf + '"/>';
obj += '<param name="quality" value="high" />';
obj += '<param name="wmode" value="' + wmode + '" />';
obj += '<param name="allowScriptAccess" value="sameDomain" />';
obj += '<param name="flashvars" value="' + lnk + '=' + href + '" />';
obj += '<embed type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' + swf + '" width="' + _width + '" height="' + _height + '" quality="high" wmode="' + wmode + '" allowScriptAccess="sameDomain" flashvars="' + lnk + '=' + href + '" />';
obj += '</embed>';
obj += '</object>';

ad += '<img src="https://estaticos.edglobo.globo.com/opec/floating/sample/close.gif" style="position: absolute; top: 0px; right: 0px; margin: 5px 5px 0px 0px; z-index: ' + z_index + '9; cursor: pointer;" onclick="closeInterv();">';
ad += '<a href="' + href + '" target="_blank">';
ad += '<img src="' + backup + '" width="' + _width + '" height="' + _height + '" border="0">';
ad += '</a>';

dentrodeIframe();

if (contador !== "") {
    document.write('<img src="' + contador + '" width="1" height="1" border="0">');
}
