/**
 * Copyright (c) 2017 The Peter Lee. All rights reserved.
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */

var pageIdentifier = document.location.pathname.replace('/', '');
pageIdentifier = document.location.pathname.replace('.html', '');
var identifierArray = pageIdentifier.split('-');

var disqus_config = function () {
    // Replace PAGE_URL with your page's canonical URL variable
    this.page.url = document.location.href;

    // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    this.page.identifier = identifierArray[2];
};

(function() {
    // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = '//househelper.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
