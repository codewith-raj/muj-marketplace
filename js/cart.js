// MUJ Marketplace Application
class MUJMarketplace {
    constructor() {
        // Initialize state
        this.state = {
            products: [],
            cart: [],
            savedItems: [],
            wishlist: []
        };

        // Load from localStorage
        this.loadState();

        // DOM elements
        this.dom = {
            cartItemsContainer: document.querySelector('.cart-items'),
            savedItemsContainer: document.querySelector('.saved-items'),
            cartCountElement: document.querySelector('.cart-count'),
            wishlistCountElement: document.querySelector('.wishlist-count'),
            subtotalElement: document.querySelector('.subtotal'),
            shippingElement: document.querySelector('.shipping'),
            serviceFeeElement: document.querySelector('.service-fee'),
            taxElement: document.querySelector('.tax'),
            totalPriceElement: document.querySelector('.total-price'),
            itemCountElement: document.querySelector('.summary-row span:first-child'),
            checkoutButton: document.querySelector('.checkout-btn'),
            notification: document.querySelector('.notification'),
            continueShoppingBtn: document.querySelector('.continue-shopping'),
            wishlistBtn: document.querySelector('.wishlist-btn'),
            cartBtn: document.querySelector('.cart-btn'),
            userBtn: document.querySelector('.user-btn')
        };

        // Initialize the app
        this.init();
    }

    // Load state from localStorage
    loadState() {
        const savedState = localStorage.getItem('mujMarketplaceState');
        if (savedState) {
            this.state = JSON.parse(savedState);
        } else {
            // Default products if none in localStorage
            this.state.products = this.getDefaultProducts();
            this.saveState();
        }
    }

    // Save state to localStorage
    saveState() {
        localStorage.setItem('mujMarketplaceState', JSON.stringify(this.state));
    }

    // Get default products
    getDefaultProducts() {
        return [
            {
                id: 1,
                name: "Calculus Textbook",
                price: 45.00,
                originalPrice: 120.00,
                image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "textbooks",
                condition: "good",
                seller: "Alex Johnson",
                sellerAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 4.5,
                reviews: 12
            },
            {
                id: 2,
                name: "MacBook Air M1",
                price: 699.00,
                originalPrice: 999.00,
                image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "electronics",
                condition: "like-new",
                seller: "TechGuru",
                sellerAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5,
                reviews: 8
            },
            {
                id: 3,
                name: "Mini Fridge",
                price: 75.00,
                originalPrice: 129.99,
                image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "dorm",
                condition: "good",
                seller: "DormEssentials",
                sellerAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
                rating: 4.2,
                reviews: 15
            },
            {
                id: 4,
                name: "College Hoodie",
                price: 25.00,
                originalPrice: 59.99,
                image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "clothing",
                condition: "like-new",
                seller: "CampusWear",
                sellerAvatar: "https://randomuser.me/api/portraits/women/63.jpg",
                rating: 4.7,
                reviews: 23
            },
            {
                id: 5,
                name: "Desk Lamp",
                price: 15.00,
                originalPrice: 29.99,
                image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "dorm",
                condition: "fair",
                seller: "LightItUp",
                sellerAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
                rating: 4.0,
                reviews: 7
            },
            {
                id: 6,
                name: "Wireless Headphones",
                price: 49.99,
                originalPrice: 89.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                category: "electronics",
                condition: "good",
                seller: "AudioPro",
                sellerAvatar: "https://randomuser.me/api/portraits/women/28.jpg",
                rating: 4.3,
                reviews: 18
            }
        ];
    }

    // Initialize the application
    init() {
        this.renderCart();
        this.renderSavedItems();
        this.updateCartCount();
        this.updateWishlistCount();
        this.setupEventListeners();
    }

