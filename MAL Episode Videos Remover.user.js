// ==UserScript==
// @name         MAL Episode Videos Remover
// @namespace    https://Zachary-Tulman.github.io
// @version      1.0
// @description  Remove Episode Video and MALxJapan from MAL Anime Pages
// @author       Zachary Tulman
// @match        https://myanimelist.net/anime*
// @match        https://myanimelist.net/anime.php?id=*
// @icon         https://i.imgur.com/RkDzXqO.png
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_addStyle
// @grant        GM.getValue
// ==/UserScript==

// not sure why i have to define this kinda wack but ig
// https://github.com/Tampermonkey/tampermonkey/issues/848
var $ = window.jQuery;
var noMxJ = true;

// hide Episode Videos
$("#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > div:contains('Episode Videos')").hide();
$("#episode_video").hide();
$("#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(1) > td > div.border_top").hide();

// hide MALxJapan (to toggle change noMxJ)
if(noMxJ) {
    $("#content > table > tbody > tr > td:nth-child(2) > div.js-scrollfix-bottom-rel > table > tbody > tr:nth-child(2)").hide();
}
