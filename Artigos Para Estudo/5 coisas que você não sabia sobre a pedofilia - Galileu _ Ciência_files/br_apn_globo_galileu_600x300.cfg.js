
// Published on: 2018-5-18 15:09:03
// aep br_apn_globo_galileu_600x300

(function(d, s, c) {
	var Utils={callbacksToEvents:function(a){for(var b=["onConfig","onMobile","onDesktop","onTablet","onSmartphone"],c=[],d=0;d<b.length;d++)a[b[d]]&&c.push({name:b[d],callback:a[b[d]]});c.length>0&&(a.events=c)},callIfFunction:function(a,b,c){"function"==typeof a&&a.apply(b,c||[])},createEventDispatcher:function(a){for(var b=a.events||[],c=0;c<b.length;c++)if("onServiceResponse"==b[c].name||"onProductsResponse"==b[c].name||"onThirdPartyByr"==b[c].name){var d=b[c].name;a[b[c].name]=function(){a.events.dispatch(d,arguments)}}return{dispatch:function(c,d){for(var e=0;e<b.length;e++)if(b[e].name==c)try{Utils.callIfFunction(b[e].callback,null,d)}catch(b){a.logger.error(c+" event failed",b)}}}},setSuperDomain:function(){var a=window.document;try{a.domain=a.domain.substring(a.domain.indexOf(".")+1)}catch(a){}},replaceProtocol:function(a,b){"object"==typeof a[b]?this.forEach(a[b],function(c,d){Utils.replaceProtocol(a[b],d)}):"string"==typeof a[b]&&(a[b]=a[b].replace("http:","https:").replace("//akfs","//s-akfs").replace("//akhtm","//s-akhtm"))},supportHttps:function(a){if("https:"==document.location.protocol)for(var b in a)a.hasOwnProperty(b)&&a[b]&&Utils.replaceProtocol(a,b)},loadJsFile:function(a,b,c){var d=a.createElement("script"),e=a.getElementById(c)||a.getElementsByTagName("script")[0];d.src=b,d.charset="utf-8",e.parentNode.insertBefore(d,e)},isSmartphone:function(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))},isTablet:function(a){return/ipad|playbook|silk/i.test(a)||/android/i.test(a)&&!/mobile/i.test(a)},setCookie:function(a,b,c,d){try{var e=b.toUTCString?b.toUTCString().replace(",",""):b+"",f=a+"="+encodeURIComponent(e).replace(/[-_z.]/g,function(a){return"%"+a.charCodeAt(0).toString(16)}).replace(/%/g,"z");if(c){f+=";expires="+(c.toUTCString?c.toUTCString():c+"")+";path=/",d&&(f+=";domain="+d)}document.cookie=f}catch(a){}},getCookie:function(a){try{for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=b[c].split("=");if(d[0].trim()==a)return decodeURIComponent(d[1].replace(/z/g,"%"))}}catch(a){}return""},createHiddenIframe:function(a,b){var c=a.ownerDocument,d=c.createElement("iframe");return d.id=b,d.style.display="none",d.style.width=0,d.style.height=0,d.style.position="absolute",a.parentNode.insertBefore(d,a),d},execScriptInIframe:function(a,b){a.contentWindow.document.write('<!doctype html><html><head></head><body style="overflow:hidden"><script type="text/javascript" src="'+b+'"><\/script></body></html>'),a.contentWindow.document.close()},getCoreVersion:function(a){var b=a.match(/formats-(\d\d)\./);return parseInt(b?b[1]:0)},tryGet:function(a){var b=null;try{b=a()}catch(a){}return b},isNumber:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},forEach:function(a,b){if(Utils.isNumber(a.length))for(var c=0;c<a.length&&!1!==b(a[c],c);c++);else for(var d in a)if(a.hasOwnProperty(d)&&!1===b(a[d],d))break},logger:function(a){var b=function(b,c){if(window.console&&window.console.log){c=Array.prototype.slice.call(c);try{var d="\t\t"+(new Error).stack.split("\n")[3]}catch(a){}c.unshift("[AEP] "+b+" ["+a+"] "),c.push(d),console.log.apply(console,c)}};this.debug=function(){b.apply(this,["[DEBUG]",arguments])},this.info=function(){b.apply(this,["[INFO] ",arguments])},this.warn=function(){b.apply(this,["[WARN] ",arguments])},this.error=function(){b.apply(this,["[ERROR]",arguments])}}};
	!function(a,b,c,d){c.logger=new d.logger(c.id);var e=navigator.userAgent||navigator.vendor||window.opera;d.callbacksToEvents(c),c.events=d.createEventDispatcher(c),c.isPreview&&c.events.dispatch("onPreview",[c]),c.events.dispatch("onConfig",[c]),d.isTablet(e)?(c.deviceName="tablet",c.events.dispatch("onMobile",[c])):d.isSmartphone(e)?(c.deviceName="smartphone",c.events.dispatch("onMobile",[c])):c.deviceName="desktop",c.events.dispatch("on"+c.deviceName.charAt(0).toUpperCase()+c.deviceName.slice(1),[c]),c.devices[c.deviceName]||(c.discard=!0,c.logger.info("Device not supported: "+c.deviceName));try{c.waCfg&&top.aepwa&&(c.discard=!0,c.logger.info("AEP-WA is already loaded"))}catch(a){}c.discard?c.logger.info("Format discarded"):(c.supportHttps&&d.supportHttps(c),c.useSuperDomain&&d.setSuperDomain(),_aep.push(["format",c]),d.loadJsFile(a,c.core,c.id),d.getCoreVersion(c.core)<21&&d.loadJsFile(a,c.template,c.id))}(d,s,c,Utils);
})(document, 'script', {
    "id": "br_apn_globo_galileu_600x300",
    "name": "br_apn_globo_galileu_600x300",
    "width": 600,
    "height": 300,
    "supportHttps": true,
    "minViewportWidth": 0,
    "isOwner": true,
    "ownerId": "br_apn_globo_galileu_600x300",
    "priceFormat": "R$|,||.",
    "imageProxy": "https://afp-imgs.nspmotion.com/services/sip.aspx?i=",
    "isTopFormat": true,
    "insertInTop": false,
    "wrapInIframe": true,
    "center": true,
    "startWhenInView": false,
    "loadImagesWhenInView": false,
    "viewThreshold": 0,
    "viewableImp": true,
    "forceDefault": false,
    "disableAdjustImages": true,
    "videoCfg": {
        "file": "http://akhtm.nspmotion.com/aep/video/index.html"
    },
    "events": [
        {
            "name": "onMobile",
            "callback": function(config) {
config.service[0].parameters.tc = 'SY6M';
	config.service[0].targets.chb.zoneId = "970211";

}
        }
    ],
    "devices": {
        "desktop": true,
        "smartphone": true,
        "tablet": true
    },
    "templateId": "59d7e61856ad010004dde082",
    "template": "http://akfs.nspmotion.com/aep/template/prod/59d7e61856ad010004dde082.tpl.min.js",
    "css": [
        "https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700",
        "http://akfs.nspmotion.com/aep/css/prod/59d7e61856ad010004dde082.css"
    ],
    "core": "http://akfs.nspmotion.com/dhtml/aep/aep-formats-22.0.6.min.js",
    "deferredImpression": "//e.nspmotion.com/imp/",
    "fs": "//akfs.nspmotion.com/",
    "click": "//e.nspmotion.com/event/",
    "reporting": "//e.nspmotion.com/evn/",
    "tplUrl": "//akfs.nspmotion.com/aep/template/prod/<%=id%>.tpl.min.js?r=GyKY",
    "cssUrl": "//akfs.nspmotion.com/aep/css/prod/<%=id%>.css?r=qAQI",
    "useDynamicDesign": false,
    "service": [
        {
            "parameters": {
                "tc": "5VP3",
                "q": 4
            },
            "targets": {
                "chb": {
                    "zoneId": "970209",
                    "blackList": [
                        "abril.com",
                        "abril.com.br",
                        "apopularproduct.com",
                        "assinanterbs.com",
                        "assinanterbs.com.br",
                        "assinaturas.gruposinos.com.br",
                        "assinaturas.valor.com.br",
                        "assine.abril.com",
                        "assine.abril.com.br",
                        "assine.folha.com.br",
                        "assineabril.com",
                        "assineabril.com.br",
                        "assineestadao.com.br",
                        "assinerevistaespn.com.br",
                        "campanha.assinanterbs.com",
                        "campanha.assinanterbs.com.br",
                        "campanha.assinanterbs.com.br",
                        "clicrbs.com",
                        "clicrbs.com.br",
                        "estadao.com",
                        "estadao.com.br",
                        "folha.com",
                        "folha.com.br",
                        "gruporbs.com",
                        "gruporbs.com.br",
                        "horadopovo.com.br",
                        "intro.clubeslimdown.com",
                        "jcrs.uol.com.br",
                        "m.clicrbs.com",
                        "m.clicrbs.com.br",
                        "m.zerohora.com.br",
                        "mtv.com",
                        "mtv.com.br",
                        "redetv.com",
                        "redetv.com.br",
                        "shopping.uol.com.br",
                        "terra.com.br",
                        "uol.com.br",
                        "www.assinanterbs.com",
                        "www.assinanterbs.com.br",
                        "www.assinaturas.gruposinos.com.br",
                        "www.assine.abril.com",
                        "www.assine.abril.com.br",
                        "www.assine3.com.br",
                        "www.assinerevistaespn.com.br",
                        "www.bandfm.com.br",
                        "www.classificadosestadao.com.br",
                        "www.diariopopular.com.br",
                        "www.folhaweb.com.br",
                        "www.gruporbs.com",
                        "www.gruporbs.com.br",
                        "www.zerohora.com.br",
                        "www.zhclassificados.com.br",
                        "zerohora.clicrbs.com",
                        "zerohora.clicrbs.com.br",
                        "zerohora.clicrbs.com.br",
                        "zerohora.clicrbs.com.br",
                        "zerohora.com",
                        "zerohora.com.br",
                        "zh.clicrbs.com",
                        "zh.clicrbs.com.br",
                        "zhclassificados.com.br",
                        "globo.com",
                        "assineglobo.com.br",
                        "vivara.com.br",
                        "gsuplementos.com.br",
                        "passarela.com.br",
                        "arezzo.com.br",
                        "zattini.com.br",
                        "webmotors.com.br"
                    ],
                    "url": "//static.criteo.net/js/ld/publishertag.js",
                    "logosFileUrl": "//akfs.nspmotion.com/files/byr/logos.js",
                    "logosBaseUrl": "//akfs.nspmotion.com/aep/criteo/"
                }
            },
            "base": "//e.nspmotion.com/delivery/"
        }
    ],
    "externalLib": [],
    "enableFreqCap": false,
    "pageCss": [
        "http://akfs.nspmotion.com/aep/css/aep-formats.css"
    ]
});

