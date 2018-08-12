function getWindow() {
    return window.self === window.parent;
}

function parentElement() {
    var script = document.getElementsByTagName("script"),
        parent = null;
    for (var i = 0; i < script.length; i++) {
        if (script[i].src.match(/opec\/(dfp|oas)/)) {
            return script[i].parentNode;
        }
    }
    return false;
}

function contentElement(ifrm) {
    var ifrm_content;
    if (ifrm.contentDocument) {
        ifrm_content = ifrm.contentDocument;
    } else if (ifrm.contentWindow) {
        ifrm_content = ifrm.contentWindow.document;
    }
    return ifrm_content;
}

function isIframe() {
    var ifrm_parent;
    if (getWindow()) {
        return;
    } else {
        if (window.parent.frameElement) {
            ifrm_parent = window.parent.frameElement;
        } else {
            ifrm_parent = window.frameElement;
        }
        return ifrm_parent;
    }
}

function isChrome() {
    return /chrom(e|ium)/i.test(navigator.userAgent);
}

function getFlash() {
    var hasFlash = false;
    try {
        var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (fo) {
            hasFlash = true;
        }
    } catch (e) {
        if (navigator.mimeTypes && navigator.mimeTypes['application/x-shockwave-flash'] != undefined && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
            hasFlash = true;
        }
    }
    return hasFlash;
}

var userAgents = ['iPad', 'iPhone', 'Android', 'IEMobile', 'BlackBerry'];

function isMobile(userAgents) {
    var userAgent,
        isMobile = {
            any: false
        };

    for (var index in userAgents) {
        userAgent = userAgents[index];

        isMobile[userAgent] = navigator.userAgent.toLowercase().indexOf(userAgent.toLowercase()) > -1;

        if (isMobile[userAgent]) {
            isMobile.any = true;
        }
    }

    return isMobile;
}