let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.1':
        APIURL = 'http://localhost:4000';
        break;
    case 'nag-postmama-client.herokuapp.com':
        APIURL = "https://nag-postmama.herokuapp.com";
}

export default APIURL;