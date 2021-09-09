const news= document.querySelector(".product__main-list");
for(var i=0;i<nproducts.length; i++){
    const item=document.createElement("div");
    item.setAttribute("class","product__main-item");
    item.innerHTML=`
    <div class="product__main-item-img">
    <img src="${nproducts[i]["src"]}" alt="">
    </div>
    <div class="product__main-item-title">
    <h2 class="product__main-item-name">${nproducts[i]["name"]}</h2>
    <h3 class="product__main-item-price">${nproducts[i]["price"]}</h3>
    <p class="product__main-item-content">
      ${nproducts[i]["title"]}
    </p>
    </div>
    <div class="product__main-item-btn">
    <button class="btn btn-add">Thêm vào giỏ</button>
    </div>

    `;
    news.appendChild(item);
}