// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         bux-helper
// @version      0.02
// @description  bux-helper
// @include      /^(https?:)?\/\/(www\.)?clixsense\.com\/en\/View_Ads\/.*/
// @include      /^(https?:)?\/\/(www\.)?neobux\.com\/v\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-start
// ==/UserScript==
//
!(function(){

 function onready(fn){(document.readyState!='loading')?fn():document.addEventListener('DOMContentLoaded',fn)}

 var bux = [];
 /*
  a includes rule regex
  b selector banners
  c function replace and load advertisement
  d interval condition
  e interval eventdone
 */
 bux.push({
  a: /^(https?:)?\/\/(www\.)?clixsense\.com\/en\/View_Ads\/.*/,
  b: 'body>div>table>tbody>tr>td+td+td',
  c: {id:'#frm,iframe#ad,.frmw>iframe',src:function(s,r){s=s.split('http');s[2]=r;return s.join('http')},end:function(e){eval(e.getAttribute('onload'))}},
  d: 'a[title="Close window"]',
  e: 'win.close()',
 });
 bux.push({
  a: /^(https?:)?\/\/(www\.)?neobux\.com\/v\/.*/,
  b: '#bnr',
  c: {id:'body>table>tbody>tr+tr+tr+tr>td>iframe'},
  d: '#o1',
  e: 'self.close()',
 });

 onready(function(){
  bux.forEach(function(b){
   if( b.a.exec(location) )
   {
    b.b.split(',').forEach(function(s){Array.slice(document.querySelectorAll(s)).forEach(function(o){o.remove()})});
    var o=document.querySelector(b.c.id);
    if(!b.c.src)b.c.src=function(s,r){return r};
    o.setAttribute('src',b.c.src(o.getAttribute('src'),'about:blank'));
    if(b.c.end)b.c.end(o);
    setInterval(function(){
     var o=document.querySelector(b.d);
     if(o&&o.style.display==='')
      eval(b.e);
    },100);
   }
  });
 });

})();
