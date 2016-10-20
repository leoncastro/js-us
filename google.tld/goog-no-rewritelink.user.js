// ==UserScript==
// @author       @leoncastro
// @namespace    https://github.com/leoncastro
// @name         goog-no-rewritelink
// @version      0.01
// @description  Remove link redirection on Google search results.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAAD9/v39/f3+/v7////9/f3+/v7////////+/v7+/v7////rQzU1qFNChfT7vAfj8PL96ODvaln3ta+54cVXtXb52HiKzZ3zj4aavvpmnPZ7sDk9kb+6th6/xtYcAAAAC3RSTlMA8dOLGbFVOnZrXyxZDnAAAAISSURBVFjDvZfrcoMgFITlpjbUiKjRpOn7v2admGblEASHab9/MbPLuSlQhJClUJwxrRnjSpSyOEQluCZwUaWqZQ2161HLFLlgOggTUYsPIqewj/3luY7Cd4I4MZ0AO4X0Qici3uuVduj62drPBWvnvtMOKqiH+qEF1vVQ+/puhhLMHXEI5t9/BujDdThtlkfwHnYThNOLiu0vD+DAZAF4RA/sZqI283tED15TLVlQbxc8PZKgHeho68lQzHQiaQDWkesNvYXeC6FGAl7LwQw9qJ0WdERPQANJIyr95OJ1O061LWHbYv1UxCaDS9u2FsWOgBzkK4AHSCANWZS/NWpXEEASZSGQwQreuLQiKGpw0UdQBY8YnN9yRRUZarjSpRjccg3Or/8LTQ30PxvkpsDyDfw2HuvCsUEynoHyR/nL6CBXb5BEUZI2NM2kg9w8g5K8zt/NgolmcDZ4nZ0qfi3ynRCufg2dT9qiXxliAaAEzkd1VQcdzM3PoNp+1k0Dhl09MnA3lgEGfh0G6BFATba2sQGjE4SZmtGvAJPYXJEELCbzfDxMjwd3GoDA9k6SgMkCft2hRwA4YMAhyIgE3FMSjziAVY8WIIlEh0kjgcAxz4wBLZmPMnzQnILLm50Dt3K7DvzJCB+WARtGb/X04/prfMZxnYVpgBr6nAtH5pWnzL10ZV77ci+emVffP7h8Z1//fwDgl5eWyVsWsAAAAABJRU5ErkJggg==
// @include      /(https?:)?\/\/(www\.)?google\.com\/.*/
// @include      /(https?:)?\/\/(www\.)?google\.((com)|((com?\.)?[\w]{2}))\/.*/
// @compatible   firefox+greasemonkey
// @compatible   chrome+tampermonkey
// @grant        none
// @run-at       document-end
// ==/UserScript==
//
setInterval(function(){Array.slice(document.querySelectorAll('a[onmousedown*="return rwt"]')).forEach(function(a){a.removeAttribute('onmousedown')})},500);
