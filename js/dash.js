// DOM Elements
const mobileMenuButton = document.getElementById('mobileMenuButton');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebar = document.querySelector('.sidebar');
const searchButton = document.getElementById('searchButton');
const searchBox = document.getElementById('searchBox');
const userMenuButton = document.getElementById('userMenuButton');
const userMenu = document.getElementById('userMenu');
const signOutBtns = [document.getElementById('signOutBtn'), document.getElementById('signOutBtn2')];
const pageTitle = document.getElementById('pageTitle');
const mainContent = document.getElementById('mainContent');
const navLinks = document.querySelectorAll('.nav-link');
const dashboardContent = document.getElementById('dashboardContent');
const marketplaceContent = document.getElementById('marketplaceContent');
const sellContent = document.getElementById('sellContent');
const profileContent = document.getElementById('profileContent');
const messagesContent = document.getElementById('messagesContent');
const sellItemBtn = document.getElementById('sellItemBtn');
const addListingBtn = document.getElementById('addListingBtn');
const sellItemForm = document.getElementById('sellItemForm');
const cancelSellBtn = document.getElementById('cancelSellBtn');
const listingModal = document.getElementById('listingModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const toast = document.getElementById('toast');
const profileEditForm = document.getElementById('profileEditForm');
const changePasswordForm = document.getElementById('changePasswordForm');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');
const emptyConversation = document.getElementById('emptyConversation');
const activeConversation = document.getElementById('activeConversation');


let currentPage = 'dashboard';
let currentConversation = null;


const messagesData = {
    'Sarah Johnson': [
        { sender: 'Sarah Johnson', text: 'Hi, is the Calculus textbook still available?', time: '10:30 AM' },
        { sender: 'You', text: 'Yes, it is! Are you interested?', time: '10:32 AM' },
        { sender: 'Sarah Johnson', text: 'Yes, can we meet tomorrow at the library?', time: '10:35 AM' }
    ],
    'Rahul Sharma': [
        { sender: 'Rahul Sharma', text: 'Hello, is the calculator still available?', time: '9:15 AM' },
        { sender: 'You', text: 'Yes, it is. The price is ₹800', time: '9:20 AM' },
        { sender: 'Rahul Sharma', text: 'Can you do ₹700?', time: '9:22 AM' }
    ]
};


document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
});

function setupEventListeners() {
  
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    sidebarOverlay.addEventListener('click', toggleMobileMenu);

  
    searchButton.addEventListener('click', toggleSearchBox);

    userMenuButton.addEventListener('click', toggleUserMenu);

   
    signOutBtns.forEach(btn => {
        btn.addEventListener('click', handleSignOut);
    });

    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('data-page') === 'marketplace') {
                
                return;
            }
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
        });
    });

    
    sellItemBtn.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo('sell');
    });

    addListingBtn.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo('sell');
    });

   
    sellItemForm.addEventListener('submit', handleSellItemSubmit);
    cancelSellBtn.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo('dashboard');
    });

   
    closeModalBtn.addEventListener('click', closeModal);

  
    profileEditForm.addEventListener('submit', handleProfileEditSubmit);

    
    changePasswordForm.addEventListener('submit', handleChangePasswordSubmit);

  
    messageForm.addEventListener('submit', handleMessageSubmit);
}

function toggleMobileMenu() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('open');
}

function toggleSearchBox() {
    searchBox.classList.toggle('hidden');
    if (!searchBox.classList.contains('hidden')) {
        searchInput.focus();
    }
}

function toggleUserMenu() {
    userMenu.classList.toggle('hidden');
}

