/**
 * 此部分来自yht提供的检测登陆
 */

var CAS_SERVER = "https://euc.yonyoucloud.com";
var yht_login_islogin = CAS_SERVER + '/cas/checkislogin';
var ticketUrl = yht_login_islogin + "?sysid=yhttest" + "&service=" + getUrlPath() + "/yhtssoticketvalidate";
var loginUrl = "https://euc.yonyoucloud.com/cas/login";
var logoutUrl = "https://euc.yonyoucloud.com/cas/logout?SAMLRequest=true&service=";

function getUrlPath() {
    // 这部分代码就是处理标题兼容问题的。
    // 由于在Chrome window.location.origin 属性是支持的，但是在IE11不支持，会导致无法正常翻页。
    var loc = window.location;
    var portStr = "";
    if (loc.port && (loc.port != 80)) {
        portStr = ":" + loc.port;
    }
    return loc.protocol + "//" + loc.hostname + portStr;
}

exports.getUrlPath = getUrlPath;
exports.ticketUrl = ticketUrl;
exports.loginUrl = loginUrl;
exports.logoutUrl = logoutUrl;