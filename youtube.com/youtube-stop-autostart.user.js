// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         youtube-stop-autostart
// @version      0.01
// @description  Stop autostart videos on youtube
// @icon         http://s.ytimg.com/yts/img/favicon_48-vfl1s0rGh.png
// @include      /^(https?:)?\/\/(www\.)?youtube\.com\/*.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
document.querySelector('#movie_player').cueVideoByPlayerVars(document.querySelector('#movie_player').getVideoData());
