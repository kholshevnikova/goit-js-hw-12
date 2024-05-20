
 export function searchPhoto(searchImage) {
   const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43834463-9b577c35be085229738b1d5bb';

    const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    });
    
    return fetch(`${BASE_URL}?${params}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json();
  });
}
        
    
