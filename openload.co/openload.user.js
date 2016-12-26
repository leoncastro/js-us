// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         openload
// @version      0.06.1
// @description  Remove anti-adblock, ads, popups and timer waits, and show direct download link
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA/FBMVEUAAAAeP2MAmNkAoN8hNlgSSWwXLUgEITELKT8OMEkAn94Ant4AmtsAldQBW4MFh8YAktQBicxjT5sAnt4AX4lEcbUTeLBgVqBcXKMAnNxMS4pKbbEuQGwAmtoAY44xebwAk9QGjM1jT5tcTZUPM01jT5s7OGZfWKEAaJUAod8Ak9VYYqhSZKgVg8Ujf8AKSm4Agr5mPZRmPZRmPZRlR5gAod8AldNXXKEAltQAjMcAmNVWZKpeWaJUZqtKbbE+dbg+dLdEcLM7d7omgMExersAk9RgVqA7aKUAod8Ak9UAn99lR5gAm9wJhshRaa0ue74mgMEAjdBmPZQ7d7qePASIAAAASHRSTlMAOP75GiksAgcPxb3QS0Nh0+T+0hj+Yv796m3PSLNc0eF0vYgg7l/DOPDs/ejo11dV+LpM8et8qaduicHV0L7Jrer75omU6GL8xLQIAAABaklEQVR42u1S2XaCMBQMaxJAAcUFRcG673Zzb9VWW4Pi0v7/vzSCcDz9hfY+3pnMmZkb8IcG8YIoVNDtQhRFPlyg+LQgy3JhE4fBAjLr5evrbFS2fAqeJDl3v9+zrDbwGShtv6VSh0M7O89hipearsuZTotliaMiAFH6/fidWnU67WymShmx5pZLpjHAaY2QggiQ2j0dbQrg3DyTeHoE8nYrNXzpuOZseKjq3sm2Aiv1xO4BcNvnIrp66wtwoHtez4KB+1p1dw+oABPFgwON4v0wn3i3+6KEQiXCY9rZ0yMcVAKCJIaFUPysFxGGNwqBh/A9Oeuqoa6ZWw80hRykoDjRSzDePdnMTQragysVDWSoCiGtEr4QjotPHvG1ut8DnnKuayYVxWRJa4ghrZY2ucrnXzrZTKKMAcRD0w1u4UwQBJeue9dbfJR56F9zLCmKIo0bYTxmuaAKs5GFwvyGIAgG/PVB6Ov/ieYHpLEydStkqm4AAAAASUVORK5CYII=
// @include      http://openload.co
// @include      /^(https?:)?\/\/openload\.co\/*.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function(){
 //
 // @run-at document-start
 //
 window.adblock=false;
 window.adblock2=false;
 window.turnoff=true;
 window.open=function(){};
 //
 // @run-at document-end
 //
 function onready(fn){if(document.readyState!='loading')fn();else document.addEventListener('DOMContentLoaded',fn);}

 onready(function(){
  if( $('#realdl>a') )
  {
   $('#btnView').hide();
   $('#btnDl').hide();
   $('.dlButtonContainer').show();
   $('h3.dlfile.h-method').hide();
   $('.col-md-4.col-centered-sm *').remove();
   $('#mgiframe,#main>div[id*="Composite"]').remove();
   $('#downloadTimer').hide();
   $('#realdl').show();
   var tmrstreamurl = setInterval(function(){
    if( $("#streamurl").text() != "HERE IS THE LINK" )
    {
     $('#realdl a').attr("href", "/stream/" + $("#streamurl").text());
     $("#videooverlay").click();
     clearInterval(tmrstreamurl);
    }
   },100);
  }
  window.onclick=function(){};
  document.onclick=function(){};
  document.body.onclick=function(){};
 });
})();
