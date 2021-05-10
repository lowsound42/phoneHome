function emailCall(ip, data) {
    (async () => {
        const rawResponse = await fetch(
            'https://homepage-mcquack.herokuapp.com/send',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ip: ip,
                    data: data.text
                })
            }
        );
        const content = await rawResponse.json();
    })();
}

function httpGetAsync(url, data) {
    var xmlHttp = new XMLHttpRequest();
    let ipResult;
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            ipResult = xmlHttp.responseText;
        changeLight(ipResult, data);
        emailCall(ipResult, data);
    };
    xmlHttp.open('GET', url, true); // true for asynchronous
    xmlHttp.send(null);
}

function changeLight(ip, colour) {
    let data = {
        text: colour,
        ip: ip
    };
    fetch('/light', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data, ip)
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

var url =
    'https://ipgeolocation.abstractapi.com/v1/?api_key=35d5c77d03dd4152b8b9b251419cf2f6';

function talk() {
    httpGetAsync(url, 'green');
}

function khaana() {
    httpGetAsync(url, 'red');
}

function night() {
    httpGetAsync(url, 'blue');
}