// Preview cfg
// aep br_globo_galileu_in-read_native

(function(d, s, c) {
	var Utils={callbacksToEvents:function(a){for(var b=["onConfig","onMobile","onDesktop","onTablet","onSmartphone"],c=[],d=0;d<b.length;d++)a[b[d]]&&c.push({name:b[d],callback:a[b[d]]});c.length>0&&(a.events=c)},callIfFunction:function(a,b,c){"function"==typeof a&&a.apply(b,c||[])},createEventDispatcher:function(a){for(var b=a.events||[],c=0;c<b.length;c++)if("onServiceResponse"==b[c].name||"onProductsResponse"==b[c].name||"onThirdPartyByr"==b[c].name){var d=b[c].name;a[b[c].name]=function(){a.events.dispatch(d,arguments)}}return{dispatch:function(c,d){for(var e=0;e<b.length;e++)if(b[e].name==c)try{Utils.callIfFunction(b[e].callback,null,d)}catch(b){a.logger.error(c+" event failed",b)}}}},setSuperDomain:function(){var a=window.document;try{a.domain=a.domain.substring(a.domain.indexOf(".")+1)}catch(a){}},replaceProtocol:function(a,b){"object"==typeof a[b]?this.forEach(a[b],function(c,d){Utils.replaceProtocol(a[b],d)}):"string"==typeof a[b]&&(a[b]=a[b].replace("http:","https:").replace("//akfs","//s-akfs").replace("//akhtm","//s-akhtm"))},supportHttps:function(a){if("https:"==document.location.protocol)for(var b in a)a.hasOwnProperty(b)&&a[b]&&Utils.replaceProtocol(a,b)},loadJsFile:function(a,b,c){var d=a.createElement("script"),e=a.getElementById(c)||a.getElementsByTagName("script")[0];d.src=b,d.charset="utf-8",e.parentNode.insertBefore(d,e)},isSmartphone:function(a){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))},isTablet:function(a){return/ipad|playbook|silk/i.test(a)||/android/i.test(a)&&!/mobile/i.test(a)},setCookie:function(a,b,c,d){try{var e=b.toUTCString?b.toUTCString().replace(",",""):b+"",f=a+"="+encodeURIComponent(e).replace(/[-_z.]/g,function(a){return"%"+a.charCodeAt(0).toString(16)}).replace(/%/g,"z");if(c){f+=";expires="+(c.toUTCString?c.toUTCString():c+"")+";path=/",d&&(f+=";domain="+d)}document.cookie=f}catch(a){}},getCookie:function(a){try{for(var b=document.cookie.split(";"),c=0;c<b.length;c++){var d=b[c].split("=");if(d[0].trim()==a)return decodeURIComponent(d[1].replace(/z/g,"%"))}}catch(a){}return""},createHiddenIframe:function(a,b){var c=a.ownerDocument,d=c.createElement("iframe");return d.id=b,d.style.display="none",d.style.width=0,d.style.height=0,d.style.position="absolute",a.parentNode.insertBefore(d,a),d},execScriptInIframe:function(a,b){a.contentWindow.document.write('<!doctype html><html><head></head><body style="overflow:hidden"><script type="text/javascript" src="'+b+'"><\/script></body></html>'),a.contentWindow.document.close()},getCoreVersion:function(a){var b=a.match(/formats-(\d\d)\./);return parseInt(b?b[1]:0)},tryGet:function(a){var b=null;try{b=a()}catch(a){}return b},isNumber:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},forEach:function(a,b){if(Utils.isNumber(a.length))for(var c=0;c<a.length&&!1!==b(a[c],c);c++);else for(var d in a)if(a.hasOwnProperty(d)&&!1===b(a[d],d))break},logger:function(a){var b=function(b,c){if(window.console&&window.console.log){c=Array.prototype.slice.call(c);try{var d="\t\t"+(new Error).stack.split("\n")[3]}catch(a){}c.unshift("[AEP] "+b+" ["+a+"] "),c.push(d),console.log.apply(console,c)}};this.debug=function(){b.apply(this,["[DEBUG]",arguments])},this.info=function(){b.apply(this,["[INFO] ",arguments])},this.warn=function(){b.apply(this,["[WARN] ",arguments])},this.error=function(){b.apply(this,["[ERROR]",arguments])}}};
	!function(a,b,c,d){c.logger=new d.logger(c.id);var e=navigator.userAgent||navigator.vendor||window.opera;d.callbacksToEvents(c),c.events=d.createEventDispatcher(c),c.isPreview&&c.events.dispatch("onPreview",[c]),c.events.dispatch("onConfig",[c]),d.isTablet(e)?(c.deviceName="tablet",c.events.dispatch("onMobile",[c])):d.isSmartphone(e)?(c.deviceName="smartphone",c.events.dispatch("onMobile",[c])):c.deviceName="desktop",c.events.dispatch("on"+c.deviceName.charAt(0).toUpperCase()+c.deviceName.slice(1),[c]),c.devices[c.deviceName]||(c.discard=!0,c.logger.info("Device not supported: "+c.deviceName));try{c.waCfg&&top.aepwa&&(c.discard=!0,c.logger.info("AEP-WA is already loaded"))}catch(a){}c.discard?c.logger.info("Format discarded"):(c.supportHttps&&d.supportHttps(c),c.useSuperDomain&&d.setSuperDomain(),_aep.push(["format",c]),d.loadJsFile(a,c.core,c.id),d.getCoreVersion(c.core)<21&&d.loadJsFile(a,c.template,c.id))}(d,s,c,Utils);
		!function(a,b,c,d){c.discard||(window.aepwa=top.aepwa={_target:{then:[],catch:[]},config:c,target:{then:function(a){aepwa._target.then.push(a)},catch:function(a){aepwa._target.catch.push(a)},always:function(a){aepwa._target.then.push(a),aepwa._target.catch.push(a)}},_formatReady:{resolved:!1,rejected:!1,resolve:function(){aepwa._formatReady.resolved=!0},reject:function(a){aepwa._formatReady.rejected=a}}})}(d,s,c,Utils);
		!function(a,b,c,d){if(!c.discard&&c.devices[c.deviceName]){var e;try{e=top.document,top}catch(b){e=a,window}c.supportHttps&&d.supportHttps(c.waCfg),c.inline=c.waCfg,d.loadJsFile(e,c.waCfg.src)}}(d,s,c,Utils);
})(document, 'script', {
    "id": "br_globo_galileu_in-read_native",
    "name": "br_globo_galileu_in-read_native",
    "width": 644,
    "height": 282,
    "supportHttps": true,
    "waCfg": {
        "src": "http://akfs.nspmotion.com/awa/aep/aep-wa.4.1.0.min.js",
        "slice": "2,3",
        "minParagraph": 4
    },
    "minViewportWidth": 0,
    "isOwner": false,
    "ownerId": [
        "575ff7ddea4ccc0300c5f327"
    ],
    "priceFormat": "R$|,||.",
    "imageProxy": "https://afp-imgs.nspmotion.com/services/sip.aspx?i=",
    "isTopFormat": false,
    "insertInTop": true,
    "wrapInIframe": false,
    "center": true,
    "startWhenInView": false,
    "loadImagesWhenInView": false,
    "viewThreshold": 0,
    "viewableImp": true,
    "forceDefault": false,
    "disableAdjustImages": true,
    "videoCfg": {
        "file": "http://akhtm.nspmotion.com/aep/video/index.html"
    },
    "passback": {
        "src": "http://akfs.nspmotion.com/aep/passback/passback_br_globo_galileu_in-line_native.js",
        "mode": "in-iframe"
    },
    "events": [
        {
            "name": "onServiceResponse",
            "callback": function(config, serviceData) {
if(serviceData.contentType == 'video') {
    config.aspectRatio = '16:9';
}
if(serviceData.contentType == 'display') {
    config.aspectRatio = '3:2';
}
}
        },
        {
            "name": "onMobile",
            "callback": function(config) {
config.service[0].parameters.tc = 'WFGS';
config.service[0].targets.chb.zoneId = "1180878";
}
        }
    ],
    "devices": {
        "desktop": true,
        "smartphone": true,
        "tablet": true
    },
    "templateId": "59d788c2b0e3a50004cc94bf",
    "template": "http://akfs.nspmotion.com/aep/template/prod/59d788c2b0e3a50004cc94bf.tpl.min.js",
    "css": [
        "https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700|Roboto+Condensed:400,700",
        "http://akfs.nspmotion.com/aep/css/adm-inlines.css",
        "http://akfs.nspmotion.com/aep/css/prod/59d788c2b0e3a50004cc94bf.css"
    ],
    "core": "http://akfs.nspmotion.com/dhtml/aep/aep-formats-22.0.6.min.js",
    "deferredImpression": "//e.nspmotion.com/imp/",
    "fs": "//akfs.nspmotion.com/",
    "click": "//e.nspmotion.com/event/",
    "reporting": "//e.nspmotion.com/evn/",
    "tplUrl": "//akfs.nspmotion.com/aep/template/prod/<%=id%>.tpl.min.js?r=AGmh",
    "cssUrl": "//akfs.nspmotion.com/aep/css/prod/<%=id%>.css?r=NkzR",
    "useDynamicDesign": false,
    "service": [
        {
            "parameters": {
                "tc": "EQFZ",
                "q": 4
            },
            "targets": {
                "chb": {
                    "zoneId": "1180877",
                    "url": "//static.criteo.net/js/ld/publishertag.js",
                    "logosFileUrl": "//akfs.nspmotion.com/files/byr/logos.js",
                    "logosBaseUrl": "//akfs.nspmotion.com/aep/criteo/"
                }
            },
            "base": "//e.nspmotion.com/delivery/"
        }
    ],
    "externalLib": [],
    "enableFreqCap": false,
    "pageCss": [
        "http://akfs.nspmotion.com/aep/css/aep-formats.css"
    ]
});
