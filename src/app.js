import {API} from './api';

$(() => {
    API.getPhotos().then(list);

    const $imageList = $('#imageList');
    const $imageTemplate = $('#imageTemplate').html();

    function list(image) {
        $imageList.html(image.map(generateImageHTML).join('\n'));
    }
    
    function generateImageHTML(image) {
        console.log('Image');
        return $imageTemplate
        .replace('{{id}}', image.id)
        .replace('{{title}}', image.title)
        .replace('{{url}}', image.url)
        .replace('{{thumbnailUrl}}', image.thumbnailUrl);
    }
    $('a[data-imagelightbox="demo"]').imageLightbox();
});

