export const baseUrl = 'https://norma.nomoreparties.space/api/'

export const checkResponse = response => {
    if (response.ok)
        return response.json()
    return Promise.reject(`Ошибка ${response.status}`);

}
export const request = (url, options) =>
    fetch(url, options).then(checkResponse)
