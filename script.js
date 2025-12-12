// Product Data
const products = [
  {id:1, title:"Premium Headphones", price:2799, img:"https://images.unsplash.com/photo-1580894908360-1c890a57f22e"},
  {id:2, title:"Smart Watch", price:3499, img:"https://images.unsplash.com/photo-1518443072852-2f2b5f45d83f"},
  {id:3, title:"Sneakers", price:1999, img:"https://images.unsplash.com/photo-1528701800489-20be3c2bbd49"},
  {id:4, title:"Backpack 20L", price:999, img:"https://images.unsplash.com/photo-1590874103328-eac38a683842"},
];

let cart = {};

const $ = (id) => document.querySelector(id);

// Load Products
function loadProducts(){
  const box = $("#products");
  box.innerHTML = "";

  products.forEach(p=>{
    box.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3 class="product-title">${p.title}</h3>
        <p class="price">₹${p.price}</p>
        <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>`;
  });
}

// Add to Cart
function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  updateCart();
}

// Update Cart UI
function updateCart(){
  const cartItems = $("#cartItems");
  cartItems.innerHTML = "";
  let total = 0, count = 0;

  Object.keys(cart).forEach(id=>{
    const p = products.find(item => item.id == id);
    total += p.price * cart[id];
    count += cart[id];

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${p.img}">
        <div>
          <strong>${p.title}</strong><br>
          Qty: ${cart[id]}<br>
          ₹${p.price * cart[id]}
        </div>
      </div>`;
  });

  $("#cartTotal").textContent = total;
  $("#cartCount").textContent = count;
}

// Toggle Cart Panel
function toggleCart(){
  $("#cartPanel").classList.toggle("open");
}

loadProducts();
updateCart();
