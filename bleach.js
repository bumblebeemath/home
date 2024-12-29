function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if product is already in the cart
  if (!cart.includes(productName)) {
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
