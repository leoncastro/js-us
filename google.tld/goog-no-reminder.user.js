// ==UserScript==
// @author       @leoncastro
// @contributor  @gnblizz; https://userstyles.org/styles/126125/google-don-t-bug-me
// @license      Public Domain; http://creativecommons.org/publicdomain/zero/1.0/
// @namespace    http://greasyfork.org
// @name         goog-no-reminder
// @version      0.06
// @description  Remove "A privacy reminder from Google" permanently
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAAD9/v39/f3+/v7////9/f3+/v7////////+/v7+/v7////rQzU1qFNChfT7vAfj8PL96ODvaln3ta+54cVXtXb52HiKzZ3zj4aavvpmnPZ7sDk9kb+6th6/xtYcAAAAC3RSTlMA8dOLGbFVOnZrXyxZDnAAAAISSURBVFjDvZfrcoMgFITlpjbUiKjRpOn7v2admGblEASHab9/MbPLuSlQhJClUJwxrRnjSpSyOEQluCZwUaWqZQ2161HLFLlgOggTUYsPIqewj/3luY7Cd4I4MZ0AO4X0Qici3uuVduj62drPBWvnvtMOKqiH+qEF1vVQ+/puhhLMHXEI5t9/BujDdThtlkfwHnYThNOLiu0vD+DAZAF4RA/sZqI283tED15TLVlQbxc8PZKgHeho68lQzHQiaQDWkesNvYXeC6FGAl7LwQw9qJ0WdERPQANJIyr95OJ1O061LWHbYv1UxCaDS9u2FsWOgBzkK4AHSCANWZS/NWpXEEASZSGQwQreuLQiKGpw0UdQBY8YnN9yRRUZarjSpRjccg3Or/8LTQ30PxvkpsDyDfw2HuvCsUEynoHyR/nL6CBXb5BEUZI2NM2kg9w8g5K8zt/NgolmcDZ4nZ0qfi3ynRCufg2dT9qiXxliAaAEzkd1VQcdzM3PoNp+1k0Dhl09MnA3lgEGfh0G6BFATba2sQGjE4SZmtGvAJPYXJEELCbzfDxMjwd3GoDA9k6SgMkCft2hRwA4YMAhyIgE3FMSjziAVY8WIIlEh0kjgcAxz4wBLZmPMnzQnILLm50Dt3K7DvzJCB+WARtGb/X04/prfMZxnYVpgBr6nAtH5pWnzL10ZV77ci+emVffP7h8Z1//fwDgl5eWyVsWsAAAAABJRU5ErkJggg==
// @include      /(https?:)?\/\/(www\.)?google\.com\/.*/
// @include      /(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))\/.*/
// @include      /(https?:)?\/\/(www\.)?youtube\.com\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome
// @compatible   opera
// @grant        none
// @run-at       document-start
// ==/UserScript==
//
!(function(){

 function _addStyle(css)
 {
  var dad,obj;
  obj=document.createElement('style');
  obj.setAttribute('type','text/css');
  obj.innerHTML=css;
  dad=document.getElementsByTagName('head');
  (dad&&dad.length?dad[0]:document).appendChild(obj);
 }
 function onstart(fn){fn()}
 function onready(fn){(document.readyState!='loading')?fn():document.addEventListener('DOMContentLoaded',fn)}

 var gg=/(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))\/.*/,
     yt=/(https?:)?\/\/(www\.)?youtube\.com\/.*/;

 if(gg.exec(location.href))
 {
  onstart(function(){
   _addStyle('#cnsh,#cnso,#cnsi{display:none!important}');
  });
  onready(function(){
   document.body.className=document.body.className.replace(/\bnsc\b/,'');
  });
 }
 else if(yt.exec(location.href))
 {
  onstart(function(){
   _addStyle(`
    .yt-consent,.yt-dialog-bg,#yt-consent-dialog{display:none!important}
    .sitewide-consent-visible .yt-fragment-target{margin-top:-50px!important;padding-top:50px!important}
    .appbar-hidden.sitewide-consent-visible #masthead-positioner-height-offset{height:50px!important}
    .sitewide-consent-visible #masthead-positioner-height-offset{height:91px!important}
    .sitewide-consent-visible #appbar-guide-menu{margin-top:50px!important}
   `);
  });
  onready(function(){
   var b=window.top.document.querySelector('#body');
   if(b)
   {
    b.className=b.className.replace(/\bsitewide-consent-visible\b/,'');
    b.className=b.className.replace(/\byt-dialog-active\b/,'');
   }
  });
 }

})();
