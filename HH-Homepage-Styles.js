// ==UserScript==
// @name            HH Homepage Styles
// @description     Allows customization on the homepage so you can change beyond what the game allows you to
// @version         0.1.1
// @match           https://*.hentaiheroes.com/*
// @match           https://nutaku.haremheroes.com/*
// @match           https://*.gayharem.com/*
// @match           https://*.comixharem.com/*
// @run-at          document-body
// @grant           none
// @author          -MM-, Dogurasu53, Rarum
// ==/UserScript==

/*  ===========
     CHANGELOG
    =========== */
// 0.1.1: changed the original images on the source code to actual template images
// 0.1.0: uploaded the script to github
// 0.0.3: optimized the code so it's easier for new users to use and so it's incredibly easy to add any amount of images to cycle randomly
// 0.0.2: made it possible to cycle between 2 possible images instead of a static one, not too hard setting up for more than 2
// 0.0.1: Allowed to player to change the girl on the home page of the game to any image you wish

(() => {
    var sheetMM = (function() {var style = document.createElement('style');document.head.appendChild(style);return style.sheet;})();
    
    // Change the urls of the images below to any images you want, doesn't need to be 2, any amount will do, they cycle randomly when refreshing the page
    var pictures = [
        "https://cdn.discordapp.com/attachments/337381881769361409/957115058025017354/StandingWomanImageTemplate.png",
        "https://cdn.discordapp.com/attachments/337381881769361409/957115984261550160/SittingWomanImageTemplate.png",
    ];
    var r = Math.floor(Math.random() * pictures.length);
    sheetMM.insertRule('div.waifu-container img.avatar {content: url(' + pictures[r] + '); object-fit: cover;}');
})();
