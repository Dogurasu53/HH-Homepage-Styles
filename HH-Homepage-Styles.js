// ==UserScript==
// @name            HH Homepage Styles
// @description     Allows customization on the homepage so you can change beyond what the game allows you to
// @version         0.1.3
// @match           https://*.hentaiheroes.com/*
// @match           https://nutaku.haremheroes.com/*
// @match           https://*.gayharem.com/*
// @match           https://*.comixharem.com/*
// @run-at          document-body
// @grant           none
// @author          -MM-, Dogurasu53, Rarum, 45026831(numbers)
// ==/UserScript==

/*  ===========
     CHANGELOG
    =========== */
// 0.1.3: allows the player to set to "true" whatever features they want to use
// 0.1.2: now you can also change the main town background image (still will have to wait to see what happens during events, especially orgy days)
// 0.1.1: changed the original images on the source code to actual template images
// 0.1.0: uploaded the script to github
// 0.0.3: optimized the code so it's easier for new users to use and so it's incredibly easy to add any amount of images to cycle randomly
// 0.0.2: made it possible to cycle between 2 possible images instead of a static one, not too hard setting up for more than 2
// 0.0.1: Allowed to player to change the girl on the home page of the game to any image you wish

(() => {

    /****************************************************/
    /* Images You Want to Change Below - For Player Use */
    /****************************************************/

    var hpWaifu = true; ///////Changes the Home Page Waifu Pose to Any Images You Want when Set to "true"
    var hpBackground = false; //Changes the Town Background when Set to "true"

    // Change the urls of the images below to any images you want, doesn't need to be 1 or 2, any amount will do, they cycle randomly when refreshing the page
    var homePageWaifu = [
        "https://cdn.discordapp.com/attachments/337381881769361409/957115058025017354/StandingWomanImageTemplate.png",
        "https://cdn.discordapp.com/attachments/337381881769361409/957115984261550160/SittingWomanImageTemplate.png",
    ];
     
    // Change the urls of the images below to any background images you want, doesn't need to be 1 or 2, any amount will do, they cycle randomly when refreshing the page
    var background = [
        "https://cdn.discordapp.com/attachments/337381881769361409/957376352389066773/HomePageTownTemplate.png",
    ];

    /********************************************************************************/
    /* Essential Code - Do Not Change Anything Below This Unless You're a Developer */
    /********************************************************************************/

    var sheet = (function() {var style = document.createElement('style');document.head.appendChild(style);return style.sheet;})();
    var r = Math.floor(Math.random() * homePageWaifu.length);

    if(hpWaifu==true){
        sheet.insertRule('div.waifu-container img.avatar {content: url(' + homePageWaifu[r] + '); object-fit: cover;}');
    }

    if(hpBackground==true){
        r = Math.floor(Math.random() * background.length);
        if (['battle', 'club', 'arena', 'team', 'champion', 'hero'].some(page => location.pathname.includes(page))) {return}
        sheet.insertRule('div#bg_all div.fixed_scaled img {content: url(' + background[r] + '); object-fit: cover;}');
    }
})();
