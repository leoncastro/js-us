// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         allvid.ch
// @version      0.01
// @description  Remove popup ads, and show direct download link
// @icon         http://allvid.ch/images/favicon.ico
// @include      /^(?:https?:)?\/\/allvid\.ch\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-start
// ==/UserScript==
//
!(function(){

 function onready(fn){(document.readyState!='loading')?fn():document.addEventListener('DOMContentLoaded',fn)}
 function addElem(a,e,i,o)
 {
  o=document.createElement(a);
  for(var u in e)
   o.setAttribute(u,e[u]);
  o.innerHTML=i;
  document.body.appendChild(o);
 }

 onready(function(){
  if(document.querySelector('#vplayer'))
  {
   var n;try{n=jwplayer().getConfig().sources[0].file;}catch(e){}
   if(n)
   {
    addElem('style',{},'body>div{height:90vh!important}body>a{position:absolute;bottom:2.5vh;right:1vw;color:#fff;text-decoration:none}.btn-green{height:10vh;padding:1.5vh 1vw;background-color:#4DE664;text-align:center;font-weight:bold;border-radius:5px}');
    addElem('a',{href:n,target:'_blank',type:'application/octet-stream',download:n.split('/')[3]},'<span class="btn-green">Download</span>');
   }
   addElem('style',{},'#admvpu,body>div+div{display:none!important;position:absolute!important;width:0!important;height:0!important;z-index:-1!important}');
  }
  window.onclick=function(){};
  document.onclick=function(){};
  document.body.onclick=function(){};
  window.admvpu=function(){};
 });

})();
