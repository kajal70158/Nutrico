// Load reusable components
window.addEventListener("DOMContentLoaded", () => {
  fetch("../components/header.html")
    .then(res => res.text())
    .then(data => (document.getElementById("header").innerHTML = data));

  fetch("../components/footer.html")
    .then(res => res.text())
    .then(data => (document.getElementById("footer").innerHTML = data));

  // Load sample products
  const products = [
    {
      name: "Whey Protein",
      price: "₹2,499",
      image: "../../public/images/product1.jpg",
    },
    {
      name: "Fat Burner",
      price: "₹999",
      image: "../../public/images/product2.jpg",
    },
    {
      name: "Multivitamins",
      price: "₹799",
      image: "../../public/images/product3.jpg",
    },
  ];

  const container = document.getElementById("product-list");
  if (container) {
    container.innerHTML = products
      .map(
        (p) => `
      <div class="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img src="${p.image}" alt="${p.name}" class="h-48 w-full object-cover rounded" />
        <h3 class="text-xl mt-4 font-semibold">${p.name}</h3>
        <p class="text-gray-600">${p.price}</p>
        <a href="product.html" class="text-blue-500 mt-2 inline-block">View Product</a>
      </div>
    `
      )
      .join("");
  }
});
