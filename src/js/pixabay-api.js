import axios from "axios"; 

 export function searchPhoto(searchImage) {
  //  const BASE_URL = 'https://pixabay.com/api/';
   const API_KEY = '43834463-9b577c35be085229738b1d5bb';
   
   axios.defaults.baseURL = 'https://pixabay.com/api';

    const params = {
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    };
    
   return axios.get(`/`, {
     params: {
       ...params,
     },
   });
};
        
    
