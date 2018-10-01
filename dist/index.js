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

function renderCarrinho () {

  return `
  <h2 class="mt-0 title-card mt-5 ml-5"> Carrinho de compras</h2>
  <h2 class="mt-0 title-card ml-5">produtos adicionados </h2>
  <div class=" item-card media">
  <img id="img" src="productImg" "width="90" height="90">
  <div class="media-body">

    <p id="produto" > </p>
    <p id="price" class="mb-0 font-weight-bold">   </p>
    <div class ="d-flex justify-content-end">
    <button class= " btn btn-color btn-sm"onClick="removeItem()" class ="demo" id'remove'> Remover Item </button>
    </div >
    <p class="mb-0"> </p>
  </div>
</div>
  `
}

function addCarrinho(produto) {

  productInf = produto;
  console.log(productInf)

  productTitle = productInf[0]
  console.log(productTitle)
  productImg = productInf[1]
  console.log(productImg)
  productPrice = productInf[2]
  console.log(productPrice)

  localStorage.setItem('title', productTitle);
  localStorage.setItem('img', productImg);
  localStorage.setItem('price', productPrice);


}

function removeItem (){
alert ('item removido, atualize a página!');
console.log('remove')

localStorage.removeItem('title');
localStorage.removeItem('price');
localStorage.removeItem('img');
}


$('.carousel').carousel({
  interval: 2000
})
