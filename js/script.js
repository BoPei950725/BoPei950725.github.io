document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.classList.add('loaded');
        document.body.classList.remove('loading');
    }, 2000);
    const cursor = document.querySelector('.sunlight-cursor');
    window.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    });
    function attachHoverEffects() {
        const hoverables = document.querySelectorAll('a, button, .product-card, .gallery-item, .feature-card, .journal-entry, .cat-btn, .icon-link');
        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovered');
            });
        });
    }
    attachHoverEffects();
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });
    const heroSection = document.querySelector('.hero-collage-section');
    const floatItems = document.querySelectorAll('.float-item');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            floatItems.forEach(item => {
                const speed = item.getAttribute('data-speed');
                const xPos = x * speed;
                const yPos = y * speed;
                let rotation = 0;
                if (item.classList.contains('camera-main')) rotation = -5;
                if (item.classList.contains('photo-1')) rotation = 10;
                if (item.classList.contains('film-roll')) rotation = 15;
                item.style.transform = `translateX(${xPos}px) translateY(${yPos}px) rotate(${rotation}deg)`;
            });
        });
    }
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    const memoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('developed');
                memoryObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    const heroImg = document.querySelector('.hero-bg img');
    if (heroImg) memoryObserver.observe(heroImg);
    const memoryImages = document.querySelectorAll('.memory-img');
    memoryImages.forEach(img => memoryObserver.observe(img));
    const products = [
        {
            id: 1,
            name: 'Canon AE-1 Program',
            price: 8500,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800'
        },
        {
            id: 2,
            name: 'Nikon FM2',
            price: 12000,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800'
        },
        {
            id: 3,
            name: 'Olympus OM-1',
            price: 7800,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1594912765377-512133245f74?q=80&w=800'
        },
        {
            id: 4,
            name: 'Pentax K1000',
            price: 6500,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=800'
        },
        {
            id: 5,
            name: 'Leica M6',
            price: 98000,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1564466021188-1e17010c541c?q=80&w=800'
        },
        {
            id: 6,
            name: 'Kodak Portra 400',
            price: 580,
            category: 'Film',
            image: 'https://images.unsplash.com/photo-1595514020176-896eb7c394b4?q=80&w=800'
        },
        {
            id: 7,
            name: 'Contax T2',
            price: 35000,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800'
        },
        {
            id: 8,
            name: 'Hasselblad 500CM',
            price: 65000,
            category: 'Cameras',
            image: 'https://images.unsplash.com/photo-1533158388470-9a56699990c6?q=80&w=800'
        },
        {
            id: 9,
            name: 'Fujifilm C200',
            price: 320,
            category: 'Film',
            image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800'
        },
        {
            id: 10,
            name: 'Canon 50mm f/1.4',
            price: 4500,
            category: 'Lenses',
            image: 'https://images.unsplash.com/photo-1616423664045-60dd55b87d36?q=80&w=800'
        },
        {
            id: 11,
            name: 'Zeiss Planar 80mm',
            price: 22000,
            category: 'Lenses',
            image: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=800'
        }
    ];
    let cart = [];
    const cartCountEl = document.querySelector('.cart-count');
    const cartModalOverlay = document.querySelector('.cart-modal-overlay');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalEl = document.querySelector('.total-price');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const cartTrigger = document.querySelector('.cart-trigger');
    if (cartTrigger) {
        cartTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            cartModalOverlay.classList.add('open');
        });
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartModalOverlay.classList.remove('open');
        });
    }
    if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', (e) => {
            if (e.target === cartModalOverlay) {
                cartModalOverlay.classList.remove('open');
            }
        });
    }
    function updateCartUI() {
        cartCountEl.textContent = cart.length;
        cartCountEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCountEl.style.transform = 'scale(1)';
        }, 200);
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">購物車是空的</div>';
            cartTotalEl.textContent = 'NT$ 0';
        } else {
            cartItemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">NT$ ${item.price.toLocaleString()}</div>
                        <button class="remove-item-btn" data-index="${index}">移除</button>
                    </div>
                </div>
            `).join('');
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            cartTotalEl.textContent = `NT$ ${total.toLocaleString()}`;
            const removeBtns = document.querySelectorAll('.remove-item-btn');
            removeBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    cart.splice(index, 1);
                    updateCartUI();
                });
            });
        }
    }
    function addToCart(product) {
        cart.push(product);
        updateCartUI();
        cartModalOverlay.classList.add('open');
    }
    const staticAddBtns = document.querySelectorAll('.new-arrivals-section .add-to-cart-btn');
    staticAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = btn.closest('.product-card');
            const name = card.querySelector('.product-name').textContent;
            const priceStr = card.querySelector('.product-price').textContent;
            const price = parseInt(priceStr.replace(/[^0-9]/g, ''));
            const img = card.querySelector('img').src;
            addToCart({ id: 'static-' + Date.now(), name, price, img });
        });
    });
    const productList = document.getElementById('product-list');
    function renderProducts(filterCategory = 'All') {
        if (!productList) return;
        const filteredProducts = filterCategory === 'All'
            ? products
            : products.filter(p => p.category === filterCategory);
        productList.innerHTML = filteredProducts.map(product => {
            const badges = ['Rare', 'Hot', 'New', ''];
            const randomBadge = badges[Math.floor(Math.random() * badges.length)];
            const badgeHTML = randomBadge ? `<div class="badge">${randomBadge}</div>` : '';
            return `
            <div class="product-card">
                <div class="retro-corner corner-tl"></div>
                <div class="retro-corner corner-br"></div>
                ${badgeHTML}
                <img src="${product.image}" alt="${product.name}" class="product-img memory-img">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">NT$ ${product.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-img="${product.image}">加入購物車</button>
            </div>
            `;
        }).join('');
        const newImages = productList.querySelectorAll('.memory-img');
        newImages.forEach(img => memoryObserver.observe(img));
        attachHoverEffects();
        const dynamicAddBtns = productList.querySelectorAll('.add-to-cart-btn');
        dynamicAddBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                const name = e.target.dataset.name;
                const price = parseInt(e.target.dataset.price);
                const img = e.target.dataset.img;
                addToCart({id, name, price, img});
            });
        });
    }
    renderProducts();
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.textContent;
            renderProducts(category);
        });
    });
    const loginModalOverlay = document.querySelector('.login-modal-overlay');
    const closeLoginBtn = document.querySelector('.close-login-btn');
    const userIcon = document.querySelector('.fa-user').parentElement;
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    if (userIcon) {
        userIcon.addEventListener('click', (e) => {
            e.preventDefault();
            loginModalOverlay.classList.add('open');
        });
    }
    if (closeLoginBtn) {
        closeLoginBtn.addEventListener('click', () => {
            loginModalOverlay.classList.remove('open');
        });
    }
    if (loginModalOverlay) {
        loginModalOverlay.addEventListener('click', (e) => {
            if (e.target === loginModalOverlay) {
                loginModalOverlay.classList.remove('open');
            }
        });
    }
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            authForms.forEach(form => form.classList.remove('active'));
            const targetId = btn.dataset.tab + '-form';
            document.getElementById(targetId).classList.add('active');
        });
    });
    authForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const type = form.id === 'login-form' ? '登入' : '註冊';
            alert(`${type}成功！歡迎回到映像販賣所。`);
            loginModalOverlay.classList.remove('open');
        });
    });
    const galleryWrapper = document.querySelector('.gallery-scroll-wrapper');
    if (galleryWrapper) {
        galleryWrapper.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            galleryWrapper.scrollLeft += evt.deltaY;
        });
    }
});