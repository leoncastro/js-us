// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         goog-no-rewritelink
// @version      0.01
// @description  Remove link redirection on Google search results.
// @icon         https://addons.cdn.mozilla.net/user-media/addon_icons/661/661700-64.png
// @include      /(https?:)?\/\/(www\.)?google\.com\/.*/
// @include      /(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
setInterval(function(){Array.slice(document.querySelectorAll('a[onmousedown*="return rwt"]')).forEach(function(a){a.removeAttribute('onmousedown')})},500);
