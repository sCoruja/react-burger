export const baseUrl = 'https://norma.nomoreparties.space/api/'

export const checkResponse = response => {
    if (response.ok)
        return response.json()
    return Promise.reject(`Ошибка ${response.status}`);

}
export const request = (url, options) =>
    fetch(url, options).then(checkResponse)

const parseJwt = token => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
};

export const checkToken = (token) => {
    const exp = parseJwt(token).exp
    const date = parseInt(new Date().getTime() / 1000)
    return exp < date

}