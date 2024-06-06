// mens data loader
let itemContainer = document.querySelector("#item-container");

let innerHTML = '';
items.forEach(item => {
    innerHTML += 
    `
    <div class="col-lg-3 col-md-3 col-sm-4 col-6 g-xl-4 g-lg-3 g-md-2 g-sm-1 g-0">
      <div class="card rounded-0 border-0 shadow-0 h-100 m-lg-3">
        <div class = "cardImage position-relative">
          <img src="${item.image}" class="card-img-top rounded-0">
          <div class="w-100 mt-1 mx-auto">
            <button class="btn btn-danger w-100 rounded-0" onclick="addToCart(${item.id})" id="addcart">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="card-body">
          <h6 class="card-title fw-bold mb-0">${item.company}</h6>
          <p class="card-text fs-14 fw-400 mb-0">${item.title}</p>
          <div class="">
            <span class="fw-bold me-1">Rs. ${item.dis_price}</span>
            <del class="fs-14 fw-400 me-1">${item.price}</del>
            <span class="text-orange fs-14 fw-400 me-1">${item.discount} off</span>
          </div>
          
        </div>
      </div>
    </div>
    `
})
itemContainer.innerHTML = innerHTML;

// Add to Cart section starts
let cartItems = [];

function addToCart(itemId){
  cartItems.push(itemId);
  cartIcon();
}

function cartIcon(){
  let cartNumber = document.getElementById('cart-number');
  cartNumber.innerText = cartItems.length;
}