function handleSignOut() {
    showToast('You have been signed out', 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

function navigateTo(page) {
    currentPage = page;

    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    
    pageTitle.textContent = page.charAt(0).toUpperCase() + page.slice(1);

  
    document.querySelectorAll('#mainContent > div').forEach(section => {
        section.classList.add('hidden');
    });

    
    if (page === 'dashboard') {
        dashboardContent.classList.remove('hidden');
    } else if (page === 'marketplace') {
        marketplaceContent.classList.remove('hidden');
    } else if (page === 'sell') {
        sellContent.classList.remove('hidden');
    } else if (page === 'profile') {
        profileContent.classList.remove('hidden');
    } else if (page === 'messages') {
        messagesContent.classList.remove('hidden');
    }

  
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
}

function handleSellItemSubmit(event) {
    event.preventDefault();

   
    const title = document.getElementById('itemTitle').value;
    const description = document.getElementById('itemDescription').value;
    const category = document.getElementById('itemCategory').value;
    const price = document.getElementById('itemPrice').value;

   
    if (!title || !description || !category || !price) {
        showToast('Please fill all fields', 'error');
        return;
    }

   
    submitBtnText.textContent = 'Processing...';
    submitSpinner.classList.remove('hidden');
    submitListingBtn.disabled = true;

   
    setTimeout(() => {
        
        sellItemForm.reset();

      
        submitBtnText.textContent = 'List Item';
        submitSpinner.classList.add('hidden');
        submitListingBtn.disabled = false;

       
        showToast('Your item has been listed successfully!', 'success');

        
        navigateTo('dashboard');
    }, 1500);
}

function toggleEditProfile() {
    const editForm = document.getElementById('editProfileForm');
    editForm.classList.toggle('hidden');
}

function handleProfileEditSubmit(event) {
    event.preventDefault();

    
    const name = document.getElementById('editName').value;
    const course = document.getElementById('editCourse').value;
    const phone = document.getElementById('editPhone').value;

   
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileCourse').textContent = course;
    document.getElementById('profilePhone').textContent = phone;

    
    toggleEditProfile();

  
    showToast('Profile updated successfully!', 'success');
}

function handleChangePasswordSubmit(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

   
    if (!currentPassword || !newPassword || !confirmPassword) {
        showToast('Please fill all fields', 'error');
        return;
    }

    if (newPassword !== confirmPassword) {
        showToast('New passwords do not match', 'error');
        return;
    }


    setTimeout(() => {
       
        changePasswordForm.reset();

      
        showToast('Password changed successfully!', 'success');
    }, 1000);
}

function updateProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profileImage').src = e.target.result;
            showToast('Profile image updated!', 'success');
        };
        reader.readAsDataURL(file);
    }
}

function loadConversation(contactName) {
    currentConversation = contactName;


    document.getElementById('conversationName').textContent = contactName;
    document.getElementById('conversationAvatar').src = contactName === 'Sarah Johnson' ?
        'https://randomuser.me/api/portraits/men/44.jpg' :
        'https://randomuser.me/api/portraits/men/22.jpg';

   
    emptyConversation.classList.add('hidden');
    activeConversation.classList.remove('hidden');

   
    renderMessages(contactName);
}

function renderMessages(contactName) {
  
    messageContainer.innerHTML = '';

   
    const messages = messagesData[contactName] || [];

  
    messages.forEach(msg => {
        const isSent = msg.sender === 'You';

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;

        messageDiv.innerHTML = `
            <div class="message-bubble">
                <div>${msg.text}</div>
                <div class="message-time">${msg.time}</div>
            </div>
        `;

        messageContainer.appendChild(messageDiv);
    });

    
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function handleMessageSubmit(event) {
    event.preventDefault();

    const messageText = messageInput.value.trim();
    if (!messageText || !currentConversation) return;

   
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
        sender: 'You',
        text: messageText,
        time: timeString
    };

    // Add to messages data
    if (!messagesData[currentConversation]) {
        messagesData[currentConversation] = [];
    }
    messagesData[currentConversation].push(newMessage);

   
    messageInput.value = '';

 
    renderMessages(currentConversation);


    setTimeout(() => {
        const replyMessage = {
            sender: currentConversation,
            text: getRandomReply(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        messagesData[currentConversation].push(replyMessage);
        renderMessages(currentConversation);
    }, 1000);
}

function getRandomReply() {
    const replies = [
        "Sounds good!",
        "I'll get back to you on that.",
        "When can we meet?",
        "Can you do a lower price?",
        "Thanks for letting me know!",
        "I'm interested, let's discuss."
    ];
    return replies[Math.floor(Math.random() * replies.length)];
}

function startNewMessage(contactName) {
    navigateTo('messages');
    setTimeout(() => {
        loadConversation(contactName);
    }, 100);
}

function showItemModal(event, id) {
    event.preventDefault();
    listingModal.classList.remove('hidden');
}

function closeModal() {
    listingModal.classList.add('hidden');
}

function purchaseItem(id) {
    showToast('Purchase initiated', 'success');
    closeModal();
}

function messageSeller(id) {
    showToast('Opening conversation with seller', 'info');
    startNewMessage('Rahul Sharma');
    closeModal();
}

function editListing(id) {
    showToast(`Editing listing #${id}`, 'info');
}

function deleteListing(id) {
    if (confirm('Are you sure you want to delete this listing?')) {
        showToast('Listing deleted successfully', 'success');
    }
}

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type === 'error' ? 'error' : type === 'info' ? 'info' : ''}`;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

window.showItemModal = showItemModal;
window.closeModal = closeModal;
window.purchaseItem = purchaseItem;
window.messageSeller = messageSeller;
window.editListing = editListing;
window.deleteListing = deleteListing;
window.startNewMessage = startNewMessage;
window.loadConversation = loadConversation;