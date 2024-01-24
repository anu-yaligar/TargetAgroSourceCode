function searchProducts(){
  var input, filter,products,product,productName;

  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  products = document.querySelectorAll(".image-box");

  products.forEach(function (product){
  productName=product.getAttribute("data-name");
  var displayStyle=productName.toString().includes(filter) ? "block" : "none";
  product.style.display=displayStyle;
  });
}
