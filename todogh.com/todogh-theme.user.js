// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         todogh-theme
// @version      0.04
// @description  New design for todogh.com
// @include      http://todogh.com/directo/
// @include      http://todogh.com/telecinco/
// @include      http://todogh.com/chat-grande/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
(function(){

 function addStyleEx(css)
 {
  var dad, obj = document.createElement('style');
  obj.setAttribute('type', 'text/css');
  obj.innerHTML = css;
  dad = document.getElementsByTagName('head');
  (dad && dad.length ? dad[0] : document).appendChild(obj);
  if(document.readyState == 'loading')
   document.addEventListener('DOMContentLoaded', function(){obj.parentNode.appendChild(obj);});
  return obj;
 }
 addStyleEx(`
.section.header{display:block;position:absolute;left:0;top:0;width:250px;height:60px;margin:0;padding:0}
.section.navigation{display:block;position:absolute;left:0;top:0;width:calc(100% - 250px);height:60px;margin:0 0 0 250px;padding:0}
.main-menu>li>a{padding:25px 10px}
.section.wrapper{top:40px;padding:0}
.section-inner{max-width:98%;}
body.single .content{width:100%}
.single .post-content{padding:0}
.post-header,.adsbygoogle,.sidebar,.section.footer,.section.credits,.todog-adlabel{display:none!important}
/* CHAT GRANDE */
.page-id-60 .post-content>p>iframe{width:100%!important}
.page-id-60 .post-content>p{margin-bottom:0}
/* DIRECTO */
.page-id-11 .post-content>p{width:50%;margin:0;font-size:80%}
.page-id-11 .post-content>p~div>iframe{float:left;width:50%!important;height:100%!important;min-height:500px}
.page-id-11 .post-content>p~p{display:none}
.page-id-11 .post-content>h6{display:none}
/* TELECINCO */
.page-id-13 .post-content>div+p+div{ width:50%;margin:0; padding:0;font-size:80%}
.page-id-13 .post-content>div+p+div+div{width:100%}
.page-id-13 .post-content>div+p+div+div>p>iframe{float:left;width:50%!important;height:100%!important;min-height:500px}
`);

})();
