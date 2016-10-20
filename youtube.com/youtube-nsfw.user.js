// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         youtube-nsfw
// @version      0.01
// @description  NSFW Youtube
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAVFBMVEUAAADCGR3RISHDGR3ZJiPNHyDiKybiKibiKibZJiPZJiTOICHlLSfhKiXXJCLJHB/DGR7OHyH//v7jcHDzwcHgY2Puo6P98fHaPDvog4PdU1L42tqzibIxAAAADXRSTlMA6VnGpZHiw/HVciUJoviQpQAAAY1JREFUeNrtletuwyAMhR0CubZQCLm//3sOn4QmUVW1SNu/fUbG9s6pUVVp9M+fcRONkrIs66Ioqup+oqrCqC5LKVUjblHfQPOZqiEg718jWS/uCYhgKFMMJVF7T6LFi3TKmxT0+hI41yr2iuRV9iZwOEkqtd6nODGOcppCEwe6pJqvF6Z57TTrltU5N0ACW02FfqX3QdXBOI7dMrhBRwqqYNzO4ntM/TrPm2F2PfcOK5Do8slQ4S/dVg5u2nOE7IsBwBAvPx4a0naLw4AOSsvaufP8riijp350O+cNeuGxhwKBDZt9GAbvfMho9w2L85PuR6911BEnVDY+ycKwlXi95e8KoueT9hMMljnKdeW8uBljPmQPoMLc8gYu/BgSb+AxIGMPFr+cvbh8v8zjympgKAsphjnKDoZw82/JT2EUCCmj2hgWvsVOkz51NeUmiZxkmkGSSjMoEsY8EkJQaz7wuHQtUf5IICcikWIQFFDf6xUBkX0nzxqKtEIpmQcycNIEeC4V/qE8udE/v8oPdzBa1SspDIEAAAAASUVORK5CYII=
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
