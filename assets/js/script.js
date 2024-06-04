let itemContainer = document.querySelector("#item-container");

let innerHTML = '';
items.forEach(item => {
    innerHTML += 
    `
    <div class="col-lg-3 col-md-3 col-sm-4 col-6 p-lg-4">
      <div class="card rounded-0 border-0 shadow">
        <img src="${item.image}" class="car-img-top rounded-0">
        <div class="card-body">
          <h6 class="card-title fw-bold mb-0">${item.company}</h6>
          <p class="card-text fs-14 fw-400 mb-0">${item.title}</p>
          <div class="">
            <span class="fw-bold me-1">Rs. ${item.dis_price}</span>
            <del class="fs-14 fw-400 me-1">${item.price}</del>
            <span class="text-orange fs-14 fw-400 me-1">${item.discount} off</span>
          </div>
          <div class="w-100 mt-1 mx-auto">
            <button class="btn btn-outline-danger w-100">
              <i class="fa-regular fa-heart fs-6"></i> &nbsp; wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    `
})
itemContainer.innerHTML = innerHTML;