import { searchPhoto } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    sourceAttr: 'href',
  captionDelay: 250,
});

const searchForm = document.querySelector('.search-form');
// console.log(searchForm);
const searchInfo = document.querySelector('.js-search-input');
// console.log(searchInfo);
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader')



searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = form.elements.searchKeyword.value.trim();
    
    if (searchQuery === '') {
        galleryEl.innerHTML = '';
        event.target.reset();
        iziToast.show({
            message: 'Input field can not be empty',
            position: 'topRight',
            timeout: 2000,
            color: 'red',
        });

        return;
    }
galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    

    searchPhoto(searchQuery).then(imagesData => {
        if (imagesData.total === 0) {
            iziToast.error({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight',
              timeout: 2000,
              color: 'red',
            });
        }

        galleryEl.innerHTML = createMarkup(imagesData.hits);
        lightbox.refresh();
    }).catch(error => console.log(error)).finally(() => {
        event.target.reset();
        loaderEl.classList.add('is-hidden');
    });
}

