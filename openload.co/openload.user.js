// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         openload.co
// @version      0.01
// @description  Remove ads and timer waits, and show direct download link
// @icon         https://openload.co/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @include      /^(?:https?:)?\/\/openload\.co\/*.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==

if( $('#realdl>a').attr('href') )
{
 $('#btnView').hide();
 $('#btnDl').hide();
 $('.dlButtonContainer').show();
 $('h3.dlfile.h-method').hide();
 $('.col-md-4.col-centered-sm iframe').remove();
 $('#downloadTimer').hide();
 $('#realdl').show();
 // window.location=$('#realdl>a').attr('href');
}

setInterval(function (){ $("body>object").remove(); },100);

window.adblock=false;
window.adblock2=false;
window.pos=1;
window.onclick=function(){};
document.onclick=function(){};
document.body.onclick=function(){};
