import{a as v,s as m,i as f}from"./assets/vendor-7eea9cc0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const M="https://pixabay.com/api/";async function p(t,e=1,n){try{return(await v.get(M,{params:{key:"45046577-03496d23e82ad22c3baa8c519",image_type:"photo",orientation:"horizontal",safesearch:!0,q:t,page:e,per_page:15}})).data}catch(r){console.error("Fetch error: ",r)}}const g=document.querySelector(".gallery");function w({webformatURL:t,largeImageURL:e,tags:n,likes:r,views:i,comments:s,downloads:a}){return`<li class="gallery-item> 
    <figure class="sign">
        <a href="${e}"><img class="list-img" src="${t}" alt="${n}" title="" width="360" height="200"/></a><span class="title-img">
        <figcaption class="title-img"><ul class="figcaption">
      <li class="figcaption-item">Likes<p class="counter">${r}</p></li>
      <li class="figcaption-item">Views<p class="counter">${i}</p></li>
      <li class="figcaption-item">Comments<p class="counter">${s}</p></li>
      <li class="figcaption-item">Downloads<p class="counter">${a}</p></li>
    </ul></figcaption>
    </figure>
   </li>`}function h(t){return t.map(w).join("")}function E(t){const e=h(t);g.innerHTML=e}function q(t){const e=h(t);g.insertAdjacentHTML("beforeend",e)}const o={btnSubEl:document.querySelector(".btn-search"),formEl:document.querySelector(".form"),input:document.querySelector('[name="text"]'),ul:document.querySelector("ul"),btnLoadMore:document.querySelector(".load-more")};let y=0,c,l=1;o.formEl.addEventListener("submit",async t=>{try{if(t.preventDefault(),L(),c=o.input.value.trim(),l=1,!c)S();else{const e=await p(c,l);y=Math.ceil(e.totalHits/15),e.hits.length===0&&x(),E(e.hits),b(75);const n=new m(".gallery a");e.hits.length<15?(o.btnLoadMore.classList.add("visually-hidden"),d()):o.btnLoadMore.classList.remove("visually-hidden"),o.formEl.addEventListener("click",r=>{r.target.name==="text"&&(o.input.value="")})}}catch(e){console.log(e.message)}u()});o.btnLoadMore.addEventListener("click",async()=>{if(o.btnLoadMore.classList.add("visually-hidden"),L(),l===y)return o.btnLoadMore.classList.add("visually-hidden"),u(),d();l+=1;const t=await p(c,l);q(t.hits),new m(".gallery a").refresh(),u(),b(),o.btnLoadMore.classList.remove("visually-hidden"),t.hits.length<15&&(o.btnLoadMore.classList.add("visually-hidden"),d())});function S(){return console.log("sdsd"),o.ul.innerHTML="",o.btnLoadMore.classList.add("visually-hidden"),f.error({message:"Please fill in the input field",position:"topRight"})}function x(){f.error({message:"Image is not found",position:"topRight"})}function d(){f.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})}function L(){o.btnLoadMore.insertAdjacentHTML("afterend",'<div id="loader" class="loader"></div>')}function u(){document.querySelector(".loader").remove()}function b(t){const e=o.ul.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t||e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map