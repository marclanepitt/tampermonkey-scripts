// ==UserScript==
// @name         Auto-Login Jenkins
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadUrl  https://github.com/marclanepitt/tampermonkey-scripts/raw/master/Auto-Login%20Jenkins.user.js
// @description  Automatically click the Jenkins login button
// @author       Marc Pittinsky
// @match        https://jenkins-consulting.yext.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const loginLink = document.querySelector('.login > a');
    if (loginLink && loginLink.href.includes('from=%2FsecurityRealm%2FloggedOut')) {
        loginLink.href = 'https://jenkins-consulting.yext.com';
    }
    loginLink && loginLink.click();
})();
