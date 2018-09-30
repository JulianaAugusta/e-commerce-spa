$(document).ready(function(){
  page('/', index);
  page('/products', products);
  // page('/product/:productId', product);
  page()
});

function index() {
  $("main").html(renderIndex());
  $("#btnProducts").html("<a href='/products'>Ver produtos</a>");
}

function products() {
  getProducts();
  $("#btnProducts").html("<a href='/'> Home </a>");
}

let produtos = [];

function erro() {
  console.log("erro");
}

function carregaPosts(data) {
  produtos = data.results;
  $("main").html(renderProductsList(produtos));
}

function getProducts() {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=MLB1384`
  $.ajax({
    type: "GET",
    url: url,
    success: carregaPosts,
    error: erro
  });
}
