// Sample data for the marketplace
const marketplaceData = {
    featuredProducts: [
        {
            id: 1,
            title: "Engineering Mathematics IV",
            description: "3rd Semester Textbook",
            price: 640,
            originalPrice: 800,
            discount: 20,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 4.5,
            reviews: 12,
            condition: "Like New",
            posted: "2 days ago",
            urgent: false,
            verifiedSeller: false,
            topRated: false
        },
        {
            id: 2,
            title: "MacBook Air 2020",
            description: "M1 Chip, 8GB RAM, 256GB SSD",
            price: 65000,
            originalPrice: 0,
            discount: 0,
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 4,
            reviews: 8,
            condition: "Excellent",
            posted: "Today",
            urgent: true,
            verifiedSeller: true,
            topRated: false
        },
        {
            id: 3,
            title: "Complete CSE Notes",
            description: "4th Semester (All Subjects)",
            price: 300,
            originalPrice: 0,
            discount: 0,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 5,
            reviews: 24,
            condition: "New",
            posted: "1 week ago",
            urgent: false,
            verifiedSeller: false,
            topRated: true
        },
        {
            id: 4,
            title: "Men's Formal Blazer",
            description: "Black, Size M (MUJ Uniform)",
            price: 1000,
            originalPrice: 2000,
            discount: 50,
            image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 4,
            reviews: 5,
            condition: "Good",
            posted: "3 days ago",
            urgent: false,
            verifiedSeller: false,
            topRated: false,
            graduatingStudent: true
        }
    ],
    recentProducts: [
        {
            id: 5,
            title: "Data Structures Book",
            description: "2nd Semester, Excellent condition",
            price: 450,
            originalPrice: 600,
            discount: 25,
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 4,
            reviews: 7,
            condition: "Very Good",
            posted: "5 hours ago",
            urgent: false,
            verifiedSeller: true
        },
        {
            id: 6,
            title: "Scientific Calculator",
            description: "Casio fx-991EX, Like new",
            price: 800,
            originalPrice: 1200,
            discount: 33,
            image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 4.5,
            reviews: 3,
            condition: "Like New",
            posted: "1 day ago",
            urgent: false,
            verifiedSeller: false
        },
        {
            id: 7,
            title: "Bicycle",
            description: "Hero Sprint Pro, 6 months old",
            price: 2500,
            originalPrice: 0,
            discount: 0,
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 3.5,
            reviews: 2,
            condition: "Good",
            posted: "2 days ago",
            urgent: true,
            verifiedSeller: false
        },
        {
            id: 8,
            title: "MUJ Lab Coat",
            description: "Size L, Never used",
            price: 500,
            originalPrice: 800,
            discount: 38,
            image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            rating: 0,
            reviews: 0,
            condition: "New",
            posted: "3 days ago",
            urgent: false,
            verifiedSeller: false
        }
    ],
    testimonials: [
        {
            name: "Priya Sharma",
            year: "CSE, 3rd Year",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            text: "Saved over ₹2000 on textbooks this semester thanks to MUJ Marketplace. The verified sellers feature gives me confidence in my purchases."
        },
        {
            name: "Rahul Patel",
            year: "ECE, 2nd Year",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 4.5,
            text: "Sold my old laptop within 2 days of posting! The chat feature made it easy to negotiate with buyers."
        },
        {
            name: "Ananya Gupta",
            year: "Mechanical, 4th Year",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 4,
            text: "Found all my lab manuals and reference books in one place. The campus pickup option saved me delivery charges!"
        }
    ],
    campusGroups: [
        {
            name: "CodeChef MUJ",
            icon: "code",
            color: "red",
            description: "Competitive programming group with 120+ members",
            members: 240
        },
        {
            name: "Robotics Club",
            icon: "robot",
            color: "blue",
            description: "For robotics enthusiasts and competition teams",
            members: 85
        },
        {
            name: "Music Society",
            icon: "music",
            color: "green",
            description: "Jam sessions, equipment sharing, and performances",
            members: 156
        },
        {
            name: "Basketball Team",
            icon: "basketball-ball",
            color: "purple",
            description: "Inter-college tournament team and practice sessions",
            members: 32
        }
    ],
    notifications: [
        {
            id: 1,
            title: "New message from seller",
            message: "Your offer for Engineering Mathematics IV has been accepted",
            time: "10 min ago",
            read: false
        },
        {
            id: 2,
            title: "Order confirmed",
            message: "Your order #MUJ12345 has been confirmed",
            time: "2 hours ago",
            read: true
        },
        {
            id: 3,
            title: "New listing in your watchlist",
            message: "A new MacBook Pro has been listed in Electronics",
            time: "1 day ago",
            read: true
        }
    ],
    cartItems: [
        {
            id: 1,
            title: "Engineering Mathematics IV",
            price: 640,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Complete CSE Notes",
            price: 300,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Scientific Calculator",
            price: 800,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ]
};

const elements = {
    featuredProducts: document.getElementById('featured-products'),
    recentProducts: document.getElementById('recent-products'),
    testimonials: document.getElementById('testimonials'),
    campusGroups: document.getElementById('campus-groups'),
    notificationList: document.getElementById('notification-list'),
    cartItems: document.getElementById('cart-items'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total'),
    toast: document.getElementById('toast')
};

document.addEventListener('DOMContentLoaded', function () {
    
    renderFeaturedProducts();
    renderRecentProducts();
    renderTestimonials();
    renderCampusGroups();
    renderNotifications();
    renderCart();

   
    initEventListeners();

    setTimeout(showModal, 3000);
});

function renderFeaturedProducts() {
    elements.featuredProducts.innerHTML = marketplaceData.featuredProducts.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md relative" data-id="${product.id}">
            ${product.discount > 0 ? `<div class="discount-tag">${product.discount}% OFF</div>` : ''}
            <div class="p-4">
                <div class="relative h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                    <button class="wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full text-gray-800 shadow-md hover:text-red-500">
                        <i class="fas fa-heart"></i>
                    </button>
                    ${product.urgent ? `<span class="urgent-badge absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">URGENT SALE</span>` : ''}
                </div>
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-lg mb-1">${product.title}</h3>
                        <p class="text-gray-600 text-sm mb-2">${product.description}</p>
                        <div class="flex items-center mb-2">
                            ${renderRatingStars(product.rating)}
                            <span class="text-gray-500 text-xs">(${product.reviews})</span>
                        </div>
                    </div>
                    <div class="text-right">
                        ${product.originalPrice > 0 ? `<p class="text-gray-400 text-sm line-through">₹${product.originalPrice}</p>` : ''}
                        <p class="font-bold text-purple-600">₹${product.price}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    ${product.verifiedSeller ?
                `<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Verified Seller <i class="fas fa-check-circle verified-badge"></i></span>` :
                product.topRated ?
                    `<span class="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Top Rated</span>` :
                    product.graduatingStudent ?
                        `<span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">Graduating Student</span>` :
                        `<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${product.condition}</span>`
            }
                    <span class="text-xs text-gray-500">${product.posted}</span>
                </div>
                <button class="add-to-cart-btn w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
                    ${product.urgent ? 'Message Seller' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `).join('');
}


function renderRecentProducts() {
    elements.recentProducts.innerHTML = marketplaceData.recentProducts.map(product => `
        <div class="product-card bg-white rounded-lg overflow-hidden shadow-md relative" data-id="${product.id}">
            ${product.discount > 0 ? `<div class="discount-tag">${product.discount}% OFF</div>` : ''}
            <div class="p-4">
                <div class="relative h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover">
                    <button class="wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full text-gray-800 shadow-md hover:text-red-500">
                        <i class="fas fa-heart"></i>
                    </button>
                    ${product.urgent ? `<span class="urgent-badge absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">URGENT SALE</span>` : ''}
                </div>
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-lg mb-1">${product.title}</h3>
                        <p class="text-gray-600 text-sm mb-2">${product.description}</p>
                        <div class="flex items-center mb-2">
                            ${renderRatingStars(product.rating)}
                            <span class="text-gray-500 text-xs">(${product.reviews})</span>
                        </div>
                    </div>
                    <div class="text-right">
                        ${product.originalPrice > 0 ? `<p class="text-gray-400 text-sm line-through">₹${product.originalPrice}</p>` : ''}
                        <p class="font-bold text-purple-600">₹${product.price}</p>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-4">
                    ${product.verifiedSeller ?
                `<span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Verified Seller <i class="fas fa-check-circle verified-badge"></i></span>` :
                `<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">${product.condition}</span>`
            }
                    <span class="text-xs text-gray-500">${product.posted}</span>
                </div>
                <button class="add-to-cart-btn w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium">
                    ${product.urgent ? 'Message Seller' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `).join('');
}


function renderRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }

    return `<div class="flex text-yellow-400 mr-2">${stars}</div>`;
}


function renderTestimonials() {
    elements.testimonials.innerHTML = marketplaceData.testimonials.map(testimonial => `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
                <img src="${testimonial.avatar}" alt="${testimonial.name}"
                    class="h-12 w-12 rounded-full mr-4">
                <div>
                    <h4 class="font-bold">${testimonial.name}</h4>
                    <p class="text-gray-600 text-sm">${testimonial.year}</p>
                </div>
            </div>
            <div class="flex text-yellow-400 mb-3">
                ${renderRatingStars(testimonial.rating)}
            </div>
            <p class="text-gray-700">"${testimonial.text}"</p>
        </div>
    `).join('');
}


function renderCampusGroups() {
    elements.campusGroups.innerHTML = marketplaceData.campusGroups.map(group => `
        <a href="#" class="group-card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-${group.color}-500">
            <div class="flex items-center mb-4">
                <div class="bg-${group.color}-100 p-3 rounded-full mr-4">
                    <i class="fas fa-${group.icon} text-${group.color}-600"></i>
                </div>
                <h3 class="font-bold text-lg">${group.name}</h3>
            </div>
            <p class="text-gray-600 mb-4">${group.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">${group.members} members</span>
                <button class="text-sm text-${group.color}-600 font-medium hover:underline join-group-btn">Join Group</button>
            </div>
        </a>
    `).join('');
}


function renderNotifications() {
    const unreadCount = marketplaceData.notifications.filter(n => !n.read).length;
    document.getElementById('notification-count').textContent = unreadCount > 0 ? unreadCount : '';
    document.getElementById('notification-count').classList.toggle('hidden', unreadCount === 0);

    elements.notificationList.innerHTML = marketplaceData.notifications.map(notification => `
        <a href="#" class="block px-4 py-2 border-b border-gray-200 hover:bg-gray-50 ${notification.read ? 'bg-white' : 'bg-gray-50'}">
            <div class="flex justify-between">
                <h4 class="text-sm font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}">${notification.title}</h4>
                ${!notification.read ? '<span class="h-2 w-2 rounded-full bg-blue-500"></span>' : ''}
            </div>
            <p class="text-sm text-gray-500 mt-1">${notification.message}</p>
            <p class="text-xs text-gray-400 mt-1">${notification.time}</p>
        </a>
    `).join('');
}

function renderCart() {
    const cartTotal = marketplaceData.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    elements.cartCount.textContent = marketplaceData.cartItems.length;
    elements.cartTotal.textContent = cartTotal;

    if (marketplaceData.cartItems.length === 0) {
        elements.cartItems.innerHTML = '<div class="px-4 py-3 text-center text-gray-500 text-sm">Your cart is empty</div>';
    } else {
        elements.cartItems.innerHTML = marketplaceData.cartItems.map(item => `
            <div class="flex items-center px-4 py-2 border-b border-gray-200">
                <img src="${item.image}" alt="${item.title}" class="h-12 w-12 object-cover rounded mr-3">
                <div class="flex-1">
                    <h4 class="text-sm font-medium text-gray-900 truncate">${item.title}</h4>
                    <div class="flex justify-between items-center mt-1">
                        <div class="flex items-center">
                            <button class="quantity-btn decrease text-gray-500 hover:text-purple-600" data-id="${item.id}">
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="mx-2 text-sm">${item.quantity}</span>
                            <button class="quantity-btn increase text-gray-500 hover:text-purple-600" data-id="${item.id}">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                        <span class="text-sm font-medium">₹${item.price * item.quantity}</span>
                    </div>
                </div>
                <button class="remove-item-btn ml-2 text-gray-400 hover:text-red-500" data-id="${item.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }
}

function showToast(message, duration = 3000) {
    elements.toast.textContent = message;
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, duration);
}

function initEventListeners() {
    // Chat widget toggle
    const chatWidget = document.getElementById('chat-widget');
    const openChat = document.getElementById('open-chat');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const sendMessage = document.getElementById('send-message');
    const chatMessages = document.getElementById('chat-messages');

    openChat.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        openChat.classList.toggle('hidden');
    });

    closeChat.addEventListener('click', () => {
        chatWidget.classList.toggle('hidden');
        openChat.classList.toggle('hidden');
    });

   
    sendMessage.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessageDiv = document.createElement('div');
            userMessageDiv.className = 'mb-4 flex justify-end';
            userMessageDiv.innerHTML = `
                <div>
                    <div class="bg-purple-600 text-white p-3 rounded-lg max-w-xs">
                        <p>${message}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1 text-right">You • Just now</p>
                </div>
            `;
            chatMessages.appendChild(userMessageDiv);

            chatInput.value = '';

     
            chatMessages.scrollTop = chatMessages.scrollHeight;

            setTimeout(() => {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'mb-4';
                replyDiv.innerHTML = `
                    <div class="bg-gray-100 p-3 rounded-lg max-w-xs">
                        <p>Thanks for your message! Our team will get back to you soon.</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">MUJ Support • Just now</p>
                `;
                chatMessages.appendChild(replyDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('hidden');
        } else {
            backToTop.classList.add('hidden');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

  
    document.addEventListener('click', function (e) {
        if (e.target.closest('.wishlist-btn') || e.target.classList.contains('wishlist-btn')) {
            const btn = e.target.classList.contains('wishlist-btn') ? e.target : e.target.closest('.wishlist-btn');
            const icon = btn.querySelector('i');

            e.preventDefault();
            e.stopPropagation();

            if (icon.classList.contains('text-red-500')) {
                icon.classList.remove('text-red-500');
                showToast('Removed from wishlist');
            } else {
                icon.classList.add('text-red-500');
                showToast('Added to wishlist');
            }
        }
    });

 
    document.addEventListener('click', function (e) {
        if (e.target.closest('.add-to-cart-btn') || e.target.classList.contains('add-to-cart-btn')) {
            const btn = e.target.classList.contains('add-to-cart-btn') ? e.target : e.target.closest('.add-to-cart-btn');
            const productCard = btn.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);
            const product = [...marketplaceData.featuredProducts, ...marketplaceData.recentProducts].find(p => p.id === productId);

            e.preventDefault();
            e.stopPropagation();

            const existingItem = marketplaceData.cartItems.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                marketplaceData.cartItems.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: 1,
                    image: product.image
                });
            }

            renderCart();

            btn.textContent = 'Added!';
            btn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
            btn.classList.add('bg-green-600', 'hover:bg-green-700');

            setTimeout(() => {
                btn.textContent = product.urgent ? 'Message Seller' : 'Add to Cart';
                btn.classList.remove('bg-green-600', 'hover:bg-green-700');
                btn.classList.add('bg-purple-600', 'hover:bg-purple-700');
            }, 2000);

            showToast(`${product.title} added to cart`);
        }
    });


    document.addEventListener('click', function (e) {
        if (e.target.closest('.quantity-btn') || e.target.classList.contains('quantity-btn')) {
            const btn = e.target.classList.contains('quantity-btn') ? e.target : e.target.closest('.quantity-btn');
            const productId = parseInt(btn.dataset.id);
            const item = marketplaceData.cartItems.find(item => item.id === productId);

            if (btn.classList.contains('increase')) {
                item.quantity += 1;
            } else if (btn.classList.contains('decrease')) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                }
            }

            renderCart();
        }
    });

   
    document.addEventListener('click', function (e) {
        if (e.target.closest('.remove-item-btn') || e.target.classList.contains('remove-item-btn')) {
            const btn = e.target.classList.contains('remove-item-btn') ? e.target : e.target.closest('.remove-item-btn');
            const productId = parseInt(btn.dataset.id);
            const itemIndex = marketplaceData.cartItems.findIndex(item => item.id === productId);

            if (itemIndex !== -1) {
                const removedItem = marketplaceData.cartItems.splice(itemIndex, 1)[0];
                showToast(`${removedItem.title} removed from cart`);
                renderCart();
            }
        }
    });

   
    const profileBtn = document.getElementById('profile-btn');
    profileBtn.addEventListener('click', () => {

        showToast('Redirecting to profile page');
        // window.location.href = 'dashboard.html';
    });

    const searchDesktop = document.getElementById('search-desktop');
    const searchMobile = document.getElementById('search-mobile');

    function handleSearch(event) {
        if (event.key === 'Enter') {
            const query = event.target.value.trim();
            if (query) {
                showToast(`Searching for: ${query}`);
                // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    }

    searchDesktop.addEventListener('keypress', handleSearch);
    searchMobile.addEventListener('keypress', handleSearch);
    const sellItemBtn = document.getElementById('sell-item-btn');
    sellItemBtn.addEventListener('click', () => {
        showToast('Redirecting to sell item page');
        // window.location.href = 'sell-item.html';
    });

    // Auth modal functionality
    const authModal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close-modal');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

   
    function showModal() {
        authModal.style.display = 'block';
    }

  
    closeModal.addEventListener('click', () => {
        authModal.style.display = 'none';
    });

    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

   
    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            authModal.style.display = 'none';
        }
    });

    
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

       
        document.getElementById('login-text').classList.add('hidden');
        document.getElementById('login-spinner').classList.remove('hidden');

       
        setTimeout(() => {
           
            document.getElementById('login-text').classList.remove('hidden');
            document.getElementById('login-spinner').classList.add('hidden');

            if (email && password) {
                showToast('Login successful!');
                authModal.style.display = 'none';
            } else {
                showToast('Please fill all fields');
            }
        }, 1500);
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirm = document.getElementById('signup-confirm').value;
        const id = document.getElementById('signup-id').value;

       
        document.getElementById('signup-text').classList.add('hidden');
        document.getElementById('signup-spinner').classList.remove('hidden');

        
        setTimeout(() => {
          
            document.getElementById('signup-text').classList.remove('hidden');
            document.getElementById('signup-spinner').classList.add('hidden');

            if (name && email && password && confirm && id) {
                if (password !== confirm) {
                    showToast('Passwords do not match');
                } else {
                    showToast('Account created successfully!');
                    authModal.style.display = 'none';
                }
            } else {
                showToast('Please fill all fields');
            }
        }, 1500);
    });

    
    document.getElementById('google-login').addEventListener('click', () => {
        showToast('Redirecting to Google login');
    });

    document.getElementById('microsoft-login').addEventListener('click', () => {
        showToast('Redirecting to Microsoft login');
    });

    
    document.getElementById('find-tutors-btn').addEventListener('click', () => {
        showToast('Finding available tutors...');
    });

    document.getElementById('view-bikes-btn').addEventListener('click', () => {
        showToast('Loading bike rental options...');
    });

    document.getElementById('laundry-btn').addEventListener('click', () => {
        showToast('Opening laundry booking form...');
    });

    document.getElementById('printing-btn').addEventListener('click', () => {
        showToast('Calculating printing quote...');
    });

    
    document.addEventListener('click', function (e) {
        if (e.target.closest('.join-group-btn') || e.target.classList.contains('join-group-btn')) {
            const btn = e.target.classList.contains('join-group-btn') ? e.target : e.target.closest('.join-group-btn');
            const groupCard = btn.closest('.group-card');
            const groupName = groupCard.querySelector('h3').textContent;

            e.preventDefault();
            showToast(`Request to join ${groupName} sent`);
        }
    });

    
    document.addEventListener('click', function (e) {
        if (e.target.closest('[data-category]') || e.target.hasAttribute('data-category')) {
            const chip = e.target.hasAttribute('data-category') ? e.target : e.target.closest('[data-category]');
            const category = chip.getAttribute('data-category');

            e.preventDefault();
            showToast(`Showing ${category} category`);
            // window.location.href = `category.html?name=${category}`;
        }
    });

   
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Going to homepage');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('listings-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Showing all listings');
    });

    document.getElementById('sell-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Redirecting to sell item page');
    });

    document.getElementById('account-link').addEventListener('click', (e) => {
        e.preventDefault();
        showModal();
    });

    document.getElementById('safety-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Showing safety tips');
    });

    document.getElementById('privacy-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Showing privacy policy');
    });

    document.getElementById('terms-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Showing terms of service');
    });

    document.getElementById('faq-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Showing frequently asked questions');
    });

    // Social media links
    document.getElementById('facebook-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening Facebook page');
    });

    document.getElementById('twitter-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening Twitter page');
    });

    document.getElementById('instagram-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening Instagram page');
    });

    document.getElementById('linkedin-link').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening LinkedIn page');
    });

    
    const notificationsBtn = document.getElementById('notifications-btn');
    const notificationsDropdown = document.getElementById('notifications-dropdown');

    notificationsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationsDropdown.classList.toggle('hidden');

        
        marketplaceData.notifications.forEach(n => n.read = true);
        renderNotifications();
    });

    
    document.addEventListener('click', () => {
        notificationsDropdown.classList.add('hidden');
    });

    
    notificationsDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    const cartBtn = document.getElementById('cart-btn');
    const cartDropdown = document.getElementById('cart-dropdown');

    cartBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown.classList.toggle('hidden');
    });

    
    document.addEventListener('click', () => {
        cartDropdown.classList.add('hidden');
    });

    
    cartDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    
    document.getElementById('close-announcement').addEventListener('click', (e) => {
        e.target.closest('div').style.display = 'none';
    });
}



