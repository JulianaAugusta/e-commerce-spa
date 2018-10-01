$(document).ready(function(){
  page('/', index);
  page('/products', products);
  page('/product/:productId', product);
  page ('/carrinho', carrinho );
  page();
});

function index() {
  $("main").html(renderIndex());
  $("#btnProducts").html("<a href='/products'>Ver produtos</a>");
}

async function products() {
  const mercadoLivreProducts = await getProducts();
  $("main").html(renderProductsList(mercadoLivreProducts));
  $("#btnProducts").html("<a href='/'>Voltar ao início</a>");
}

async function product(context) {
  const mercadoLivreProduct = await getProduct(context.params.productId);
  $("main").html(renderProduct(mercadoLivreProduct));
  $("#btnProducts").html("<a href='/'>Voltar ao início</a>");
}

function getProducts() {
  return fetch("https://api.mercadolibre.com/sites/MLB/search?category=MLB1384")
    .then((response) => response.json())
    .then((json) => json.results);
}

function getProduct(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}?
    access_token=APP_USR-2203506221789612-092014-4da1823b26643e8947e11e50342db4aa-315570596`)
    .then((response) => response.json())
    .then((json) => json);
}

function carrinho(){

    $("main").html(renderCarrinho());
    document.getElementById("produto").innerHTML = localStorage.getItem("title");
    document.getElementById("img").src = localStorage.getItem("img");
    document.getElementById("price").innerHTML = 'Valor R$ '+ localStorage.getItem("price");

}
