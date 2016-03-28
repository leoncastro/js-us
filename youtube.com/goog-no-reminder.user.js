// ==UserScript==
// @author       @leoncastro
// @namespace    http://greasyfork.org
// @name         goog-no-reminder
// @version      0.01
// @description  Remove "A privacy reminder from Google" permanently
// @include      /(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))/
// @include      /(https?:)?\/\/(www\.)?youtube\.com/
// @grant        GM_addStyle
// ==/UserScript==
GM_addStyle('#cnsh,.yt-consent{display:none!important}');
