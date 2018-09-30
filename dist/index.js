function renderIndex() {
  return `
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../dist/images/regular_paraiso-moda-bebe-foto-catalogo-100.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../dist/images/regular_paraiso-moda-bebe-foto-catalogo-54.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../dist/images/regular_paraiso-moda-bebe-foto-catalogo-23.jpg" alt="Third slide">
    </div>
  </div>
</div>`
}

function renderProductsList(products) {
  return `
  <div class="container"><div class="row">
  ${products.map((product =>`<div class="col-lg-2 produto" data-id="${product.id}">
      <div class = "single-product-wrapper" >
        <div class="product-img">
          <img class="imagens"src="${product.thumbnail}" alt="">
        </div>
        <div class="product-description"><h6>${product.title}</h6>
          <p class="product-price"> R$ ${product.price}</p>
          <div class="hover-content">
            <div class="add-to-cart-btn">
              <a href="product/${product.id}" class="btn essence-btn">Ver produto</a>
            </div>
          </div>
        </div>
      </div>
    </div>`)).join("")}</div></div>
  `;
}

function renderProduct(product) {
  return `
  <div class="container"><div class="row area-produto">
    <div class="col-lg-10 produto produtoItem" data-id="${product.id}">
      <div class = "single-product-wrapper" >
      <h6>${product.title}</h6>
        <div class="product-img">
          <img class="imagens"src="${product.thumbnail}" alt="">
        </div>
        <div class="product-description">
          <p class="product-price"> R$ ${product.price}</p>
          <div class="hover-content">
            <div class="add-to-cart-btn">
             <button onclick="addProduto()" type="button">Adicionar no carrinho</button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    `;
}

function addProduto() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("meu-carrinho").innerHTML = localStorage.clickcount;

}

function getProductCarrinho() {
  // localStorage.getItem("array");
}

$('.carousel').carousel({
  interval: 2000
})
