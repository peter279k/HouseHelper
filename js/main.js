/**
 * Copyright (c) 2017 The Peter Lee. All rights reserved.
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

/*
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: 'js/jquery.min.js'
    }, function() {
        chrome.tabs.executeScript({
            file: 'js/embed.js'
        });
    });
});

chrome.tabs.onUpdated.addListener (function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript({
            file: 'js/jquery.min.js'
        }, function () {
            chrome.tabs.executeScript({
                file: 'js/embed.js'
            });
        }, function() {
            chrome.tabs.executeScript({
                file: 'js/disqus.js'
            });
        });
    }
});
*/
