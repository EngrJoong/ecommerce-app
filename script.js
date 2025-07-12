// Sample product data
const products = [
  {
    id: 1,
    name: "Single Burner",
    price: 3500,
    image: "images/sadit.png"
  },
  {
    id: 2,
    name: "Double Burner",
    price: 4500,
    image: "images/IMG_0012(1).png"
  },
  {
    id: 3,
    name: "Mini Kalan",
    price: 2500,
    image: "images/sadit.png"
  },
  {
    id: 4,
    name: "Separated Burner",
    price: 3500,
    image: "images/suway.png"
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
