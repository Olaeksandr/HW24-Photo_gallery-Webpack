export const API = {};

const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos';

export default {
    getPhotos: () => {
    return fetch(PHOTO_URL)
    .then(resp =>resp.json());
}
};