export const createMarkup = images => {
  return images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="gallery-text-container">
                <p class="gallery-text-description"><span>likes</span>${likes}</p>
                <p class="gallery-text-description"><span>views</span>${views}</p>
                <p class="gallery-text-description"><span>comments</span> ${comments}</p>
                <p class="gallery-text-description"><span>downloads</span>${downloads}</p>
            </div>
        </li>`
    )
    .join('');
};