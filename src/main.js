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
const loaderEl = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-more');
// console.log(loadBtn);

let picsCurrentPage = 1;
let searchQuery = '';
let perPage = 15;
let totalPages = 0;




searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    searchQuery = form.elements.searchKeyword.value.trim();
    
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
    loadBtn.classList.add('is-hidden'); //new
    picsCurrentPage = 1;
    
    try {
        const { data } = await searchPhoto(searchQuery, picsCurrentPage)
        // console.log(data);
        if (data.total === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                timeout: 2000,
                color: 'red',
            });
            loaderEl.classList.add('is-hidden');
            return;
        }

        galleryEl.innerHTML = createMarkup(data.hits);
        lightbox.refresh();
        
        
        

        totalPages = Math.ceil(data.total / perPage);
        // console.log(totalPages);

        if (totalPages > 1) {
         loadBtn.classList.remove('is-hidden');   
        }
        
        
    
    } catch (error) {
        console.log(error);
    }
 

    event.target.reset();
    loaderEl.classList.add('is-hidden');
    

}

const smoothScrollOnLoadMore = () => {
    const lastArticle = galleryEl.querySelector('.gallery-item:last-child');
    
  const newsArticleHeight = lastArticle.getBoundingClientRect().height;
  const scrollHeight = newsArticleHeight * 2;
//   console.log(scrollHeight);

  window.scrollBy({
    top: scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};

const onLoadMorePressed = async (event) => {
    picsCurrentPage += 1;
    loaderEl.classList.remove('is-hidden');
    try {
        //  console.log(picsCurrentPage);
      const { data } = await searchPhoto(searchQuery, picsCurrentPage);
        galleryEl.insertAdjacentHTML('beforeend', createMarkup(data.hits)); 
        smoothScrollOnLoadMore();
        lightbox.refresh();
    if (picsCurrentPage >= totalPages) {
        
        loadBtn.classList.add('is-hidden');
        iziToast.show({
                message: "We are sorry, but you've reached the end of search results.",
                position: 'topRight',
                timeout: 2000,
                color: 'blue',
            });
        loadBtn.removeEventListener('click', onLoadMorePressed);

        
    }  
    } catch (error) {
       console.log(error); 
    }
    loaderEl.classList.add('is-hidden');
}

loadBtn.addEventListener('click', onLoadMorePressed); 








