import $ from 'jquery';
import API from './api';
// require('imports-loader?$=jquery!../node_modules/imagelightbox/dist/imagelightbox.min.js');
// import '../node_modules/imagelightbox/dist/imagelightbox.min.css';

require('imports-loader?jQuery=jquery!../node_modules/simplelightbox/dist/simple-lightbox.jquery.js');
import '../node_modules/simplelightbox/dist/simple-lightbox.css';

$(() => {
    const $imageList = $('#imageList');
    const $imageTemplate = $('#imageTemplate').html();
    
    API.getPhotos().then(setGallery);

    function setGallery(imagesArray) {
        renderImageList(imagesArray);
        initGallary();
    }

    function renderImageList(images) {
        $imageList.html(images.map(generateImageHTML).join('\n'));
    }
    
    function generateImageHTML(image) {
        console.log('Image');
        return $imageTemplate
        // .replace('{{id}}', image.id)
        .replace('{{title}}', image.title)
        .replace('{{url}}', image.url)
        .replace('{{thumbnailUrl}}', image.thumbnailUrl);
    }
    function initGallary() {
        // $('a[data-imagelightbox="demo"]').imageLightbox();
        $imageList.find('a').simpleLightbox({
            fileExt: false
        });
    }
});

