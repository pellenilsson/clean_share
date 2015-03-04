var services = [
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
];

function cleanShareLoad() {
    var container = document.getElementById('cleanshare');
    if (container == null)
        return;

    image_base_url = '/img';
    image_suffix = '-color.png';

    var attr;
    attr = container.getAttribute('image_base_url');
    if( attr != null )
        image_base_url = attr;
    attr = container.getAttribute('image_suffix');
    if( attr != null )
        image_suffix = attr;

    var html = '';
    for (var i = 0; i < services.length; i++) {
        var url = services[i].url
            .replace('@URL@', encodeURIComponent(window.location.href))
            .replace('@TITLE@', encodeURIComponent(document.title));
        html += '<a href="' + url + '"><img alt="' + services[i].name + '" src="' + image_base_url + '/' + services[i].ident + image_suffix + '"></a>';
    }

    container.innerHTML = html;
}

if (window.attachEvent)
    window.attachEvent('onload', cleanShareLoad);
else if (window.addEventListener)
    window.addEventListener('load', cleanShareLoad, false);
else
    document.addEventListener('load', cleanShareLoad, false);
