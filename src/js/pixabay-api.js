import axios from "axios";


 export function searchPhoto(searchImage, newPage) {
  //  const BASE_URL = 'https://pixabay.com/api/';
   const API_KEY = '43834463-9b577c35be085229738b1d5bb';
  //  const picsCurrentPage = 1;
   axios.defaults.baseURL = 'https://pixabay.com/api';

    const params = {
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
      safesearch: 'true',
      per_page: 15,
      page: newPage,
      
    };
    
   return axios.get(`/`, {
     params: {
       ...params,
     },
   });
};
        
    
