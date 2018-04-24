import 'whatwg-fetch';
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl();

export function getUsers() {
    return get('users');
}

export function deleteUser(user) {
    return del(`users/${user}`);
}

function get(url) {
    return fetch(baseUrl + '/' + url).then(onSucess, onError);
}

function del(url) {
    const request = new Request(baseUrl + '/' + url, {
        method: 'DELETE'
    });
    return fetch(request).then(onSucess, onError);
}

function onSucess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
