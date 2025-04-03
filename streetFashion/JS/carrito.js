document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.parentElement;
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            // Agregar producto al carrito
            const cartItem = document.createElement('li');
            cartItem.innerHTML = `<span>${productName}</span><span>$${productPrice.toFixed(2)}</span>`;
            cartItems.appendChild(cartItem);

            // Actualizar total
            total += productPrice;
            totalElement.textContent = total.toFixed(2);
        });
    });
});
