import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(o){const s="https://pixabay.com/api/",n="43834463-9b577c35be085229738b1d5bb",r=new URLSearchParams({key:n,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const m=o=>o.map(({webformatURL:s,largeImageURL:n,tags:r,likes:e,views:t,comments:a,downloads:u})=>`
      <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img class="gallery-img" src="${s}" alt="${r}" />
            </a>
            <div class="gallery-text-container">
                <p class="gallery-text-description"><span>likes</span>${e}</p>
                <p class="gallery-text-description"><span>views</span>${t}</p>
                <p class="gallery-text-description"><span>comments</span> ${a}</p>
                <p class="gallery-text-description"><span>downloads</span>${u}</p>
            </div>
        </li>`).join("");let f=new p(".gallery a",{captionsData:"alt",sourceAttr:"href",captionDelay:250});const h=document.querySelector(".search-form");document.querySelector(".js-search-input");const i=document.querySelector(".gallery"),l=document.querySelector(".loader");h.addEventListener("submit",y);function y(o){o.preventDefault();const n=o.currentTarget.elements.searchKeyword.value.trim();if(n===""){i.innerHTML="",o.target.reset(),c.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}i.innerHTML="",l.classList.remove("is-hidden"),d(n).then(r=>{r.total===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),i.innerHTML=m(r.hits),f.refresh()}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),l.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
