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

 onready(function(){
  var v=document.querySelector('#vplayer');
  if(v)
  {
   var s=document.scripts;
   if(s.length)
   {
    for(var k=0,l=s.length;k<l;k++)
    {
     console.info('script',s[k]);
     if(/^\s*eval\(.*\)\s*$/.exec(s[k].text))
     {
      console.warn('eval detected!');
      var n;
      try
      {
       var c=eval(s[k].text);
       if(c)n=c.getConfig().sources[0].file;
      } catch(e){};
      if(n)
      {
       var o=document.createElement('a');
       o.setAttribute('href',n);
       o.innerHTML='<style>body>div{height:90vh!important}body>a{position:absolute;bottom:2.5vh;right:1vw;color:#fff;text-decoration:none}.btn-green{height:10vh;padding:1.5vh 1vw;background-color:#4DE664;text-align:center;font-weight:bold;border-radius:5px}</style><span class="btn-green">Download</span>';
       document.body.appendChild(o);
      }
      v=document.querySelector('#admvpu');v&&v.remove();
      v=document.querySelector('body>div+div');v&&v.remove();
      v=document.querySelector('body>div+div');v&&v.remove();
     }
    }
   }
  }
 });

})();
