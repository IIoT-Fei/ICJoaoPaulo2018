var glb = glb || {};

glb.getCookieValue = function(keyName, defaultValue) {
  if (defaultValue == undefined) defaultValue = null;

  var cookies = document.cookie.split(";");
  for(i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].split("=");
    var key = cookie[0];
    var value = cookie[1];
    key = key.replace(/^\s+|\s+$/g, "");

    if(key == keyName) return unescape(value);
  }
  return defaultValue;
};

glb.audienceManagerQueryString = function() {
  var params = [];
  var aamoas = glb.getCookieValue("aamoas");
  if(aamoas) {
    params.push(aamoas);
  }

  var uuid = glb.getCookieValue("aam_uuid");
  if(uuid) {
    params.push("uuid=" + uuid);
  }

  return params.join("&");
};