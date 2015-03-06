var services = [
    {
        ident: 'email',
        name: 'E-mail',
        url: 'mailto:?subject=@TITLE@&body=@URL@%0A',
    },
    {
        ident: 'googleplus',
        name: 'Google+',
        url: 'https://plus.google.com/_/+1/confirm?url=@URL@',
    },
    {
        ident: 'facebook',
        name: 'Facebook',
        url: 'http://www.facebook.com/sharer.php?u=@URL@&t=@TITLE@',
    },
    {
        ident: 'twitter',
        name: 'Twitter',
        url: 'http://twitter.com/share?url=@URL@&text=@TITLE@&via=@TWITTER_USER@',
    },
    {
        ident: 'tumblr',
        name: 'Tumblr',
        url: 'http://www.tumblr.com/share/link?url=@URL@&name=@TITLE@',
    },
    {
        ident: 'linkedin',
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/shareArticle?url=@URL@&title=@TITLE@',
    },
    {
        ident: 'blogger',
        name: 'Blogger',
        url: 'https://www.blogger.com/blog_this.pyra?t&u=@URL@&n=@TITLE@',
    },
];

function cleanShareLoad() {
    var container = document.getElementById('cleanshare');
    if (container == null)
        return;

    image_base_url = '/img';
    image_suffix = '-color.png';
    twitter_user = '';
    enabled_services = 'facebook,googleplus,twitter';

    var attr;
    attr = container.getAttribute('image_base_url');
    if (attr != null)
        image_base_url = attr;
    attr = container.getAttribute('image_suffix');
    if (attr != null)
        image_suffix = attr;
    attr = container.getAttribute('twitter_user');
    if (attr != null)
        twitter_user = attr;
    attr = container.getAttribute('enabled_services');
    if (attr != null)
        enabled_services = attr;

    var html = '';
    var es = enabled_services.split(',');
    for (var i = 0; i < es.length; i++) {
        for (var j = 0; j < services.length; j++) {
            if (services[j].ident != es[i])
                continue;
            var url = services[j].url
                .replace('@URL@', encodeURIComponent(window.location.href))
                .replace('@TITLE@', encodeURIComponent(document.title))
                .replace('@TWITTER_USER@', encodeURIComponent(twitter_user))
            ;
            html += '<a href="' + url + '" target="_blank"><img alt="' + services[j].name + '" src="'
                + image_base_url + '/' + services[j].ident + image_suffix + '"></a>';
            break;
        }
    }

    container.innerHTML = html;
}

if (window.attachEvent)
    window.attachEvent('onload', cleanShareLoad);
else if (window.addEventListener)
    window.addEventListener('load', cleanShareLoad, false);
else
    document.addEventListener('load', cleanShareLoad, false);
