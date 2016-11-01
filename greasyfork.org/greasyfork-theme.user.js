// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         greasyfork-theme
// @version      1.00
// @description  Greasyfork new style
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAMFBMVEVHcEwdHR0rKytERETZ2dk9PT2FhYWurq5gYGACAgL///+zs7NycnLh4eGUlJRZWVmvelI3AAAACXRSTlMA/vv+I8d7UKSOO7XsAAACWElEQVR4AZXW8XKzIBAEcPcQZd2De/+3/T5FqU1tMt36B5PhN8lROJxeM69LyQaSsFyWeXqfeckgCY8GOBHI6xszF/PmJG1LzSGa0JiXX6eDZsAORFMHgpjXp/mrpaBLfgPRAbk8zAd9cx7pgFI7AJzMr5UsJNmGQH/6XyT+EAsxxFNexUpWfRS39TEybR/FMuZn8rsA6eAtcJJcrwKspu+iGcFvwe1HzYa6vYhwB5qCHi1IwvdRWq4VvYkdbE4oKUxJLVWQJqolpXkHmUhfAv/n70Iu0pqMsg720dqX1MQh6nYEHiL9FexVFNLES2jrSclcEl4A5r6m4Cna1nNg2LVHSJyjZVrBM6hV13zxl5S+6y6xXan26/4o/JOwKd/Bq3DwHoCYwBE3QrU2HwK8pR/HKbWgpwaSjQEC5BABkraHJEQIk5mSdH6QGhHAELuG9vTtQdlk/f/P8wN6oPkQJIk9JNFBpp8AIj3E5nYT4xsusDShAzYQW2PIK4Z4KTpP69diWPShAeSTAFj28/yUR9HPdeZfxLofuD8Im48jfW8OGHv5QfROUxqvmKCv0/JTYO5t7+gIaHECCFWqck9fwhuYynSkUC1VTxV9qkSFKSBxCCR5zFdj6r9AO5BZiMLxGIlTgFXL6N3tBkhcNSgYY5fQbv27oINRdFT//zSpIk4Bm6eROd+ukD4AARlA8BAarfgSD5GxJ9TQC3gv8HQ5DFH4JvZ08S7GhzhIllHv5y+R9Xv9OWsxd8Kvm8SUIi/z+7eTkjyshVoSPJd1+ph5XbKZIZfl4U3mH2+RPKg5glBiAAAAAElFTkSuQmCC
// @include      https://greasyfork.org/*
// @include      https://sleazyfork.org/*
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-start
// ==/UserScript==
//
!(function(){

 function addStyleEx(css, id)
 {
   var dad, obj = document.createElement('style');
   obj.setAttribute('type', 'text/css');
   id && obj.setAttribute('id', id);
   obj.innerHTML = css;
   dad = document.getElementsByTagName('head');
   (dad && dad.length ? dad[0] : document).appendChild(obj);
 }

 function onReady(fn){(document.readyState!='loading')?fn():document.addEventListener('DOMContentLoaded',fn)}
 function qsRemove(a){var b=document.querySelector(a);if(b)b.remove()}
 function qsMoveLast(a){var b=document.querySelector(a);if(b)b.parentNode.appendChild(b)}
 function qsMoveAfter(a,b){var c=document.querySelector(a);if(c){var d=document.querySelector(b);if(d)d.parentNode.insertBefore(c,d.nextSibling)}}

 addStyleEx(`
 /*
 //
 // @part-name         @maxstarkenburg/greasyfork/app/assets/stylesheets/application.css
 // @part-webpage      https://github.com/maxstarkenburg/greasyfork/
 // @part-author       Max Starkenburg; https://github.com/maxstarkenburg
 // @part-content      https://github.com/maxstarkenburg/greasyfork/blob/21d7a30bffef4cab214dff1a0925b37236b3eaa0/app/assets/stylesheets/application.css.erb
 //
 // <@application.css>
 */

body {
 margin: 0;
 background-color: #F6F6F6;
}
body, select, input {
 font-family: "Open Sans", sans-serif;
}

a {
 color: #670000;
}
a:visited {
 color: #A42121;
}

#main-header {
 background-color: #670000;
 background-image: linear-gradient(#670000, #990000);
 padding: 0.25em 0;
}
.width-constraint {
 margin: auto;
 max-width: 960px;
}

#main-header .width-constraint {
 padding: 0 0 0.25em 0;
 /* enable absolute positioning for children */
 position: relative;
}
#site-name img {
 vertical-align: bottom;
}
#site-name-text {
 display: inline-block;
 vertical-align: top;
}
#site-name-text h1  {
 line-height: 1.1em;
}

#main-header, #main-header a, #main-header a:visited, #main-header a:active {
 color: white;
}
#main-header h1 {
 font-size: 72px;
 margin: 0;
 margin-top: 0px;
 letter-spacing: -2px;
}
#main-header h1 a {
 text-decoration: none;
}
#main-header .subtitle {
 margin: -8px 0 0 10px;
 font-size: 0.7em;
 /* in case it overlaps the y in Greasy */
 text-shadow: -1px -1px 0px #670000, 1px -1px 0px #670000, -1px 1px 0px #670000, 1px 1px 0px #670000;
}

#site-nav nav, #nav-user-info {
 text-align: right;
 position: absolute;
 right: 0;
}
#site-nav nav {
 bottom: 0;
}
#nav-user-info {
 top: 0;
}
nav a:hover {
 color: white;
}
nav {
 padding: 0;
}
nav li {
 list-style-type: none;
 display: inline;
}
nav li + li {
 margin-left: 0.5em;
}
#script-search, #language-selector {
 display: inline;
}
#nav-user-info {
 font-size: small;
}
#nav-user-info select, #nav-user-info input {
 font-size: 11px;
}

#script-info {
 padding: 0 1em 1em;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 clear: left;
 background-color: white;
 margin: 1em 0;
 box-shadow: 0 0 5px #DDDDDD;
}

#script-content {
 margin-top: 1.5em;
}
#script-content > *:first-child {
 margin-top: 0;
}
#script-info header h2 {
 margin: 0.25em 0 0 0;
 font-size: 2em;
}
#script-description {
 margin: 0;
}
#version-note {
 font-style: italic;
 background-color: #FFFF99;
 border: 2px dotted #CC9999;
 padding: 0.5em;
}
#script-feedback-suggestion {
 margin: 0.75em 0;
}

#script-links {
 list-style: none;
 padding: 0 1em;
 margin: 0 -1em 0;
}
#script-links li {
 display: inline-block;
 margin: 0 -4px 0 0;
}
#script-links li > * {
 padding: 0.25em .5em .5em;
 display: block;
}
#script-links a {
 text-decoration: none;
}
#script-links .current {
 background: rgba(0, 0, 0, 0.03);
 position: relative;
 top: -4px;
 font-weight: bold;
 border-top: 7px solid #990000;
 box-shadow: inset 1px 0 rgba(0, 0, 0, 0.1), inset -1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px rgba(0, 0, 0, 0.1);
}
/* shift the text back up to align with the others */
#script-links .current > * {
 position: relative;
 top: 4px;
}

#install-area {
 margin-bottom: 1em;
}
.install-link, .install-link:visited, .install-link:active, .install-link:hover, .install-help-link {
 display: inline-block;
 background-color: #005200;
 padding: 0.5em 1em;
 color: white;
 text-decoration: none;
}
.install-help-link, .install-help-link:visited, .install-help-link:active, .install-help-link:hover {
 background-color: #1E971E;
 color: white;
}
.script-in-sets {
 display: inline-block;
 margin-left: 1em;
}
#script-meta {
 display: table;
 font-size: small;
}
#script-meta > * {
 margin-bottom: 1em;
}
#script-meta > dl dd {
 max-width: 50%;
}
#script-stats, #script-stats dt, #script-stats dd, #script-applies-to, #script-applies-to dt, #script-applies-to dd {
 vertical-align: top;
 margin: 0;
 padding: 0;
}
#script-stats {
 padding-right: 1em;
 min-width: 18em;
 -moz-column-count: 2;
 -webkit-column-count: 2;
 column-count: 2;
 -moz-column-gap: 1;
 -webkit-column-gap: 1;
 column-gap: 1;
}
#script-stats dt, #script-meta dt {
 clear: left;
 float: left;
 width: 12em;
 font-weight: bold;
}
#script-stats dd, #script-meta dd{
 float: left;
 min-width: 12em;
}
#script-applies-to dt:after, #script-meta dt:after {
 content: ":";
}
.inline-list {
 display: inline;
 padding-left: 0;
 list-style: none;
}
.inline-list li {
 display: inline;
}
.inline-list li:after {
 content: ", ";
}
.inline-list li:last-child:after {
 content: "";
}
dt[title] > span {
 border-bottom: 1px dotted black;
}


#additional-info > div {
 margin: 1em 0;
 padding: 1em;
 border: 1px solid #E6DDD6;
 background-color: #F2E5E5;
}
#additional-info > div:not(:first-of-type) {
 padding-top: 0.5em;
}
.script-author-description > *:first-child {
 margin-top: 0;
}
.script-author-description > *:last-child {
 margin-bottom: 0;
}
.script-author-description img {
 max-width: 100%;
}
.script-screenshots * {
 vertical-align: middle;
}
.script-screenshots a {
 text-decoration: none;
}

.form-control {
 margin-bottom: 1em;
}
.form-control textarea, #ace-editor {
 width: 100%;
 height: 20em;
 box-sizing: border-box;
 margin-top: 1px;
 margin-bottom: 1px;
}
#ace-editor {
 border: 1px solid #BBB;
 border-style: inset;
}
.form-control input:not([type=radio]):not([type=file]):not([type=checkbox]):not([size]) {
 width: 100%;
}
.radio-group input[type=radio] {
 margin-left: 1em;
}
.form-control label {
 font-weight: bold;
}
.form-control label.radio-label, .form-control label.checkbox-label {
 font-weight: normal;
}
.field_with_errors textarea {
 background-color: #FEE;
}
.label-note {
 font-size: smaller;
}
.screenshots-controls > *:not(label) {
 padding-left: 1em;
}
.add-screenshot-control, .screenshot-control {
 clear: left;
}
.screenshot-control > * {
 vertical-align: middle;
}
.screenshot-control a {
 float: left;
 min-width: 150px;
 text-align: center;
}

.script-list, .user-list {
 list-style-type: none;
 padding: 0;
 box-shadow: 0 0 5px #DDDDDD;
 background-color: white;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 box-sizing: border-box;
}
.user-list {
 padding: 1em;
 margin: 1em 0;
}
.list-option-groups ~ ol {
 width: calc(960px - 14em);
}
.script-list li {
 border-bottom: 1px solid #DDDDDD;
 padding: 1em;
}
.script-list h2 {
 margin: 0;
 font-size: 18px;
}
.script-list p {
 margin: 0;
}
.script-list footer {
 margin-top: 0.25em;
}
.script-list dl {
 font-size: smaller;
 -moz-column-count: 2;
 -webkit-column-count: 2;
 column-count: 2;
 -moz-column-gap: 0;
 -webkit-column-gap: 0;
 column-gap: 0;
 max-width: 45em;
 margin: 0;
}
.script-list dt, .script-list dd {
 margin: 0;
 padding: 0;
}
.script-list dd {
 color: #666;
}
.script-list dt::after {
 content: ": ";
}
.script-list dt {
 clear: left;
 float: left;
 width: 12em;
 padding-right: 1em;
 padding-left: 1em;
}
.script-list dd {
 float: left;
}
.list-current {
 font-weight: bold;
}
.script-list h2 {
 font-weight: normal;
}
.script-list .description {
 font-weight: normal;
 display: block;
 margin: .5em 0;
 font-size: smaller;
}
.script-list .name-description-separator {
 display: none;
}
.script-list + .pagination, .user-list + .pagination {
 font-size: 18px;
 display: inline-block;
 background-color: #F2E5E5;
 padding: 0.5em;
 margin-bottom: 1em;
 border-radius: 5px;
}
.pagination .current {
 font-style: normal;
 font-weight: bold;
}

.good-rating-count, .ok-rating-count, .bad-rating-count {
 display: inline-block;
 min-width: 1em;
 text-align: center;
 padding: 0 0.25em;
 border: 1px solid #DDDDDD;
 border-radius: 10px;
}
.good-rating-count {
 background-color: rgba(51, 155, 51, 0.1);
 border-color: rgba(51, 155, 51, 0.3);
 color: #1E971E;
 color: rgba(51, 155, 51, 1);
}
.ok-rating-count {
 background-color: rgba(155, 155, 0, 0.1);
 border-color: rgba(155, 155, 0, 0.3);
 color: #a80;
 color: rgba(155, 155, 0, 1);
}
.bad-rating-count {
 background-color: rgba(155, 51, 51, 0.1);
 border-color: rgba(155, 51, 51, 0.3);
 color: rgba(155, 51, 51, 1);
}



/* activated by js */
.select-all, .select-none {
 display: none;
}

.diff {
 border: 2px solid black;
}

#help-allowed-elements {
 -moz-column-width: 15em;
 -webkit-column-width: 15em;
 column-width: 15em;
}

#by-site-list {
 list-style-type: none;
 padding: 0; 
}
#by-site-list li {
 display: inline;
 vertical-align: middle;
}

/* Edit */
#user_profile {
 width: 100%;
 height: 10em;
}
/* View */
#user-profile {
 border: 1px solid #E6DDD6;
 background-color: #F2E5E5;
 padding: 1em;
}

.preview-button {
 
}
.preview-result {
 display: none;
 background-color: #FFA;
 padding: 0.5em;
}

.failed-sync {
 background-color: #FCC;
}

.discussion-question {
 list-style-image: url(/images/circle-blue.png);
}
.discussion-report {
 list-style-image: url(/images/report.png);
}
.discussion-bad {
 list-style-image: url(/images/circle-red.png);
}
.discussion-ok {
 list-style-image: url(/images/circle-yellow.png);
}
.discussion-good {
 list-style-image: url(/images/circle-green.png);
}

.alert {
 font-style: italic;
 background-color: #FFFF99;
 border: 2px dotted #CC9999;
 padding: 0.5em;
}

.front-page-p {
 margin-bottom: 0;
}
.front-page-box {
 display: inline-block;
 width: 45%;
 vertical-align: top;
 text-align: justify;
}
.front-page-box:first-of-type {
 padding-right: 6%;
}
@media (max-width: 600px) {
 .front-page-box {
  display: block;
  width: auto;
  padding: 0;
 }
}

#install-stats-chart {
 width: 100%;
 height: 400px;
}
.stats-table {
 border-collapse: collapse;
}
.stats-table th, .stats-table td {
 border: 1px solid gray;
 padding: 0 0.5em;
}
td.numeric, th.numeric {
 text-align: right;
}

.list-option-groups {
 margin-top: 1em;
 float: right;
 width: 15em;
 font-size: smaller;
 margin-left: 2em;
}
.list-option-group {
 margin-bottom: 1em;
}
.list-option-group ul {
 margin: .5em 0 0;
 list-style-type: none;
 padding: 1em 0;
 box-shadow: 0 0 5px #DDDDDD;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 background-color: white;
}
.list-option-group a {
 padding: .35em 1em;
 display: block;
}
.list-option-group a:hover {
 background: linear-gradient(white, #F6F6F6);
 text-decoration: none;
 box-shadow: inset 0 -1px #DDDDDD, inset 0 1px #EEEEEE;
}
.list-option-group .list-current {
 border-left: 7px solid #800;
 box-shadow: inset 0 1px rgba(0, 0, 0, 0.1), inset 0 -1px rgba(0, 0, 0, 0.1);
 margin: .25em 0 .25em -4px;
 padding: .4em 1em .4em calc(1em - 3px);
 background: linear-gradient(white, #EEEEEE);
}

.translation_missing {
 outline: dashed red;
}

#edit_user > div {
 margin-bottom: 0.5em;
}
#edit_user > div > label:first-child {
 font-weight: bold;
}

.inline-form {
 display: inline;
}

:target {
 background-color: #F2E5E5;
}
a.self-link, a.self-link:visited {
 text-decoration: none;
 color: black;
 opacity: 0.2;
}

.indented {
 padding-left: 1em;
}

.expander {
 cursor: pointer;
 padding: 2px 5px;
 color: #670000;
 border-radius: 3px;
 background-color: #F2E5E5;
 text-decoration: underline;
}

#script-show-info-ad {
 width: 732px;
 box-sizing: border-box;
 margin: 1.5em auto;
}
.ad-note {
 font-size: x-small;
 line-height: 1em;
 max-width: -webkit-max-content;
 max-width: -moz-max-content;
 max-width: max-content;
 border-top: 2px solid #E7CF87;
 border-left: 2px solid #E7CF87;
 border-right: 2px solid #E7CF87;
 padding: 0 0.5em;
}
.ad-note, .ad-content {
 background-color: #E7CF87;
}
.ad-content {
 border: 2px solid #E7CF87;
}
.ad-content > * {
 vertical-align: bottom;
}

.social_share_privacy_area.box li.settings_info {
 /* Shrink a bit */
 height: 20px;
 width: 135px;
 /* Show on separate line */
 display: block;
}

pre, code, #code-container {
 border-radius: 2px;
 border: 1px solid #E6DDD6;
 background-color: #F2E5E5;
}
pre.CodeRay, table.CodeRay, .CodeRay pre {
 background: none;
 border: 0;
 padding: 0;
 margin: 0;
}
/* Non-syntax highlighted block */
pre.CodeRay {
 padding: 4px 8px;
}
.CodeRay .line-numbers pre, .CodeRay .line-numbers pre a {
 background-color: transparent !important;
}
.CodeRay .line-numbers {
 background-color: #E6DDDD !important;
}
.CodeRay .line-numbers, .CodeRay .code {
 /* Otherwise tall characters can make these not align */
 line-height: 1em;
}
.CodeRay {
 -moz-tab-size: 4;
 tab-size: 4;
}

.external-login {
 padding: 2px 2px 3px 22px;
 border: 1px solid black;
 border-radius: 2px;
 background-repeat: no-repeat;
 background-size: 16px 16px;
 background-position: 5px 4px;
}
.external-login-container {
 display: inline-block;
 vertical-align: top;
}
.external-login-container * {
 text-align: center;
 display: block;
}
.external-login-container > *:not(button) {
 font-size: smaller;
}
.external-login-container:not(:last-child) {
 margin-right: 5px;
}
.github-login {
 background-image: url('/assets/github-32-5326bf72dcecdc93c13888b126a90712.png');
}
.google_oauth2-login {
 background-image: url('/assets/google-32-d35291d676ed05beab43f5dfd5e9fb5f.png');
}
.browser_id-login {
 background-image: url('/assets/persona-c64fac782455753df274abe8bc5f68a4.png');
}


 /*
 // </@application.css>

 //
 // @part-name         @JasonBarnabe/greasyfork/vendor/assets/stylesheets/jquery.socialshareprivacy.min.css
 // @part-webpage      https://github.com/JasonBarnabe/greasyfork/
 // @part-author       Jason Barnabe; https://github.com/JasonBarnabe
 // @part-content      https://github.com/JasonBarnabe/greasyfork/blob/master/vendor/assets/stylesheets/jquery.socialshareprivacy.min.css
 //
 // <@jquery.socialshareprivacy.min.css>
 */

.social_share_privacy_area{clear:both;margin:5px 0;list-style-type:none;padding:0;width:auto;display:block}.social_share_privacy_area.line{height:25px;line-height:16px}.social_share_privacy_area.box{width:95px}.social_share_privacy_area li{margin:0 !important;padding:0 !important;list-style-type:none !important}.social_share_privacy_area.box li{text-align:center}.social_share_privacy_area.line li{height:21px;float:left}.social_share_privacy_area li .dummy_btn{cursor:pointer;padding:0;height:inherit}.social_share_privacy_area.line li .dummy_btn{float:left;margin:0 20px 0 10px}.social_share_privacy_area.box li .dummy_btn{margin-bottom:10px}.social_share_privacy_area li .dummy_btn img.privacy_dummy,.social_share_privacy_area li .dummy_btn iframe{vertical-align:bottom}.social_share_privacy_area li .dummy_btn iframe{overflow:hidden;height:inherit;width:inherit;border-style:none}.social_share_privacy_area.line li{display:inline-block}.social_share_privacy_area li .switch{display:inline-block;text-indent:-9999em;background:transparent url(../images/socialshareprivacy_on_off.png) no-repeat 0 0 scroll;width:23px;height:12px;overflow:hidden;margin:4px 0 0;padding:0;cursor:pointer}.social_share_privacy_area.line li .switch{float:left}.social_share_privacy_area li .switch.on{background-position:0 -12px}.social_share_privacy_area li.help_info{position:relative}.social_share_privacy_area li.settings_info,.social_share_privacy_area li.help_info .info{text-align:left}.social_share_privacy_area li.help_info .info,.social_share_privacy_area li .help_info.icon .info{display:none;position:absolute;bottom:40px;width:290px;padding:10px 15px;margin:0;font-size:12px;line-height:16px;font-weight:bold;border:1px solid #ccc;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;-moz-box-shadow:0 0 15px rgba(0,0,0,0.4);-webkit-box-shadow:0 0 15px rgba(0,0,0,0.4);box-shadow:0 0 15px rgba(0,0,0,0.4);background-color:#fdfbec;color:#000;z-index:500}.social_share_privacy_area.line li.help_info .info,.social_share_privacy_area li .help_info.icon .info{left:0}.social_share_privacy_area.box li.help_info .info{left:100%;top:0;bottom:auto}.social_share_privacy_area li .help_info.icon .info{width:350px}.social_share_privacy_area li.help_info.display .info,.social_share_privacy_area li .help_info.icon.display .info{display:block}.social_share_privacy_area li.help_info.info_off.display .info{display:none}.social_share_privacy_area li .help_info.icon{background:#fff url(../images/socialshareprivacy_info.png) no-repeat center center scroll;width:25px;height:20px;position:relative;display:inline-block;vertical-align:top;border:2px solid #e7e3e3;border-right-width:0;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px 0 0 5px;border-radius:5px 0 0 5px;margin:0;padding:0}.social_share_privacy_area li.settings_info .settings_info_menu.perma_option_off .help_info.icon{border-right-width:2px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px}.social_share_privacy_area li.settings_info{position:relative;top:-2px}.social_share_privacy_area li.settings_info a{text-decoration:none;margin:0 !important}.social_share_privacy_area li.settings_info .settings_info_menu{background-color:#f3f4f5;color:#000;border-style:none;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;-moz-box-shadow:0 0 15px rgba(0,0,0,0.4);-webkit-box-shadow:0 0 15px rgba(0,0,0,0.4);box-shadow:0 0 15px rgba(0,0,0,0.4);left:0;position:absolute;top:0;min-width:135px;margin:0;padding:0}.social_share_privacy_area li.settings_info .settings_info_menu.on{z-index:1000}.social_share_privacy_area li.settings_info .settings_info_menu.off{border-width:0;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;background-color:transparent}.social_share_privacy_area li.settings_info .settings_info_menu.off form{display:none;margin:0;padding:0}.social_share_privacy_area li.settings_info .settings_info_menu .settings{text-indent:-9999em;display:inline-block;background:#fff url(../images/settings.png) no-repeat center center scroll;width:25px;height:20px;border:2px solid #e7e3e3;-moz-border-radius:0 5px 5px 0;-webkit-border-radius:0 5px 5px 0;border-radius:0 5px 5px 0;border-left:1px solid #ddd;margin:0;padding:0}.social_share_privacy_area li.settings_info .settings_info_menu form fieldset{border-width:0;margin:0;padding:0 10px 10px}.social_share_privacy_area li.settings_info .settings_info_menu form fieldset legend{font-size:11px;font-weight:bold;line-height:14px;margin:0;padding:10px 0;width:115px}.social_share_privacy_area li.settings_info .settings_info_menu form fieldset input{margin:4px 10px 4px 0;padding:0}.social_share_privacy_area li.settings_info .settings_info_menu form fieldset label{display:block;font-size:12px;font-weight:bold;line-height:24px;-moz-transition:color .5s ease-in;-webkit-transition:color .5s ease-in;transition:color .5s ease-in;margin:0;padding:0;white-space:nowrap}.social_share_privacy_area li.settings_info .settings_info_menu form fieldset label.checked{color:#090}.social_share_privacy_area.line .buffer iframe{width:110px;height:20px}.social_share_privacy_area.line .buffer img{width:55px;height:20px;margin-right:55px}.social_share_privacy_area.box .buffer iframe,.social_share_privacy_area.box .buffer img{width:55px;height:62px}.social_share_privacy_area.box .delicious .delicious-widget,.social_share_privacy_area.box .delicious img.privacy_dummy{width:50px;height:62px}.social_share_privacy_area.line .delicious .delicious-widget,.social_share_privacy_area.line .delicious img.privacy_dummy{width:75px;height:20px;margin-right:20px}.social_share_privacy_area.box .delicious div.delicious-widget{font-family:Arial,Tahoma,Sans-Serif;font-size:11px;width:50px;margin:0 auto}.social_share_privacy_area.box .delicious a.icon,.social_share_privacy_area.box .delicious a.count{color:#FFF !important;display:block;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;border-radius:3px;outline:none !important;text-decoration:none !important}.social_share_privacy_area.box .delicious a.icon{background:#fff;border:1px solid #ccc;height:38px;overflow:hidden;position:relative;direction:ltr}.social_share_privacy_area.box .delicious a.icon:hover{border-color:#666}.social_share_privacy_area.box .delicious a.count{margin-top:2px;text-align:center;font-size:12px;line-height:18px;height:18px;background:#3274d0;border:#3274d0 1px solid;text-shadow:#2a5580 1px 1px 0}.social_share_privacy_area.box .delicious a.count:hover{background:#369;border-color:#369}.social_share_privacy_area.box .delicious a.count:active{background:#000;border:#333 1px solid;text-shadow:#222 1px 1px 0;outline:0}.social_share_privacy_area.line .delicious div.delicious-widget{font-family:Arial,Tahoma,Sans-Serif;font-size:11px;width:76px}.social_share_privacy_area.line .delicious a.icon,.social_share_privacy_area.line .delicious a.count{display:block;float:left;line-height:18px;border:#666 solid 1px;-webkit-border-radius:3px;-moz-border-radius:3px;-o-border-radius:3px;border-radius:3px;outline:none !important;text-decoration:none !important;height:18px;overflow:hidden;color:#FFF !important}.social_share_privacy_area.line .delicious a.icon{background:#fff;border-color:#ccc;width:20px;position:relative;direction:ltr;margin-right:1px}.social_share_privacy_area.line .delicious a.icon:hover{border-color:#666}.social_share_privacy_area.line .delicious a.count{font-size:12px;background:#3274d0;border-color:#3274d0;width:50px;text-align:center;text-shadow:#2a5580 1px 1px 0}.social_share_privacy_area.line .delicious a.count:hover{background:#369;border-color:#369;text-shadow:#369 1px 1px 0}.social_share_privacy_area.line .delicious a.count:active{background:#000;border-color:#333;text-shadow:#222 1px 1px 0}.social_share_privacy_area.box .delicious a.icon:hover *,.social_share_privacy_area.line .delicious a.icon:hover *{opacity:.85;filter:alpha(opacity=85)}.social_share_privacy_area.box .delicious a.icon *,.social_share_privacy_area.line .delicious a.icon *{width:50%;height:50%;position:absolute;margin:0 !important}.social_share_privacy_area.box .delicious div.delicious1,.social_share_privacy_area.line .delicious div.delicious1{background:#3274d0;left:50%;top:0}.social_share_privacy_area.box .delicious div.delicious2,.social_share_privacy_area.line .delicious div.delicious2{background:#000;left:0;top:50%}.social_share_privacy_area.box .delicious div.delicious3,.social_share_privacy_area.line .delicious div.delicious3{background:#d3d2d2;left:50%;top:50%}.social_share_privacy_area.box .delicious a.count i,.social_share_privacy_area.line .delicious a.count i{display:none;font-style:normal}.social_share_privacy_area.box .delicious a.count b,.social_share_privacy_area.line .delicious a.count b{font-weight:normal}.social_share_privacy_area.line .disqus img.privacy_dummy{width:49px;height:20px;margin-right:45px}.social_share_privacy_area.box .disqus img.privacy_dummy{width:55px;height:61px}.social_share_privacy_area .disqus .disqus-widget{line-height:20px;font-size:11px;font-family:Arial,sans-serif;cursor:text;white-space:nowrap;text-align:left}.social_share_privacy_area .disqus .disqus-widget a,.social_share_privacy_area .disqus .disqus-widget a:hover{-webkit-text-shadow:none;-moz-text-shadow:none;-ms-text-shadow:none;-o-text-shadow:none;text-shadow:none}.social_share_privacy_area .disqus .disqus-widget a.name{overflow:hidden;font-weight:bold;text-transform:uppercase;text-decoration:none;color:#5e8ba9;-webkit-text-shadow:0 1px 0 rgba(255,255,255,0.5);-moz-text-shadow:0 1px 0 rgba(255,255,255,0.5);-ms-text-shadow:0 1px 0 rgba(255,255,255,0.5);-o-text-shadow:0 1px 0 rgba(255,255,255,0.5);text-shadow:0 1px 0 rgba(255,255,255,0.5);height:18px;border:1px solid #ccc;border-radius:3px;background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#fff),to(#dedede));background-image:-moz-linear-gradient(top,#fff,#dedede);background-image:-o-linear-gradient(top,#fff,#dedede);background-image:-ms-linear-gradient(top,#fff,#dedede);background-image:linear-gradient(top,#fff,#dedede)}.social_share_privacy_area .disqus .disqus-widget a.name .us{color:#b84}.social_share_privacy_area.line .disqus .disqus-widget{min-width:94px}.social_share_privacy_area.line .disqus .disqus-widget .count,.social_share_privacy_area.line .disqus .disqus-widget a.name{display:inline-block;padding:0 4px;vertical-align:top}.social_share_privacy_area.box .disqus .disqus-widget{display:block;width:55px;height:61px;margin:auto}.social_share_privacy_area.box .disqus .disqus-widget .count,.social_share_privacy_area.box .disqus .disqus-widget a.name{display:block;width:53px;text-align:center}.social_share_privacy_area .disqus .disqus-widget a.name:hover{border-color:#bbb;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#d9d9d9));background-image:-moz-linear-gradient(top,#f8f8f8,#d9d9d9);background-image:-o-linear-gradient(top,#f8f8f8,#d9d9d9);background-image:-ms-linear-gradient(top,#f8f8f8,#d9d9d9);background-image:linear-gradient(top,#f8f8f8,#d9d9d9)}.social_share_privacy_area .disqus .disqus-widget a.name:active{background-color:#efefef;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 3px 5px rgba(0,0,0,0.1);box-shadow:inset 0 3px 5px rgba(0,0,0,0.1)}.social_share_privacy_area .disqus .disqus-widget .count{position:relative;height:18px;border:1px solid #bbb;background:white;border-radius:3px;text-align:center}.social_share_privacy_area .disqus .disqus-widget .count a{font-weight:normal}.social_share_privacy_area.line .disqus .disqus-widget .count{margin-left:4px;min-width:1em}.social_share_privacy_area.box .disqus .disqus-widget .count{height:34px;line-height:34px;font-size:14px;margin-bottom:5px}.social_share_privacy_area.line .disqus .disqus-widget .count u,.social_share_privacy_area.line .disqus .disqus-widget .count i{position:absolute;zoom:1;line-height:0;width:0;height:0;left:0;top:50%;margin:-4px 0 0 -4px;border:4px transparent solid;border-right-color:#aaa;border-left:0}.social_share_privacy_area.line .disqus .disqus-widget .count u{margin-left:-3px;border-right-color:#fff}.social_share_privacy_area.box .disqus .disqus-widget .count u,.social_share_privacy_area.box .disqus .disqus-widget .count i{position:absolute;zoom:1;line-height:0;top:auto;left:50%;bottom:0;right:auto;margin:0 0 -4px -4px;border:4px transparent solid;border-top-color:#aaa;border-bottom:0;width:0;height:0}.social_share_privacy_area.box .disqus .disqus-widget .count u{margin-bottom:-3px;border-top-color:#fff}.social_share_privacy_area .disqus .disqus-widget .count a{color:#333;text-decoration:none}.social_share_privacy_area .disqus .disqus-widget .count a:hover{color:#333;text-decoration:underline}.social_share_privacy_area.line .facebook .fb_like{margin-right:30px;width:120px}.social_share_privacy_area.line .facebook iframe{width:130px;height:21px}.social_share_privacy_area.box .facebook iframe{width:48px;height:62px}.social_share_privacy_area.line .flattr img{width:72px;height:20px;margin-right:98px}.social_share_privacy_area.line .flattr a,.social_share_privacy_area.line .flattr iframe{width:150px;height:20px;margin-right:20px}.social_share_privacy_area.line .flattr a{display:inline-block}.social_share_privacy_area.box .flattr a,.social_share_privacy_area.box .flattr img,.social_share_privacy_area.box .flattr iframe{width:62px;height:62px}.social_share_privacy_area.box .flattr a{display:block;visibility:hidden;margin:auto}.social_share_privacy_area.box .flattr .dummy_btn{min-width:62px;min-height:67px}.social_share_privacy_area.line .gplus img.gplusone_privacy_dummy{width:32px}.social_share_privacy_area.line li div.gplusone{width:90px}.social_share_privacy_area.box li div.gplusone{min-width:50px;min-height:65px}.social_share_privacy_area.line .hackernews img.privacy_dummy{width:20px;height:20px;margin-right:70px}.social_share_privacy_area.box .hackernews img.privacy_dummy{width:62px;height:62px}.social_share_privacy_area .hackernews .hackernews-widget{line-height:20px;font-size:11px;font-family:Arial,sans-serif;cursor:text;white-space:nowrap;text-align:left}.social_share_privacy_area .hackernews .hackernews-widget a.name{overflow:hidden;font-weight:bold;font-size:12px;text-decoration:none;text-align:center;color:#fff;height:20px;border-radius:3px;background-color:#f60}.social_share_privacy_area.line .hackernews .hackernews-widget{min-width:90px}.social_share_privacy_area.line .hackernews .hackernews-widget .points{display:inline-block;padding:0 4px;vertical-align:top}.social_share_privacy_area.line .hackernews .hackernews-widget a.name{display:inline-block;width:20px}.social_share_privacy_area.box .hackernews .hackernews-widget{display:block;width:62px;height:62px;margin:auto}.social_share_privacy_area.box .hackernews .hackernews-widget a.name{display:block;width:62px}.social_share_privacy_area .hackernews .hackernews-widget a.name:hover{background-color:#ff8635}.social_share_privacy_area .hackernews .hackernews-widget a.name:active{background-color:#ff8635;-webkit-box-shadow:inset 0 3px 5px rgba(0,0,0,0.1);-moz-box-shadow:inset 0 3px 5px rgba(0,0,0,0.1);box-shadow:inset 0 3px 5px rgba(0,0,0,0.1)}.social_share_privacy_area .hackernews .hackernews-widget .points{position:relative;height:18px;border:1px solid #bbb;background:white;border-radius:3px;text-align:center}.social_share_privacy_area .hackernews .hackernews-widget .points a{font-weight:normal}.social_share_privacy_area.line .hackernews .hackernews-widget .points{margin-left:4px;min-width:1em}.social_share_privacy_area.box .hackernews .hackernews-widget .points{display:block;width:60px;height:35px;line-height:35px;font-size:14px;margin-bottom:5px}.social_share_privacy_area.line .hackernews .hackernews-widget .points u,.social_share_privacy_area.line .hackernews .hackernews-widget .points i{position:absolute;zoom:1;line-height:0;width:0;height:0;left:0;top:50%;margin:-4px 0 0 -4px;border:4px transparent solid;border-right-color:#aaa;border-left:0}.social_share_privacy_area.line .hackernews .hackernews-widget .points u{margin-left:-3px;border-right-color:#fff}.social_share_privacy_area.box .hackernews .hackernews-widget .points u,.social_share_privacy_area.box .hackernews .hackernews-widget .points i{position:absolute;zoom:1;line-height:0;top:auto;left:50%;bottom:0;right:auto;margin:0 0 -4px -4px;border:4px transparent solid;border-top-color:#aaa;border-bottom:0;width:0;height:0}.social_share_privacy_area.box .hackernews .hackernews-widget .points u{margin-bottom:-3px;border-top-color:#fff}.social_share_privacy_area .hackernews .hackernews-widget .points a{color:#333;text-decoration:none}.social_share_privacy_area .hackernews .hackernews-widget .points a:hover{color:#333;text-decoration:underline}.social_share_privacy_area.line .linkedin img.linkedin_privacy_dummy{width:63px;height:20px}.social_share_privacy_area.box .linkedin img.linkedin_privacy_dummy{width:61px;height:62px}.social_share_privacy_area.box .linkedin .dummy_btn{min-width:61px;min-height:62px}.social_share_privacy_area.line .mail a{display:inline-block;width:43px;height:20px;margin-right:20px}.social_share_privacy_area.box .mail a{display:block;margin:auto;width:58px;height:39px}.social_share_privacy_area.line li div.pinit{width:100px}.social_share_privacy_area.box .pinterest .dummy_btn.pinit a{margin-top:29px !important}.social_share_privacy_area.line .pinterest .dummy_btn img.privacy_dummy{width:40px;height:20px}.social_share_privacy_area.box .pinterest .dummy_btn img.privacy_dummy{width:40px;height:50px}.social_share_privacy_area.line .reddit iframe{width:120px;height:18px}.social_share_privacy_area.box .reddit iframe{width:58px;height:66px}.social_share_privacy_area.line .stumbleupon iframe,.social_share_privacy_area.line .stumbleupon img{width:74px;height:18px}.social_share_privacy_area.box .stumbleupon iframe,.social_share_privacy_area.box .stumbleupon img{width:50px;height:60px}.social_share_privacy_area.line .tumblr a{display:inline-block;width:81px;height:20px;margin-right:20px}.social_share_privacy_area.box .tumblr a{display:block;margin:auto;width:58px;height:58px}.social_share_privacy_area.line li div.tweet{width:115px}.social_share_privacy_area.line .twitter iframe{width:120px;height:20px}.social_share_privacy_area.box .twitter iframe{width:62px;height:62px}.social_share_privacy_area.line .xing img.xing_privacy_dummy{width:55px;height:20px;margin-right:66px}.social_share_privacy_area.box .xing img.xing_privacy_dummy{width:55px;height:62px}.social_share_privacy_area.box .xing .dummy_btn{min-width:55px;min-height:62px}.social_share_privacy_area.box .xing .dummy_btn div{margin:auto}


 /*
 // </@jquery.socialshareprivacy.min.css>

 //
 // @part-name         @JasonBarnabe/greasyfork/app/assets/stylesheets/diff.css
 // @part-webpage      https://github.com/JasonBarnabe/greasyfork/
 // @part-author       Jason Barnabe; https://github.com/JasonBarnabe
 // @part-content      https://github.com/JasonBarnabe/greasyfork/blob/master/app/assets/stylesheets/diff.css
 //
 // <@diff.css>
 */

/* From Diffy::CSS */
.diff{overflow:auto;}
.diff ul{background:#fff;overflow:auto;font-size:13px;list-style:none;margin:0;padding:0;display:table;width:100%;}
.diff del, .diff ins{display:block;text-decoration:none;}
.diff li{padding:0; display:table-row;margin: 0;height:1em;}
.diff li.ins{background:#dfd; color:#080}
.diff li.del{background:#fee; color:#b00}
.diff li:hover{background:#ffc}
/* try &#39;whitespace:pre;&#39; if you don&#39;t want lines to wrap */
.diff del, .diff ins, .diff span{white-space:pre-wrap;font-family:courier;}
.diff del strong{font-weight:normal;background:#fcc;}
.diff ins strong{font-weight:normal;background:#9f9;}
.diff li.diff-comment { display: none; }
.diff li.diff-block-info { background: none repeat scroll 0 0 gray; }


 /*
 // </@diff.css>

 //
 // @part-name         @JasonBarnabe/greasyfork/app/assets/stylesheets/socialshareprivacy.css
 // @part-webpage      https://github.com/JasonBarnabe/greasyfork/
 // @part-author       Jason Barnabe; https://github.com/JasonBarnabe
 // @part-content      https://github.com/JasonBarnabe/greasyfork/blob/master/app/assets/stylesheets/socialshareprivacy.css.erb
 //
 // <@socialshareprivacy.css>
 */

.social_share_privacy_area li .switch {
 background-image: url(/assets/jquery-socialshareprivacy/socialshareprivacy_on_off-22485b54b88d18d16188913e158eedbd.png);
}
.social_share_privacy_area li .help_info.icon {
 background-image: url(/assets/jquery-socialshareprivacy/socialshareprivacy_info-3e99e1416cfc6f8ba58dae4bd90958ee.png);
}
.social_share_privacy_area li.settings_info .settings_info_menu .settings {
 background-image: url(/assets/jquery-socialshareprivacy/settings-ea092969ee74a79c095514bcd1684f45.png);
}
/*
.social_share_privacy_area.line li {
 float: none;
 display: block;
}
.social_share_privacy_area.line .reddit iframe {
 height: 20px;
}
.info + .dummy_btn {
 padding-left: 23px !important;
}
*/

/* Show all in a row */
.social_share_privacy_area.box {
 width: auto;
}
.social_share_privacy_area.box li {
 display: inline-block;
 vertical-align: top;
}
/* Space them out */
.social_share_privacy_area.box li div, .social_share_privacy_area.box li .switch {
 margin-right: 10px;
}
/* Make those that don't have the switch line up with the rest. */
.box .info + .dummy_btn {
 margin-top: 21px;
}
/* Shrink the settings box */
.social_share_privacy_area li.settings_info .settings_info_menu form fieldset input {
 margin-top: 0;
 margin-bottom: 0;
 vertical-align: middle;
}
.social_share_privacy_area li.settings_info .settings_info_menu form fieldset label {
 line-height: normal;
 vertical-align: baseline;
}
.social_share_privacy_area li.settings_info .settings_info_menu form fieldset legend {
 width: auto;
}
/* Give the settings box room */
#share {
 margin-bottom: 90px;
}


 /*
 // </@socialshareprivacy.css>

 //
 // @part-name         @leoncastro/greasyfork/app/assets/stylesheets/custom.css
 // @part-webpage      https://github.com/leoncastro
 // @part-author       leoncastro; https://github.com/leoncastro
 //
 // <@custom.css>
 */

.pagination, .script-list + .pagination, .user-list + .pagination {
 display: block;
 margin: 0;
 padding: 0;
 background-color: transparent;
}
.pagination > *, .script-list + .pagination > *, .user-list + .pagination > * {
 display: inline-block;
 background-color: #F2E5E5;
 padding: 0.5em;
 margin-bottom: 1em;
 border-radius: 5px;
 text-decoration: none;
}
.pagination .disabled {
 display: none;
}
.pagination .current, .pagination .gap {
 background-color: transparent;
}
#script-stats {
 -moz-column-count: 2;
 -webkit-column-count: 2;
 column-count: 2;
 -moz-column-gap: 1em;
 -webkit-column-gap: 1em;
 column-gap: 1em;
}
#install-area a:hover {
 box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
#script-meta {
 display: inherit;
 font-size: inherit;
}
.expander {
 display: none;
}
.alert {
 background-color: #ffffcc;
 border: none;
 border-left: 6px solid #ffeb3b;
}
pre {
 border-radius: inherit;
 border: inherit;
 background-color: inherit;
}

/* forum */
#Head {
 background-color: #670000;
 background-image: linear-gradient(#670000, #990000);
 padding: 0.25em 0;
}
#Panel {
 float: left;
 width: 200px;
 margin: 0 10px 10px 0;
 font-size: smaller;
}
#Panel .FilterMenu, #Panel .PanelCategories {
 margin: .5em 0 0;
 list-style-type: none;
 padding: 1em 0;
 box-shadow: 0 0 5px #DDDDDD;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 background-color: white;
}
#Panel .FilterMenu li, #Panel .PanelCategories li {
 border: none!important;
 padding:0!important;
}
#Panel .FilterMenu a, #Panel .PanelCategories a {
 padding: .35em 1em;
 display: block;
}
#Panel .FilterMenu a:hover, #Panel .PanelCategories a:hover {
 background: linear-gradient(white, #F6F6F6);
 text-decoration: none;
 box-shadow: inset 0 -1px #DDDDDD, inset 0 1px #EEEEEE;
}
#Panel .FilterMenu .Active a, #Panel .PanelCategories .Active a {
 border-left: 7px solid #800;
 box-shadow: inset 0 1px rgba(0, 0, 0, 0.1), inset 0 -1px rgba(0, 0, 0, 0.1);
 margin: .25em 0 .25em -4px;
 padding: .4em 1em .4em calc(1em - 3px);
 background: linear-gradient(white, #EEEEEE);
}
#Content {
 float: left;
 width: 720px;
 margin: 10px 0;
 padding: 0 1em 1em;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 background-color: white;
 box-shadow: 0 0 5px #DDDDDD;
}
#Content .HomepageTitle {
 display: inline-block;
 position: relative;
 top: -4px;
 margin: 0 -4px 0 0;
 padding: 0.25em .5em .5em;
 background: rgba(0, 0, 0, 0.03);
 font-weight: bold;
 border-top: 7px solid #990000;
 box-shadow: inset 1px 0 rgba(0, 0, 0, 0.1), inset -1px 0 rgba(0, 0, 0, 0.1), inset 0 -1px rgba(0, 0, 0, 0.1);
}
#Content .PageControls {
 display: inline-block;
 float: right;
}
.Discussions {
 clear: both;
}
.Discussions > li:first-child {
 border-width: 1px 0;
}
.Message pre {
 border-radius: 2px;
 border: 1px solid #E6DDD6;
 background-color: #F2E5E5;
}
.RecentDiscussionFilterOptions {
 text-align: left;
}
.RecentDiscussionFilter a {
 display: inline-block;
 background-color: #F2E5E5;
 padding: 0.2em 0.5em;
 margin-top: 0.5em;
 border-radius: 5px;
 text-decoration: none;
}
.Pager > * {
 display: inline-block;
 background-color: #F2E5E5;
 padding: 0.2em 0.5em;
 margin-bottom: 1em;
 border-radius: 5px;
 text-decoration: none;
}
.Pager > span {
 display: none;
}
.Pager > .Ellipsis, .Pager > .Highlight {
 display: inline-block;
 background-color: transparent;
}
/* sign_up, sign_in and password/new */
body .width-constraint > h2, body .width-constraint > h3 {
 width: 340px;
 margin: 1em auto;
 text-align: center;
}
form.inline-form {
 position: relative;
 display: block;
 margin: 0 auto;
 padding: 1em;
 background-color: #fff;
 border: 1px solid #d8dee2;
 border-radius: 5px;
 text-align: center;
}
form.new_user {
 position: relative;
 width: 340px;
 margin: 0 auto;
 padding: 1em;
 background-color: #fff;
 border: 1px solid #d8dee2;
 border-radius: 5px;
 text-align: left;
}
form.new_user label {
 display: block;
 font-size: small;
}
form.new_user br {
 display: none;
}
form.new_user input[type="text"],
form.new_user input[type="email"],
form.new_user input[type="password"] {
 display: block;
 width: 100%;
 min-height: 34px;
 box-sizing: border-box;
 margin-top: 0.2em;
 margin-bottom: 0.5em;
 padding: 6px 8px;
 font-size: 14px;
 line-height: 20px;
 vertical-align: middle;
 color: #333;
 background-color: #fff;
 border: 1px solid #ddd;
 border-radius: 3px;
 outline: none;
 box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
}
form input[type="checkbox"],
form input[type="checkbox"] + label {
 display: inline-block;
 font-size: small;
}
form.new_user input[type="submit"] {
 display: block;
 width: 100%;
 min-height: 34px;
 box-sizing: border-box;
 margin: 0.5em 0 0 0;
 padding: 6px 8px;
 font-size: 14px;
 font-weight: bold;
 line-height: 20px;
 text-align: center;
 vertical-align: middle;
 color: #fff;
 background-color: #670000;
 background-image: linear-gradient(#990000, #670000);
 border: 1px solid #ddd;
 border-radius: 3px;
}
form.new_user ~ br {
 display: none
}
form.new_user ~ a {
 width: 340px;
 display: block;
 margin: 0 auto 2em;
 font-size: small;
}
form.new_user + a {
 width: 340px;
 display: block;
 margin: 0 auto;
}
/* moderator_actions */
body > .width-constraint > table {
 padding: 0 1em 1em;
 border: 1px solid #BBBBBB;
 border-radius: 5px;
 clear: left;
 background-color: white;
 margin: 1em 0;
 box-shadow: 0 0 5px #DDDDDD;
}
body > .width-constraint > table time {
 display: inline-block;
 min-width: 7em;
}
 /*
 // </@custom.css>
 */
 `, 'greasyfork-theme');

 onReady(function(){
  // remove only the CSS in the main site, not in the forum
  qsRemove('link[rel="stylesheet"][href*="/assets/application"]');
  // move our stylesheet to the last position in the head
  qsMoveLast('#greasyfork-theme');

  // reorganize elements on scripts info page:
  qsMoveAfter('#script-info>header', '#script-links');
  qsMoveAfter('dt.script-show-version', 'dd.script-list-ratings');
  qsMoveAfter('dd.script-show-version' , 'dt.script-show-version');
  qsMoveAfter('dt.script-show-compatibility', 'dd.script-show-updated-date');
  qsMoveAfter('dd.script-show-compatibility', 'dt.script-show-compatibility');

 });
})();
