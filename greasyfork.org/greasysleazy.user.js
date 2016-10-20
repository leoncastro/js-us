// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         greasy-sleazy-fork
// @version      0.01
// @description  Automatic jump to Sleazyfork when required
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAMFBMVEVHcEwdHR0rKytERETZ2dk9PT2FhYWurq5gYGACAgL///+zs7NycnLh4eGUlJRZWVmvelI3AAAACXRSTlMA/vv+I8d7UKSOO7XsAAACWElEQVR4AZXW8XKzIBAEcPcQZd2De/+3/T5FqU1tMt36B5PhN8lROJxeM69LyQaSsFyWeXqfeckgCY8GOBHI6xszF/PmJG1LzSGa0JiXX6eDZsAORFMHgpjXp/mrpaBLfgPRAbk8zAd9cx7pgFI7AJzMr5UsJNmGQH/6XyT+EAsxxFNexUpWfRS39TEybR/FMuZn8rsA6eAtcJJcrwKspu+iGcFvwe1HzYa6vYhwB5qCHi1IwvdRWq4VvYkdbE4oKUxJLVWQJqolpXkHmUhfAv/n70Iu0pqMsg720dqX1MQh6nYEHiL9FexVFNLES2jrSclcEl4A5r6m4Cna1nNg2LVHSJyjZVrBM6hV13zxl5S+6y6xXan26/4o/JOwKd/Bq3DwHoCYwBE3QrU2HwK8pR/HKbWgpwaSjQEC5BABkraHJEQIk5mSdH6QGhHAELuG9vTtQdlk/f/P8wN6oPkQJIk9JNFBpp8AIj3E5nYT4xsusDShAzYQW2PIK4Z4KTpP69diWPShAeSTAFj28/yUR9HPdeZfxLofuD8Im48jfW8OGHv5QfROUxqvmKCv0/JTYO5t7+gIaHECCFWqck9fwhuYynSkUC1VTxV9qkSFKSBxCCR5zFdj6r9AO5BZiMLxGIlTgFXL6N3tBkhcNSgYY5fQbv27oINRdFT//zSpIk4Bm6eROd+ukD4AARlA8BAarfgSD5GxJ9TQC3gv8HQ5DFH4JvZ08S7GhzhIllHv5y+R9Xv9OWsxd8Kvm8SUIi/z+7eTkjyshVoSPJd1+ph5XbKZIZfl4U3mH2+RPKg5glBiAAAAAElFTkSuQmCC
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
