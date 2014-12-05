// ==UserScript==
// @name        Remember me not, Google
// @namespace   https://github.com/fungol/remember-me-not-google
// @match     https://accounts.google.com/ServiceLogin*
// @match     https://accounts.google.com/SmsAuth*
// @match     https://accounts.google.com/SecondFactor*
// @description This disables the "Don't ask for passwords/codes again on this computer" checkbox for both account login and 2FA.
// @grant       none
// @version     1
// ==/UserScript==
 
document.getElementById("PersistentCookie").value ="";
document.getElementById("PersistentCookie").type="hidden";