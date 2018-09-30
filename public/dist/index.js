


function renderIndex() {
return `
<div id="carouselExampleSlidesOnly" class="carousel slide container-fluid" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active text-center">
    <img class="d-block img-thumbnail img-fluid" src="/dist/images/1eaa98bfe7d08d914944143cb797ba4d.jpg" alt="First slide">
  </div>
  <div class="carousel-item text-center">
    <img class="d-block img-thumbnail img-fluid" src="/dist/images/2018-new-fashion-baby-boy-and-girl-clothes-long-sleeve-cartoon-pattern-one-piece-baby-rompers.jpg" alt="Second slide">
  </div>
  <div class="carousel-item text-center">
    <img class="d-block img-thumbnail img-fluid" src="/dist/images/New-Arriving-fashion-baby-Girl-suit-sets-vest-dress-2pcs-set-baby-suit-Baby-Clothes-Set.jpg_640x640.jpg" alt="Third slide">
  </div>
  <div class="carousel-item text-center">
    <img class="d-block img-thumbnail img-fluid" src="/dist/images/24b331ac1aa0f098f7dbd56148b32423.jpg" alt="Second slide">
  </div>
</div>
</div>`
}


function renderProductsList() {
  return `<div class="container"><div class="row">${produtos.map(product => `
  <div class="col-lg-2 produto" data-id="${product.id}">
    <div class="single-product-wrapper">
      <div class="product-img">
        <img class="imagens" src="${product.thumbnail}" alt="">
      </div>
      <div class="product-description">
        <h6>${product.title}</h6>
        <p class="product-price">R$${product.price}</p>
        <div class="hover-content">
          <div class="add-to-cart-btn">
            <a href="product/${product.id}" class="btn essence-btn">Ver produto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `).join("")}</div></div>`
}

$('.carousel').carousel({
  interval: 2000
});
