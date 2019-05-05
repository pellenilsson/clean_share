var services = [
    {
        ident: 'email',
        name: 'E-mail',
        url: 'mailto:?subject=@TITLE@&body=@URL@%0A'
    },
    {
        ident: 'facebook',
        name: 'Facebook',
        url: 'http://www.facebook.com/sharer.php?u=@URL@&t=@TITLE@'
    },
    {
        ident: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/share?url=@URL@&text=@TITLE@&via=@TWITTER_USER@'
    },
    {
        ident: 'tumblr',
        name: 'Tumblr',
        url: 'http://www.tumblr.com/share/link?url=@URL@&name=@TITLE@'
    },
    {
        ident: 'linkedin',
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/shareArticle?url=@URL@&title=@TITLE@'
    },
    {
        ident: 'blogger',
        name: 'Blogger',
        url: 'https://www.blogger.com/blog_this.pyra?t&u=@URL@&n=@TITLE@'
    }
];

function cleanShareLoad() {
    "use strict";
    var container, image_base_url, image_suffix, twitter_user, enabled_services, attr, html, es, i, j, url;

    container = document.getElementById('cleanshare');

    if (container === null) {
        return;
    }

    image_base_url = '/img';
    image_suffix = '-color.png';
    twitter_user = '';
    enabled_services = 'facebook,twitter';

    attr = container.getAttribute('data-image-base-url');
    if (attr !== null) {
        image_base_url = attr;
    }
    attr = container.getAttribute('data-image-suffix');
    if (attr !== null) {
        image_suffix = attr;
    }
    attr = container.getAttribute('data-twitter-user');
    if (attr !== null) {
        twitter_user = attr;
    }
    attr = container.getAttribute('data-enabled-services');
    if (attr !== null) {
        enabled_services = attr;
    }

    html = '';
    es = enabled_services.split(',');
    for (i = 0; i < es.length; i++) {
        for (j = 0; j < services.length; j++) {
            if (services[j].ident === es[i]) {
                url = services[j].url
                    .replace('@URL@', encodeURIComponent(window.location.href))
                    .replace('@TITLE@', encodeURIComponent(document.title))
                    .replace('@TWITTER_USER@', encodeURIComponent(twitter_user));
                html += '<a href="' + url + '" target="_blank"><img alt="' + services[j].name + '" src="'
                    + image_base_url + '/' + services[j].ident + image_suffix + '"></a>';
            }
        }
    }

    container.innerHTML = html;
}

if (window.attachEvent) {
    window.attachEvent('onload', cleanShareLoad);
} else if (window.addEventListener) {
    window.addEventListener('load', cleanShareLoad, false);
} else {
    document.addEventListener('load', cleanShareLoad, false);
}
