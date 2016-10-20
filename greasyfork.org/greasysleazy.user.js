// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         greasy-sleazy-fork
// @version      0.01
// @description  Automatic jump to Sleazyfork when required
// @icon         https://greasyfork.org/assets/blacklogo96-941a633c971b25c0c9e982ed499b5d8c.png
// @include      /^(https?:)?\/\/(www\.)?greasyfork\.org\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
if(document.querySelectorAll('body>header#main-header>div.width-constraint>div#site-nav>div#nav-user-info>span.sign-in-link>a[href*="sign_in"').length
 &&document.querySelectorAll('body>div.width-constraint>p>a[href$="sign_in"').length)
 location.replace(location.protocol+'//'+'sleazyfork.org'+location.pathname+location.search+location.hash);
