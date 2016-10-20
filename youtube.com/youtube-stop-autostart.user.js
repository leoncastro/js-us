// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         youtube-stop-autostart
// @version      0.02
// @description  Stop autostart videos on youtube
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAADFGh7EGR3DGR3iKibjKybDGR3KHR/WJCLlLCfiKybiKybOICHfKSXFGh7lLCfAGB3dJyTIGx7SISHjKybDGB3XJCPMHiD////CKsoKAAAAEXRSTlMA78jcyZaSZk/w3K8l56hztI60B6UAAADxSURBVEjH7c/bboMwEATQ8d1gLlkMuP//paVb1UkdKWEfIuUhZxcswYwQ+HidODuXkrV9P3bdeqPrxr63NiXn5ljjM2ee62Ywt57mcIirQARgJQULDCQyINAqGApwJOKQSCTBksBOFj3tzXz9IPo927c9xp3+PaKm0DRG7Hc4WM9GlhQY8ulC5kW+w8F6tt6yUJppC6UOr+ALhRcqlwYH69lQUEVSyAqmiBjo5Ylyu0VjWkQmeFnBI8gKAcOyPRi+1T0MePzXG1/X0QDiJhBx8OfzHiyYc3EV8GcI3k8XrbUx6nCNKGWM0foyeR8iPl7mG4fXdh2Z6jikAAAAAElFTkSuQmCC
// @include      /^(https?:)?\/\/(www\.)?youtube\.com\/*.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
// v0.01: document.querySelector('#movie_player').cueVideoByPlayerVars(document.querySelector('#movie_player').getVideoData());
// v0.02:
function ytStopVideo(i){i&&(i=document.querySelector(i))&&i.cueVideoByPlayerVars(i.getVideoData())}
if(/^\/(channel|user)\//i.exec(location.pathname)) // '/channel/CHANNEL_ID' or '/user/UserName'
 (new MutationObserver(function(m){ytStopVideo('#c4-player')})).observe(document.querySelector('#upsell-video'),{childList:true});
else // '/watch?v=VIDEO_ID'
 ytStopVideo('#movie_player');