    // Setup event listeners
    setupEventListeners() {
        // Checkout button
        this.dom.checkoutButton.addEventListener('click', () => this.checkout());

        // Continue shopping button
        this.dom.continueShoppingBtn?.addEventListener('click', () => {
            this.showNotification('Redirecting to shop...');
        });

        // Wishlist button
        this.dom.wishlistBtn.addEventListener('click', () => {
            this.showNotification('Wishlist feature coming soon!');
        });

        // Cart button
        this.dom.cartBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('.cart-items-section').offsetTop - 20,
                behavior: 'smooth'
            });
        });

        // User button
        this.dom.userBtn.addEventListener('click', () => {
            this.showNotification('User profile feature coming soon!');
        });
    }

    // Render cart items
    renderCart() {
        if (this.state.cart.length === 0) {
            this.dom.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything to your cart yet</p>
                    <button class="continue-shopping">
                        <i class="fas fa-arrow-left"></i>
                        Continue Shopping
                    </button>
                </div>
            `;

            // Re-attach event listener for continue shopping button
            document.querySelector('.continue-shopping')?.addEventListener('click', () => {
                this.showNotification('Redirecting to shop...');
            });

            // Disable checkout button
            this.dom.checkoutButton.disabled = true;

            // Update counts and summary
            this.updateCartCount();
            this.updateSummary();

            return;
        }

        this.dom.cartItemsContainer.innerHTML = '';

        this.state.cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-seller">
                        <img src="${item.sellerAvatar}" alt="${item.seller}" class="seller-avatar">
                        <span>${item.seller}</span>
                    </div>
                    <div class="item-price">$${item.price.toFixed(2)}</div>
                    <div class="item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <div>
                            <button class="save-btn" data-id="${item.id}">
                                <i class="fas fa-heart"></i>
                                Save
                            </button>
                            <button class="remove-btn" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            `;
            this.dom.cartItemsContainer.appendChild(cartItemElement);
        });

        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', (e) => this.decreaseQuantity(e));
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', (e) => this.increaseQuantity(e));
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (e) => this.removeItem(e));
        });

        document.querySelectorAll('.save-btn').forEach(button => {
            button.addEventListener('click', (e) => this.saveForLater(e));
        });

        // Enable checkout button
        this.dom.checkoutButton.disabled = false;

        // Update counts and summary
        this.updateCartCount();
        this.updateSummary();
    }

    // Render saved items
    renderSavedItems() {
        this.dom.savedItemsContainer.innerHTML = '';

        if (this.state.savedItems.length === 0) {
            this.dom.savedItemsContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-light);">
                    <i class="fas fa-heart" style="font-size: 30px; opacity: 0.3; margin-bottom: 10px;"></i>
                    <p>No saved items</p>
                </div>
            `;
            return;
        }

        this.state.savedItems.forEach(item => {
            const savedItemElement = document.createElement('div');
            savedItemElement.className = 'saved-item';
            savedItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="saved-image">
                <div class="saved-info">
                    <h4 class="saved-name">${item.name}</h4>
                    <div class="saved-price">$${item.price.toFixed(2)}</div>
                    <button class="move-to-cart" data-id="${item.id}">
                        <i class="fas fa-cart-plus"></i>
                        Move to Cart
                    </button>
                </div>
            `;
            this.dom.savedItemsContainer.appendChild(savedItemElement);
        });

        // Add event listeners to move to cart buttons
        document.querySelectorAll('.move-to-cart').forEach(button => {
            button.addEventListener('click', (e) => this.moveToCart(e));
        });
    }

    // Update cart count in header
    updateCartCount() {
        const count = this.state.cart.reduce((total, item) => total + item.quantity, 0);
        this.dom.cartCountElement.textContent = count;
    }

    // Update wishlist count in header
    updateWishlistCount() {
        const count = this.state.wishlist.length;
        this.dom.wishlistCountElement.textContent = count;
    }

    // Update order summary
    updateSummary() {
        const subtotal = this.state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const itemCount = this.state.cart.reduce((total, item) => total + item.quantity, 0);

        // Calculate shipping (free over $50, otherwise $5)
        const shipping = subtotal > 50 ? 0 : 5;

        // Calculate service fee (5% of subtotal)
        const serviceFee = subtotal * 0.05;

        // Calculate tax (8% of subtotal)
        const tax = subtotal * 0.08;

        // Calculate total
        const total = subtotal + shipping + serviceFee + tax;

        // Update DOM
        this.dom.itemCountElement.textContent = `Subtotal (${itemCount} ${itemCount === 1 ? 'item' : 'items'})`;
        this.dom.subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        this.dom.shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        this.dom.serviceFeeElement.textContent = `$${serviceFee.toFixed(2)}`;
        this.dom.taxElement.textContent = `$${tax.toFixed(2)}`;
        this.dom.totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }

    // Decrease item quantity
    decreaseQuantity(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const item = this.state.cart.find(item => item.id === productId);

        if (item.quantity > 1) {
            item.quantity -= 1;
            this.showNotification(`Quantity decreased for ${item.name}`);
        } else {
            this.state.cart = this.state.cart.filter(item => item.id !== productId);
            this.showNotification(`${item.name} removed from cart`);
        }

        this.saveState();
        this.renderCart();
    }

    // Increase item quantity
    increaseQuantity(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const item = this.state.cart.find(item => item.id === productId);
        item.quantity += 1;

        this.showNotification(`Quantity increased for ${item.name}`);
        this.saveState();
        this.renderCart();
    }

    // Remove item from cart
    removeItem(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const item = this.state.cart.find(item => item.id === productId);
        this.state.cart = this.state.cart.filter(item => item.id !== productId);

        this.showNotification(`${item.name} removed from cart`);
        this.saveState();
        this.renderCart();
    }

    // Save item for later
    saveForLater(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const itemIndex = this.state.cart.findIndex(item => item.id === productId);

        if (itemIndex !== -1) {
            const item = this.state.cart[itemIndex];

            // Check if item already in saved items
            const existingItem = this.state.savedItems.find(savedItem => savedItem.id === productId);

            if (!existingItem) {
                // Create a simplified version of the item for saved items
                const savedItem = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    seller: item.seller
                };

                this.state.savedItems.push(savedItem);
            }

            // Remove from cart
            this.state.cart.splice(itemIndex, 1);

            this.showNotification(`${item.name} saved for later`);
            this.saveState();
            this.renderCart();
            this.renderSavedItems();
        }
    }

    // Move item from saved to cart
    moveToCart(event) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const itemIndex = this.state.savedItems.findIndex(item => item.id === productId);

        if (itemIndex !== -1) {
            const item = this.state.savedItems[itemIndex];
            const fullProduct = this.state.products.find(p => p.id === productId) || item;

            // Check if item already in cart
            const existingItem = this.state.cart.find(cartItem => cartItem.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.state.cart.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    seller: item.seller,
                    sellerAvatar: fullProduct.sellerAvatar || "https://randomuser.me/api/portraits/men/1.jpg",
                    quantity: 1
                });
            }

            // Remove from saved items
            this.state.savedItems.splice(itemIndex, 1);

            this.showNotification(`${item.name} moved to cart`);
            this.saveState();
            this.renderCart();
            this.renderSavedItems();
        }
    }

    // Checkout
    checkout() {
        if (this.state.cart.length === 0) {
            this.showNotification('Your cart is empty!');
            return;
        }

        const total = parseFloat(this.dom.totalPriceElement.textContent.replace('$', ''));

        // In a real app, you would redirect to a checkout page or process payment
        this.showNotification(`Order placed! Total: $${total.toFixed(2)}`);

        // Clear cart
        this.state.cart = [];
        this.saveState();
        this.renderCart();
    }

    // Show notification
    showNotification(message) {
        const notificationMessage = document.querySelector('.notification-message');
        notificationMessage.textContent = message;

        this.dom.notification.classList.add('show');

        setTimeout(() => {
            this.dom.notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const mujMarketplace = new MUJMarketplace();
});

// Cart functionality
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
        cartList.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
}

function loadWishlist() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let wishlistList = document.getElementById("wishlist-items");
    wishlistList.innerHTML = "";
    wishlist.forEach((item, index) => {
        wishlistList.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromWishlist(${index})">Remove</button></li>`;
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();  // Refresh list
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    loadWishlist();  // Refresh list
}

loadCart();
loadWishlist();