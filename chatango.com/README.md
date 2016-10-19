# tl;dr How to install ?

[Here](https://greasyfork.org/en/scripts/17180-chatango)

# What is Chatango ?

If you don't know what is Chatango, you don't need this. But, if you are interested...

[Chatango](http://chatango.com) is a web that lets you add free live chat to any webpage.
You do not need to sign up to write in any chat, but if you do it, you can make your own chat room.
You can put your chat box into any almost web page, such that your visitors can chat without leaving your page.
It allows people to be connected in real time, simply through their Web browsers, without downloading anything, or registering.

Chatango was created in 2004 using FLASH technology.
In 2013, the system has been ported to HTML5 partially, adding some new features, but losing some others.


# What is an UserScript ?

UserScripts, are scripts that make on-the-fly changes to specific web pages on the client side, typically to change their appearance or to add or modify functionality.

Process varies depending on your web browser:
- Mozilla Firefox users needs to install [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) extensions.
- Google Chrome users can install [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension.
- Other web browser users need a better web browser. Well, try [this link](http://tampermonkey.net/).

Read their help files to understand how they work and install `chatango.user.js` script from [this link](https://greasyfork.org/en/scripts/17180-chatango).


# What does this script ?

This userscript edits the graphic interface of [chatango.com]() chatrooms,
restoring the new HTML5 groups to the FLASH style.

- Restores zebra stripes on messages
- Minimize line height and size of the user thumbnail
- Displays a popup dialog with basic user info when hover user thumbnail


This is the original style from Flash Legacy version, with a popup dialog, and zebra striped messages:  
![original old style FLASH version](https://greasyfork.org/system/screenshots/screenshots/000/003/458/original/flash-version.png)

This is the original style from new HTML5 version groups, with big white rows, but without profile information:  
![original new style HTML5 version](https://greasyfork.org/system/screenshots/screenshots/000/003/459/original/html5-version.png)

And finally, this is what this userscripts does:  
![custom style userscript version](https://greasyfork.org/system/screenshots/screenshots/000/003/460/original/custom-version.png)
