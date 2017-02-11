/**
 * Copyright (c) 2017 The Peter Lee. All rights reserved.
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

var disqusString = '<div id="disqus_thread"></div>';
var currentUrl = document.location.href;
var isLoad = false;

var commentString = $('.copyright').html();
if (commentString.indexOf('Comments') !== -1) {
    isLoad = true;
} else {
    $('.copyright').append('<h2 style="border-style: solid; color: black">Comments 留言</h2>');
    $('.copyright').append(disqusString);
}

if (!isLoad) {
    (function (){
        var element = document.createElement('script');
        element.type = "text/javascript";
        element.src = chrome.runtime.getURL("js/disqus.js");
        document.body.appendChild(element);
    }());
} else {
    console.warn('The Disqus Comment has been existed!');
}
