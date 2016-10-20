// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         youtube-nsfw
// @version      0.01
// @description  NSFW Youtube
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAADFGh7EGR3DGR3iKibjKybDGR3KHR/WJCLlLCfiKybiKybOICHfKSXFGh7lLCfAGB3dJyTIGx7SISHjKybDGB3XJCPMHiD////CKsoKAAAAEXRSTlMA78jcyZaSZk/w3K8l56hztI60B6UAAADxSURBVEjH7c/bboMwEATQ8d1gLlkMuP//paVb1UkdKWEfIuUhZxcswYwQ+HidODuXkrV9P3bdeqPrxr63NiXn5ljjM2ee62Ywt57mcIirQARgJQULDCQyINAqGApwJOKQSCTBksBOFj3tzXz9IPo927c9xp3+PaKm0DRG7Hc4WM9GlhQY8ulC5kW+w8F6tt6yUJppC6UOr+ALhRcqlwYH69lQUEVSyAqmiBjo5Ylyu0VjWkQmeFnBI8gKAcOyPRi+1T0MePzXG1/X0QDiJhBx8OfzHiyYc3EV8GcI3k8XrbUx6nCNKGWM0foyeR8iPl7mG4fXdh2Z6jikAAAAAElFTkSuQmCC
// @include      /^(?:https?:)?\/\/(www\.)?youtube\.com\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
if(document.getElementById('watch7-player-age-gate-content'))
{
 document.getElementById('player-unavailable').classList.add('hid');
 var p=document.getElementById('player-api');
 p.classList.remove('off-screen-target');
 p.innerHTML='<iframe class="player-width player-height" src="//www.youtube.com/embed/'+document.querySelector('meta[itemprop="videoId"]').getAttribute('content')+'?autoplay=1"/>';
}
