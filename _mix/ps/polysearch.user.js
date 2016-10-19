// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         polysearch
// @version      0.01
// @description  PolyCola and SearchBoth Tweaks (Goog+Bing)
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCAxODAwMCAxODAwMCI+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTQwMjUgMzQ5NXYxMjUyN2wyODU4LTkxOC0yMy0xMzIxM2MtMzM1IDIwOS0yNzUzIDE2MDQtMjgzNSAxNjA0eiIvPjxwYXRoIGZpbGw9IiMwRjlENTgiIGQ9Ik04ODU5IDgzMzBsLTEyMDAgMzA2OSA2MjgxLTIxODdWNTk2NSIvPjxwYXRoIGZpbGw9IiNGNEI0MDAiIGQ9Ik00MDI1IDM0OTVsOTkxNSA1NzE3VjU5NjVMNjg2MCAxODkxIi8+PC9zdmc+
// @include      http://www.polycola.com
// @include      /^(?:https?:)?\/\/(?:www\.)?polycola\.com\/.*/
// @include      http://www.searchboth.net
// @include      /^(?:https?:)?\/\/(?:us|ca|uk|au|be|cz|dk|it|il|nl|ru|se|es|fr|mx|ch|ie|at)\.searchboth\.net\/.*/
// @include      /^(?:https?:)?\/\/(?:www\.)?bing\.com\/.*/
// @include      /^(?:https?:)?\/\/(?:(?:www|(?:(?:\w\w\.)?search))\.)?yahoo\.com\/.*/
// @include      /^(?:https?:)?\/\/(?:www\.)?ask\.com\/.*/
// @include      /^(?:https?:)?\/\/(?:www\.)?dogpile\.com\/.*/
// @include      /^(?:https?:)?\/\/search\.aol\.com\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
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
 function onevent(w,n,fn){w.addEventListener?w.addEventListener(n,fn,false):w.attachEvent('on'+n,fn)}
 function ismatch(regex,url){
  if(regex)
  {
   if(regex instanceof RegExp) return !!regex.exec(url);
   else if(Array.isArray(regex)) return !!regex.some(function(e){return ismatch(e,url)});
  }
  return false;
 }

 var engines = [];

 // websites

 engines.push({ id: '$home-page$polycola.com',
  regex: /^(?:https?:)?\/\/(?:www\.)?polycola\.com\/?$/i,
  style: '\
   @font-face {\
       font-family:"FontAwesome";\
       font-weight:normal;\
       font-style:normal;\
       src:url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?v=4.2.0");\
       src:url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?#iefix&v=4.2.0") format("embedded-opentype"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.woff?v=4.2.0") format("woff"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf?v=4.2.0") format("truetype"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular") format("svg");\
   }\
   p:empty,br{display:none}\
   body{margin:0;padding:0}\
   body>center:nth-of-type(1){display:none}\
   body>center:nth-of-type(2)>p:nth-of-type(1){margin:120px 0 20px 0!important;padding:0}\
   body>center:nth-of-type(2)>form{width:100%!important;margin:0!important;padding:0;border:none!important;background:transparent!important}\
   body>center:nth-of-type(2)>form>span{display:block}\
   body>center:nth-of-type(2)>form>span>span{margin:5px!important}\
   body>center:nth-of-type(2)>form>span>span>input{margin:10px 4px 10px 10px}\
   body>center:nth-of-type(2)>form>span>span>input+label{color:#666}\
   body>center:nth-of-type(2)>form>span>span>input:checked+label{color:#000}\
   body>center:nth-of-type(2)>form>span>span>label::before{display:inline-block;width:25px;box-sizing:border-box;text-align:center}\
   body>center:nth-of-type(2)>form>span>span>label{display:inline-block;position:relative;top:1px;margin:0 4px 0 0;font-family:FontAwesome;font-style:normal;font-weight:normal;line-height:1;}\
   body>center:nth-of-type(2)>form>span>span#webspan>label::before{content:"\\f0ac"}\
   body>center:nth-of-type(2)>form>span>span#imagesspan>label::before{content:"\\f030"}\
   body>center:nth-of-type(2)>form>span>span#videosspan>label::before{content:"\\f03d"}\
   body>center:nth-of-type(2)>form>span>span#newsspan>label::before{content:"\\f1ea"}\
   body>center:nth-of-type(2)>form>span>span#shoppingspan>label::before{content:"\\f07a"}\
   body>center:nth-of-type(2)>form>span>span:last-of-type{clear:both}\
   body>center:nth-of-type(2)>form>span>input#qin{display:block;min-width:586px;height:38px!important;line-height:26px!important;margin-bottom:8px;padding:5px 9px!important;font:16px arial,sans-serif!important}\
   body>center:nth-of-type(2)>form>span>input[type="submit"]{display:block;margin-bottom:8px!important}\
   body>center:nth-of-type(2)>span{display:none!important}\
   body>center:nth-of-type(3){position:absolute;left:0;bottom:0;right:0;padding:8px}\
  ',
  ready: function(w,e){
   // select google+bing as default engine
   document.querySelector('#eng2').value='bing';engoptlist('eng2');
  }
 });
 engines.push({ id: '$main-page$polycola.com',
  regex: /^(?:https?:)?\/\/(?:www\.)?polycola\.com\/search\.php\?.*/i,
  ready: function(w,e){
   onevent(w,'message',function(a){
    // window.frames[0] --> name="topf"  $top-frame$
    window.frames[1].postMessage(a.data,'*');
    window.frames[2].postMessage(a.data,'*');
   });
  }
 });
 engines.push({ id: '$top-frame$polycola.com',
  regex: /^(?:https?:)?\/\/(?:www\.)?polycola\.com\/top\.php\?.*/i,
  style: '\
   @font-face {\
       font-family:"FontAwesome";\
       font-weight:normal;\
       font-style:normal;\
       src:url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?v=4.2.0");\
       src:url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.eot?#iefix&v=4.2.0") format("embedded-opentype"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.woff?v=4.2.0") format("woff"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.ttf?v=4.2.0") format("truetype"),\
           url("http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/fonts/fontawesome-webfont.svg?v=4.2.0#fontawesomeregular") format("svg");\
   }\
   p:empty,br{display:none}\
   body{background:#f1f1f1!important}\
   body>div{border:none!important;background:transparent!important}\
   // body>div:nth-of-type(1)>p>a:nth-of-type(1)>img{width:96px!important;filter:brightness(94.5%);-webkit-filter:brightness(94.5%)}\
   body>div:nth-of-type(1)>p>a:nth-of-type(2){display:none}\
   body>div:nth-of-type(1)>center{display:block;text-align:left;padding-left:116px!important}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td{width:96px!important}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input{cursor:pointer}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input+label{color:#666}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input:disabled+label{color:#ddd}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input:checked+label{color:#000}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>label::before{display:inline-block;width:25px;box-sizing:border-box;text-align:center}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>label{display:inline-block;position:relative;top:1px;margin:0 4px 0 0;font-family:FontAwesome;font-style:normal;font-weight:normal;line-height:1;cursor:pointer}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Answers+label::before{content:"\\f0e6"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Shopping+label::before{content:"\\f07a"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Images+label::before{content:"\\f030"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Web+label::before{content:"\\f0ac"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Blogs+label::before{content:"\\f09e"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Directory+label::before{content:"\\f0e8"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#Videos+label::before{content:"\\f03d"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(1)>table>tbody>tr>td>span>input#News+label::before{content:"\\f1ea"}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(2)>input#qin{display:inline-block;height:26px!important;padding:0 9px!important;font:16px arial,sans-serif!important}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(2)>input[type="submit"]{display:inline-block;width:inherit!important;height:26px!important;padding:0 9px!important}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(3){width:inherit!important;border:none!important;background:transparent!important;font:inherit!important}\
   body>div:nth-of-type(1)>center>form>span>table>tbody>tr>td:nth-of-type(3)>a{background:transparent!important}\
   body>div:nth-of-type(2)>table,body>div:nth-of-type(2)>table>tbody>tr>td{border:none!important;background:transparent!important;font:inherit!important}\
   body>div:nth-of-type(2)>table>tbody>tr>td>label{cursor:pointer}\
  ',
  ready: function(w,e){
   // replace polycola header logo with an updated version
   var a;
   a=document.querySelector('body>div:nth-of-type(1)>p>a:nth-of-type(1)>img');
   a.src='data:image/png;base64,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';
   a.style='float:left;width:124px;height:32px;margin:0;padding:0;vertical-align:middle';
  }
 });

 engines.push({ id: '$home-page$searchboth.net',
  regex: /^(?:https?:)?\/\/\w\w\.searchboth\.net\/?$/i,
  style: '\
   body>div:nth-of-type(1),.navi,#searchform table table tr+tr,\
   .footer>p>br:not(:first-child),.footer>p>nobr,.footer>p>a,.footer>p+p{display:none!important}\
   .footer{padding-bottom:0!important;margin-bottom:0!important}\
   .footer>table:nth-of-type(1) td{font-size:24px!important}\
   .footer>p{margin-bottom:0!important}\
  ',
  ready: function(w,e){
   // replace google and yahoo images with updated google and bing logos
   var a;
   a=document.querySelector('.search_logos img[src*="google"]');
   a.src='data:image/png;base64,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';
   a.width=180;
   a.height=60;
   a=document.querySelector('.search_logos img[src*="yahoo"]');
   a.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8CAMAAAD48GC1AAAAMFBMVEVMaXEQi3oHQTkDIBwKXlIPh3YFLCYOg3MJVEkPi3oNemwISkENdmgOfm8PhXUPh3dMek4GAAAADnRSTlMA/j4PitEo5W/wx1SmtkbGpp4AAANQSURBVHgB7djdVsO4DoZhybLl/0/3f7eb1CEE0r0mgDO0a/oeFS8OnrpxZaAf9eqVT0JPV+DYqjwbGgCH5uTZ0IBZ8PpU6BGXJ0TbC/1Cv9CH5HHRUj9S+siV2PVR0Y4/ymG7Bkgx4/a4aOzioCs6AlweGW15ic0AvKsbG/sHRlvXJZfKou50S3xP8sjoRiNpBrCjrWdAkwSA01+iXdXvoskz2P8lWnNsVb6HTn+NpgZw9E6+udOJlrTW8Y5lnTrO91K+7oLU22pSIldrnYB2DMC4eJWz6G7Iuu45s75Pn0ba2W6FvSyFdTUm6sx5ApqKYYmtJz2Frgy07UGxgc5grxFgZgOQN7X4sSvLOqcGxBnoZFjj3Kv+I9oFIOsRjR7APaXUMoAgNFrMFnxKvjA4TkJrxpbZ4Vhu6C5vqVtI2dEdtCFWWqoRsPTxsZiX8ToDk9DUDPs4+ipHNHJ8C2awrnQP/em9oI8DGjb/UM9CO8bnjEM9oreid3fR5mlNIhBl3WjrtOVtFloCvsb+DppvAUBuegedld7rWNebfZr4kmehKfEZdPG3WjTAoh7QVmjLr1YJ40hu9WloDXwfff/CVCNgQY5feTs0D7Qa0GhXm4YmTZFPoUcaAE5n0M7AaT56TVLg02hKButn0JUvQW9JLXYWrRkI8gBo0nYaLWMo/jlaUgamox0DnnaVmegaDMD0x0MNKHTJ9zS5zsA30P7kQRxT3NFW4llo9dlwGj2E4HoGPd6e0JpGzEFLioYvWaj/H61pXD1PoV3e7YB0zEHXcCAje6UDGsHf6tHGhe4UmpoB3FSIpIYZ92kUbUcyd0dbxwuTAbDo6CRaggFmpffAYN9+j875YB630iPaduWm28EyXtH2GW0rmrTY7qRMQB+ynITu5OJW6clt6ynGqO+/4OnTutsmQOSlXCpdgeamdD/ZOqx/eXHnR3HpLV2HS5iKtu7o4iQCfSKaQxW6OscwPw1t2V9O3v76+kk+n3+Y51Z5TKXvd7xqWKl0VeJ25vyr/xHv56DFJHRZLpfkhIi0NsO4iPw0SdGOM/uCksFyLCVExjD/JvF5m9kX1sbcNwPAE067thwqXZzUFjKWYp/zmTqlfyF1LqXqVOi/1qtX/wMrR1t5vOzg7gAAAABJRU5ErkJggg==';
   a.width=180;
   a.height=60;
   // select google+bing as default engine
   document.querySelector('#engine2').value='bing';
  }
 });
 engines.push({ id: '$main-page$searchboth.net',
  regex: /^(?:https?:)?\/\/\w\w\.searchboth\.net\/(\w)*\/.*\/\w*\/.*/i,
  ready: function(w,e){
   onevent(w,'message',function(a){
    // window.frames[0] --> name="topf"  $top-frame$
    // window.frames[1] --> name="spellcheck"
    // window.frames[2] --> name="pixy"
    window.frames[3].postMessage(a.data,'*');
    window.frames[4].postMessage(a.data,'*');
   });
  }
 });
 engines.push({ id: '$top-frame$searchboth.net',
  regex: /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/top\/searchtop\w\w\.php\?.*/i,
  style: '\
   body{background-color:#f1f1f1!important;margin-top:0;border-bottom:5px #000000 groove}\
  ',
  ready: function(w,e){
   // replace header image with updated google and bing logos
   document.querySelector('#searchtop img[src*="Header"]').src='data:image/png;base64,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';
   // set frameset fixed size
   parent.setELActive('fixed');
   // replace search form with the same engines used
   var a=document.querySelector('#searchtop');
   onevent(a,'submit',function(e){
    e.preventDefault();
    var f=document.searchtop,s=f.st.value,q=f.query.value,b=(b=window.top.location.href.match(/.*(\/\w*\+\w*\/)$/i))?b[1]:'google+bing';
    window.top.location.href=window.top.location.protocol+'//'+window.top.location.hostname+'/'+s+'/'+q+'/dll'+b;
   });
  }
 });

 // searches

 engines.push({ id: 'google',
  regex: [
   /^(?:https?:)?\/\/(?:www\.)?polycola\.com\/googlesearch\.php\?.*/i,
   /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/googlepanel\.php\?.*/i
  ],
  style: '\
   body>div#gb,\
   body>table#mn>tbody:nth-of-type(1)>tr:nth-of-type(2)>.sfbgg:nth-of-type(2),\
   body>table#mn>tbody:nth-of-type(1)>tr:nth-of-type(3),\
   body>table#mn>tbody:nth-of-type(1)>tr>th:nth-of-type(1),\
   body>table#mn>tbody:nth-of-type(2)>tr>td#leftnav,\
   body>table#mn>tbody:nth-of-type(2)>tr>td>div#center_col>div,\
   body>table#mn>tbody:nth-of-type(2)>tr>td>div#foot{display:none}\
   body>table#mn>tbody:nth-of-type(2)>tr>td>div#center_col>div#resultStats,\
   body>table#mn>tbody:nth-of-type(2)>tr>td>div#center_col>div#res{display:block}\
   body>table#mn>tbody:nth-of-type(1)>tr:nth-of-type(2)>.sfbgg{height:50px!important}\
   body>table#mn>tbody:nth-of-type(1)>tr:nth-of-type(2)>.sfbgg:nth-of-type(1)>div#logocont>h1>a#logo{margin:5px 0 0 10px!important}\
   body.polycola-nor>table#mn>tbody:nth-of-type(2)>tr>td#rhs_block{display:none}\
  '
 });
 engines.push({ id: 'bing',
  regex: [
   /^(?:https?:)?\/\/(?:www\.)?bing\.com\/(?:(?:images|news|video)\/)?search\?.*/i,
   /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/bingpanel\.php\?.*/i
  ],
  style: '\
    body>header#b_header,body>header#b_header *{position:relative!important;top:0!important}\
    body>header#b_header{height:50px!important;margin-bottom:0!important;background:#f1f1f1;border-bottom:1px solid #e5e5e5}\
    body>header#b_header>div.b_headBorder>div.b_topbar,\
    body>header#b_header>div.b_headBorder>form#sb_form>div.b_searchboxForm,\
    body>div#b_content>div.b_underSearchbox,\
    body>div#b_content>div#b_tween>span.ftrB,\
    body>div#b_content>div#miniheader,\
    body>div#b_content>div#rfPane,\
    body>div#b_content>ol>li.b_ad,\
    body>div#b_content>ol#b_results>li.b_ans,\
    body>div#b_content>ol#b_results>li.b_pag,\
    body>footer.b_footer,body>a#fbpgbt{display:none!important}\
    body>header#b_header>div.b_headBorder{height:45px!important}\
    body>div#b_content{position:relative!important;top:12px!important;padding:0!important}\
    body.polycola-nor>div#b_content>ol#b_context{display:none!important}\
    /* goog-style */ \
    body,td,div,h2,a{font-family:arial,sans-serif!important}\
    a:hover{text-decoration:underline}\
    body>div#b_content>div#b_tween{height:43px!important;padding-left:8px!important}\
    body>div#b_content>div#b_tween>span.sb_count{line-height:43px!important;font-size:13px;text-transform:lowercase;color:#999}\
    body>div#b_content>ol#b_results{padding:0 8px}\
    body>div#b_content>ol#b_results>li a:visited{color:#61C!important}\
    body>div#b_content>ol#b_results>li a:link{color:#1a0dab;cursor:pointer!important}\
    body>div#b_content>ol#b_results>li.b_algo{margin-top:0!important;margin-bottom:23px!important;padding:0!important;line-height:1.2;font-size:13px;background-color:transparent!important;zoom:1}\
    body>div#b_content>ol#b_results>li.b_algo>h2{display:inline;margin:0;padding:0;font-size:16px;font-weight:normal;text-decoration:underline}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption{padding-bottom:0!important}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>div.b_attribution{display:block;margin-bottom:2px;font-size:15px}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>div.b_attribution>cite{font-style:normal;color:#006621}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>div.b_snippet{color:#545454;padding-bottom:0!important}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>div.b_snippet>p{line-height:1.24}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>ul.b_factrow{margin-top:4px;color:#777}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_caption>ul.b_factrow>li>a{color:#1a0dab;text-decoration:none}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_deep{padding:10px 0 0 28px!important}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_deep>ul>li{padding:0 0 5px!important}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_deep>ul>li>h3.deeplink_title{padding:0!important}\
    body>div#b_content>ol#b_results>li.b_algo>div.b_deep>ul>li>h3.deeplink_title>a{text-decoration:underline}\
    body>div#b_content>ol#b_results>li.b_algo>a.b_deep.b_moreLink{padding:0 0 0 28px!important}\
   '
 });
 engines.push({ id: 'yahoo',
  regex: [
   /^(?:https?:)?\/\/(?:(?:www|(?:(?:\w\w\.)?search))\.)?yahoo\.com\/.*/i,
   /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/yahoopanel\.php\?.*/i
  ],
  style: '\
   #yucsHead,#sbx,.sbx,#sidebar,.searchBottom,.bdc,#extend,#filters,.ft,\
   .ads,.ad_loc_top,.ad_loc_bot,.ad_loc_east,.searchCenterTopAds,.searchCenterBottomAds,.searchRightBottomAds{display:none!important}\
   #sticky-hd{position:absolute!important;top:0!important}\
   #hd{margin:0!important;height:50px!important;background:#f1f1f1!important;border:1px solid #e5e5e5!important}\
   #logo{top:15px!important}\
   body,td,div,h2,a{font-family:arial,sans-serif!important}\
   #results{margin:0!important}\
   #main{margin:0 8px!important}\
   #main .algo{margin:0 0 23px 0!important}\
   #main .algo a:visited{color:#61C!important}\
   #main .algo a:link,#results #cols .compTitle h3.title a:hover{color:#1a0dab!important}\
   #main .algo h3 a{font-size:16px!important;text-decoration:underline}\
   #main .algo .compTitle span{font-size:15px;font-style:normal;color:#006621!important;margin-bottom:2px}\
   #main .algo .compText{color:#545454}\
  '
 });
 engines.push({ id: 'ask',
  regex: [
   /^(?:https?:)?\/\/(?:www\.)?ask\.com\/.*/i,
   /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/askpanel\.php\?.*/i
  ],
  style: '\
   body>div.l-header{height:50px!important;margin-top:0!important;background:#f1f1f1;border-bottom:1px solid #e5e5e5}\
   body>div.l-header>div.searchbox>div.searchbox-logo{height:48px!important;background-size:111px 156px;background-repeat:no-repeat}\
   body>div.l-header>div.searchbox>div.searchbox-logo>a.searchbox-logo-link>span.alt-text,\
   body>div.l-header>div.searchbox>div.searchbox-wrapper,\
   body>div.l-header>div.nav-links,\
   body>div.l-content>div.feedback-overlay,\
   body>div.l-content>div.feedback,\
   body>div.l-content>div.l-picture-filter,\
   body>div.l-content>div.l-mid-content>div.ad-top,\
   body>div.l-content>div.l-mid-content>div.l-related-searches,\
   body>div.l-content>div.l-mid-content>div.l-pagination,\
   body>div.l-content>div.l-mid-content>div.pagination,\
   #showMoreButton,#csaTop,#csaBottom,\
   body>div.l-content>div.l-right-content>div.displayAd,\
   body>div.l-footer{display:none!important}\
   body>div.l-content{left:-102px}\
   body.polycola-nor>div.l-content>div.l-right-content{display:none!important}\
   /* goog-style */ \
   body>div.l-content>div.l-mid-content>div.l-web-results>div.web-results-header-title{height:43px;line-height:43px;padding:0!important}\
   body>div.l-content>div.l-mid-content>div.l-web-results>div.web-result{margin-bottom:23px;padding:0!important}\
   body>div.l-content>div.l-mid-content>div.l-web-results>div.web-result>h2.web-result-title{font-size:16px;font-weight:normal;text-decoration:underline}\
   body>div.l-content>div.l-mid-content>div.l-web-results>div.web-result>p.web-result-url{font-size:15px;font-style:normal;color:#006621!important}\
   body>div.l-content>div.l-mid-content>div.l-web-results>div.web-result>p.web-result-description{line-height:1.24;color:#545454!important}\
   img.youtube-result-thumbnail{width:116px!important;height:inherit!important}\
  '
 });
 engines.push({ id: 'dogpile',
  regex: [
   /^(?:https?:)?\/\/(?:www\.)?dogpile\.com\/.*/i,
   /^(?:https?:)?\/\/\w\w\.searchboth\.net\/search\/web\/dogpilepanel\.php\?.*/i
  ],
  style: '\
   body>div#suggestPanel,\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.logoWrapper>div.navbar-header>div.iconLogoWrapper,\
   body>div#wrap>div#header>div.navbar>#horizontalNavigation,\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.navbarInputWrapper,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#leftColumn,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div.resultsMainRegion>div#resultsAdsTop,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div.resultsMainRegion>div#resultsAdsBottom,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div#additionalBottomRegion,\
   body>div#wrap>div#footerWrapper{display:none!important}\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.logoWrapper,\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.logoWrapper>div.navbar-header,\
   body>div#wrap>div.body-content,\
   body>div#wrap>div.body-content>div.container,\
   body>div#wrap>div.body-content>div.container>div.row,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn,\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div.resultsMainRegion{margin:0!important;padding:0!important}\
   body>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div.resultsMainRegion>div#resultsMain{margin:0!important;padding:0 8px!important}\
   #resultsMain>h3{height:43px;line-height:43px}\
   #resultsMain .searchResult{margin-bottom:23px;padding:0!important;border:none!important}\
   #resultsMain .resultTitlePane{font-size:16px;font-weight:normal;text-decoration:underline}\
   #resultsMain a:visited{color:#61C!important}\
   #resultsMain a:link{color:#1a0dab;cursor:pointer!important}\
   #resultsMain a.resultDisplayUrl{font-size:15px;font-style:normal;color:#006621!important}\
   #resultsMain .resultDescription{line-height:1.24;color:#545454!important}\
   body>div#wrap>div#header>div.navbar{height:50px!important;min-height:inherit!important;background:#f1f1f1;border-bottom:1px solid #e5e5e5}\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.logoWrapper>div.navbar-header>div.fullLogoWrapper{display:block!important}\
   body>div#wrap>div#header>div.navbar>div.container>div.row>div.logoWrapper>div.navbar-header>div.fullLogoWrapper>a.fullLogo>img{height:48px!important;max-width:inherit!important;max-height:inherit!important;margin:0!important}\
   body.polycola-nor>div#wrap>div.body-content>div.container>div.row>div#pageWrapper>div#mainColumn>div#rightColumn{display:none!important}\
  '
 });
 engines.push({ id: 'aol',
  regex: [
   /^(?:https?:)?\/\/search\.aol\.com\/.*/i
  ],
  style: '\
   #h{height:50px!important;background:#f1f1f1!important;border-bottom:1px solid #e5e5e5!important}\
   .cntr{height:50px!important}\
   .CSB,.HLGH,#nav_cont,.ADS,#w>.ALGO>h3,.RSBOT,.P,#f{display:none!important}\
   #nav .ALGOR{height:43px;line-height:43px;margin:0 8px!important}\
   #c,.ALGO{padding-left:0!important}\
   .ALGO>ul>li{margin:0 0 23px 0!important}\
   .ALGO>ul>li h3{font-size:16px!important;line-height:1.2!important}\
   .ALGO>ul>li a:visited{color:#61C!important}\
   .ALGO>ul>li a:link{color:#1a0dab!important}\
   .ALGO>ul>li .durl{font-size:15px;font-style:normal;color:#006621!important;margin-bottom:2px}\
  '
 });

 engines.forEach(function(e){
  if((e.id[0]=='$')||(window.top!=window.self))
  {
   if(ismatch(e.regex,window.self.location.href))
   {
    onstart(function(){
     e.style&&typeof e.style==='string'&&_addStyle(e.style);
     e.start&&typeof e.start==='function'&&e.start(window.self,e);
    });
    onready(function(){
     e.ready&&typeof e.ready==='function'&&e.ready(window.self,e);
     if(e.id[0]!=='$')
     {
      var s=0,w=window.self;
      onevent(w,'scroll',function(){if(!s){s=1;w.parent.postMessage(w.scrollY,'*')}});
      onevent(w,'message',function(a){!s&&(w.scrollY!=a.data)&&w.scrollTo(w.scrollX,a.data);s=0});
      Array.prototype.slice(w.document.querySelectorAll('a')).forEach(function(a){a.target='_blank'});
     }
    });
   }
  }
 });

})();
