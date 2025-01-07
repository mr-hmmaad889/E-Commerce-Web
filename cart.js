// Initialize an empty cart
let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
  // Add the product to the cart array
  cart.push({ name, price });

  // Update the cart display
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  // Clear the current cart items
  cartItems.innerHTML = '';

  let total = 0;

  // Loop through the cart and display items
  cart.forEach((item, index) => {
    total += item.price;

    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price} `;
    
    // Add a remove button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(index);

    listItem.appendChild(removeButton);
    cartItems.appendChild(listItem);
  });

  // Update the total price
  cartTotal.textContent = Total: $${total};
}

// Function to remove items from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
