var services = [
    {
        name: 'Google+',
        url: 'https://plus.google.com/_/+1/confirm?url=@URL@',
    },
    {
        name: 'Facebook',
        url: 'http://www.facebook.com/sharer.php?u=@URL@&t=@TITLE@',
    },
];

function cleanShareLoad() {
    var container = document.getElementById('cleanshare');
    if (container == null)
        return;

    var html = '';
    for (var i = 0; i < services.length; i++) {
        var url = services[i].url
            .replace('@URL@', encodeURIComponent(window.location.href))
            .replace('@TITLE@', encodeURIComponent(document.title));
        html += '<a href="' + url + '">' + services[i].name + '</a>';
    }

    container.innerHTML = html;
}

if (window.attachEvent)
    window.attachEvent('onload', cleanShareLoad);
else if (window.addEventListener)
    window.addEventListener('load', cleanShareLoad, false);
else
    document.addEventListener('load', cleanShareLoad, false);
