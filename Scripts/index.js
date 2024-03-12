let bagItems ;
onload();

function onload() {
  let bagItemElement =localStorage.getItem('bagItems');
  bagItems = bagItemElement ? JSON.parse(bagItemElement):[];
  DispalyItemsOnHomePage();
  displaybagItemCount();
}

function AddToBag(itemID) {
  bagItems.push(itemID);
  localStorage.setItem('bagItems', JSON.stringify(bagItems))
  displaybagItemCount();
}

function displaybagItemCount() {
  let bagItemsCountCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemsCountCountElement.innerText = bagItems.length;
    bagItemsCountCountElement.style.visibility = "visible";
  } else {
    bagItemsCountCountElement.style.visibility = "hidden";
  }
}
function DispalyItemsOnHomePage() {
  let itemContainerElement = document.querySelector(".items-Container");
  if(!itemContainerElement){
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
    <div class="item-container">
        <img class="itemImage" src=" ${item.image}" alt="earing">
        <div class="rating">${item.rating.stars} ⭐ |${item.rating.count}</div>
        <div class="companyName">${item.company}</div>
        <div class="itemName">${item.item_name}</div>
        <div class="pricing">
            <span class="CurrentPrice">RS ${item.current_price}</span>
            <span class="Orignalprice">Rs ${item.original_price}</span>
            <span class="Discount">(${item.discount_percentage}% Off)</span>
        </div>
        <button class="AddToBag" onclick="AddToBag(${item.id})">Add to bag</button>
    </div>
    `;
  });
  itemContainerElement.innerHTML = innerHTML;
}
