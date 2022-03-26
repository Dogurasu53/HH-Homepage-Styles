// ==UserScript==
// @name            HH Homepage Styles
// @description     Allows customization on the homepage so you can change beyond what the game allows you to
// @version         0.1.0
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
// 0.1.0: uploaded the script to github
// 0.0.3: optimized the code so it's easier for new users to use and so it's incredibly easy to add any amount of images to cycle randomly
// 0.0.2: made it possible to cycle between 2 possible images instead of a static one, not too hard setting up for more than 2
// 0.0.1: Allowed to player to change the girl on the home page of the game to any image you wish

(() => {
    var sheetMM = (function() {var style = document.createElement('style');document.head.appendChild(style);return style.sheet;})();

    var pictures = [
        "https://cdn.discordapp.com/attachments/337381881769361409/956528182805270568/ava0.png",
        "https://cdn.discordapp.com/attachments/337381881769361409/956615463675232287/ava1.png",
    ];
    var r = Math.floor(Math.random() * pictures.length);
    sheetMM.insertRule('div.waifu-container img.avatar {content: url(' + pictures[r] + '); object-fit: cover;}');
})();
