// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         openload.co
// @version      0.05.2
// @description  Remove anti-adblock, ads, popups and timer waits, and show direct download link
// @icon         https://openload.co/favicon.ico
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @include      /^(?:https?:)?\/\/openload\.co\/*.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-start
// ==/UserScript==
//
// @run-at document-start
window.adblock=false;
window.adblock2=false;
window.turnoff=true;
window.open=function(){};
//
// @run-at document-end
(function($){$(function(){
 if( $('#realdl>a') )
 {
  $('#btnView').hide();
  $('#btnDl').hide();
  $('.dlButtonContainer').show();
  $('h3.dlfile.h-method').hide();
  $('.col-md-4.col-centered-sm *').remove();
  $('#main>div[id*="Composite"]').remove();
  $('#downloadTimer').hide();
  $('#realdl').show();
  var tmrstreamurl = setInterval(function(){
   if( $("#streamurl").text() != "HERE IS THE LINK" )
   {
    $('#realdl a').attr("href", "/stream/" + $("#streamurl").text());
    $("#videooverlay").click();
    clearInterval(tmrstreamurl);
   }
  },100);
 }
 window.onclick=function(){};
 document.onclick=function(){};
 document.body.onclick=function(){};
})})(window.jQuery.noConflict(true));
