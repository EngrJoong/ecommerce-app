// Sample product data
const products = [
  {
    id: 1,
    name: "Single Burner",
    price: Php 3500,
    image: "https://github.com/EngrJoong/ecommerce-app/blob/main/images/sadit.png"
  },
  {
    id: 2,
    name: "Desk Plant",
    price: 299,
    image: "https://i.imgur.com/nL0zksF.jpeg"
  },
  {
    id: 3,
    name: "Soft Blanket",
    price: 499,
    image: "https://i.imgur.com/lpK42Xw.jpeg"
  },
  {
    id: 4,
    name: "LED Table Lamp",
    price: 899,
    image: "https://i.imgur.com/VABNxGx.jpeg"
  }
];

let cart = [];

// Render products on the page
function showProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₱${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

// Add item to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartCount();
}

// Update cart count
function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

showProducts(); // Initial load
