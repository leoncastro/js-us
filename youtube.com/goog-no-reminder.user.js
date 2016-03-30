// ==UserScript==
// @author       @leoncastro
// @contributor  @gnblizz; https://userstyles.org/styles/126125/google-don-t-bug-me
// @license      Public Domain; http://creativecommons.org/publicdomain/zero/1.0/
// @namespace    http://greasyfork.org
// @name         goog-no-reminder
// @version      0.03
// @description  Remove "A privacy reminder from Google" permanently
// @include      /(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))\/.*/
// @include      /(https?:)?\/\/(www\.)?youtube\.com\/.*/
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle('#cnsh,#cnso,#cnsw,.yt-consent,.yt-dialog-bg,#yt-consent-dialog{display:none!important}');
document.getElementById('cnsd').click(); // fire "remind me later"
