(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class p{constructor(t){this.parent=t}getHTML(t){return`
            <div class="card" style="width: 300px;">
                <img class="card-img-top" src="${t.src}" alt="картинка">
                <div class="card-body">
                    <h5 class="card-title">${t.title}</h5>
                    <p class="card-text">${t.text}</p>
                    <button class="btn btn-primary" id="click-card-${t.id}" data-id="${t.id}">Нажми на меня</button>
                </div>
            </div>
        `}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}addListeners(t,e){document.getElementById(`click-card-${t.id}`).addEventListener("click",e)}render(t,e){const r=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",r),this.addListeners(t,e)}}class u{constructor(t){this.parent=t}getHTML(t){return`
                <div class="card mb-3" style="width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${t.src}" class="img-fluid" alt="картинка">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${t.title}</h5>
                                <p class="card-text">${t.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `}render(t){const e=this.getHTML(t);this.parent.insertAdjacentHTML("beforeend",e)}}class h{constructor(t){this.parent=t}addListeners(t){document.getElementById("back-button").addEventListener("click",t)}getHTML(){return`
                <button id="back-button" class="btn btn-primary" type="button">Назад</button>
            `}render(t){const e=this.getHTML();this.parent.insertAdjacentHTML("beforeend",e),this.addListeners(t)}}class g{get(t,e){const r=new XMLHttpRequest;r.open("GET",t),r.send(),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,e)}}post(t,e,r){const s=new XMLHttpRequest;s.open("POST",t),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(e)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,r)}}patch(t,e,r){const s=new XMLHttpRequest;s.open("PATCH",t),s.setRequestHeader("Content-Type","application/json"),s.send(JSON.stringify(e)),s.onreadystatechange=()=>{s.readyState===4&&this._handleResponse(s,r)}}delete(t,e){const r=new XMLHttpRequest;r.open("DELETE",t),r.send(),r.onreadystatechange=()=>{r.readyState===4&&this._handleResponse(r,e)}}_handleResponse(t,e){try{const r=t.responseText?JSON.parse(t.responseText):null;e(r,t.status)}catch(r){console.error("Ошибка парсинга JSON:",r),e(null,t.status)}}}const i=new g;class m{constructor(){this.baseUrl="http://localhost:3000"}getStocks(){return`${this.baseUrl}/stocks`}getStockById(t){return`${this.baseUrl}/stocks/${t}`}createStock(){return`${this.baseUrl}/stocks`}removeStockById(){return`${this.baseUrl}/stocks/${id}`}updateStockById(){return`${this.baseUrl}/stocks/${id}`}}const d=new m;class o{constructor(t,e){this.parent=t,this.id=e}getData(){i.get(d.getStockById(this.id),t=>{this.renderData(t)})}get pageRoot(){return document.getElementById("product-page")}getHTML(){return`
                <div id="product-page"></div>
            `}clickBack(){new l(this.parent).render()}clickCard(t){const e=t.target.dataset.id;new o(this.parent,e).render()}renderData(t){new u(this.pageRoot).render(t)}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),new h(this.pageRoot).render(this.clickBack.bind(this)),this.getData()}}class l{constructor(t){this.parent=t}get pageRoot(){return document.getElementById("main-page")}getHTML(){return`
                <div id="main-page" class="d-flex flex-wrap justify-content-center align-items-center min-vh-100">
                </div>
            `}getData(){i.get(d.getStocks(),t=>{this.renderData(t)})}renderData(t){t.forEach(e=>{new p(this.pageRoot).render(e,this.clickCard.bind(this))})}clickCard(t){const e=t.target.dataset.id,r=t.target.dataset.title;new o(this.parent,e,r).render()}render(){this.parent.innerHTML="";const t=this.getHTML();this.parent.insertAdjacentHTML("beforeend",t),this.getData()}}const f=document.getElementById("root"),y=new l(f);y.render();
