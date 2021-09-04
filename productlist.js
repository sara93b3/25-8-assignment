const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");
const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

/* <article>
<a href="product.html">
<img
  src="https://kea-alt-del.dk/t7/images/webp/640/1528.webp"
  alt="Black Fleece Jacket"
/>
</a>
<h3>Black Fleece Jacket</h3>
<p>Price: DKK 1595,-</p>
<div>
<p>ON SALE</p>
</div>
<div>
<p>SOLD OUT</p>
</div>
</article> */

function showProduct(product) {
  console.log(product);
  //grab template
  const template = document.querySelector("#smallProductTemplate").content;
  //clone it
  const copy = template.cloneNode(true);
  copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
  //change content
  copy.querySelector(".name").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".price").textContent = product.price;
  copy.querySelector(".on-sale").textContent = product.discount;
  copy.querySelector(".sold-out").textContent = product.soldout;
  //   if (product.soldout) {
  //     copy.querySelector("article").classList.add("soldOut");
  //   }
  //grab parent
  const parent = document.querySelector("main");
  //append
  parent.appendChild(copy);
}
