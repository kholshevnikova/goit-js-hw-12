import{a as m,S as v,i as p}from"./assets/vendor-9a8cfc74.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function g(o,t){const r="43834463-9b577c35be085229738b1d5bb";m.defaults.baseURL="https://pixabay.com/api";const a={key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};return m.get("/",{params:{...a}})}const y=o=>o.map(({webformatURL:t,largeImageURL:r,tags:a,likes:e,views:s,comments:i,downloads:b})=>`
      <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-img" src="${t}" alt="${a}" />
            </a>
            <div class="gallery-text-container">
                <p class="gallery-text-description"><span>likes</span>${e}</p>
                <p class="gallery-text-description"><span>views</span>${s}</p>
                <p class="gallery-text-description"><span>comments</span> ${i}</p>
                <p class="gallery-text-description"><span>downloads</span>${b}</p>
            </div>
        </li>`).join("");let f=new v(".gallery a",{captionsData:"alt",sourceAttr:"href",captionDelay:250});const w=document.querySelector(".search-form");document.querySelector(".js-search-input");const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),d=document.querySelector(".load-more");let l=1,u="",S=15,h=0;w.addEventListener("submit",P);async function P(o){if(o.preventDefault(),u=o.currentTarget.elements.searchKeyword.value.trim(),u===""){n.innerHTML="",o.target.reset(),p.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}n.innerHTML="",c.classList.remove("is-hidden"),d.classList.add("is-hidden"),l=1;try{const{data:r}=await g(u,l);if(r.total===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}),c.classList.add("is-hidden");return}n.innerHTML=y(r.hits),f.refresh(),h=Math.ceil(r.total/S),h>1&&d.classList.remove("is-hidden")}catch(r){console.log(r)}o.target.reset(),c.classList.add("is-hidden")}const q=()=>{const r=n.querySelector(".gallery-item:last-child").getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})},L=async o=>{l+=1,c.classList.remove("is-hidden");try{const{data:t}=await g(u,l);n.insertAdjacentHTML("beforeend",y(t.hits)),q(),f.refresh(),l>=h&&(d.classList.add("is-hidden"),p.show({message:"We are sorry, but you've reached the end of search results.",position:"topRight",timeout:2e3,color:"blue"}),d.removeEventListener("click",L))}catch(t){console.log(t)}c.classList.add("is-hidden")};d.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map