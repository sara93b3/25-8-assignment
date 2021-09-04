const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;
//fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
//populate page

function showProduct(product) {
  console.log(product);
  document.querySelector("h2").textContent = product.brandname;
  document.querySelector("li.season").textContent = product.season;
  document.querySelector("li.year").textContent = product.productionyear;
  document.querySelector("li.type").textContent = product.articletype;
  document.querySelector("li.name").textContent = product.variantname;
  document.querySelector("li.category").textContent = product.category;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
//<img
//         src="https://kea-alt-del.dk/t7/images/webp/640/1528.webp"
//         alt="Black Fleece Jacket"
//       />
