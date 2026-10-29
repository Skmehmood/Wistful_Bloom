/* =========================================================================
           1) CONFIG — EDIT THIS SECTION WITH YOUR OWN DETAILS
           ========================================================================= */
const CONFIG = {
    shopName: "Wistful & Bloom",
    ownerWhatsApp: "918961224516", 
    ownerPhoneDisplay: "+91 8961224516",
    ownerAddress: "Howrah, West Bengal, India",
    facebookUrl: "https://www.facebook.com/profile.php?id=61592627278956",
    instagramUrl: "https://www.instagram.com/wistfulbloomshop?igsh=NGZ3ZnliYm9xcTk3&utm_source=ig_contact_invite",
    threadsUrl: "https://www.threads.com/@wistfulbloomshop?invite=0",
};

/* =========================================================================
           2) PRODUCTS — EDIT, ADD, OR REMOVE ITEMS HERE
           ========================================================================= */
const PRODUCTS = [
    {
        id: "sunflower",
        category: "flowers",
        name: "Sunny Sunflower Stem",
        price: 89,
        emoji: "🌻",
        img: "images/flowers/sunflower.jpg",
        images: ["images/flowers/sunflower.jpg"],
        desc: "A single cheerful sunflower, handcrafted stem by stem.",
    },
    {
        id: "OliveLavenderRose",
        category: "flowers",
        name: "Olive Lavender Rose",
        price: 89,
        emoji: "🌹",
        img: "images/flowers/OliveLavenderRose1.jpeg",
        images: ["images/flowers/OliveLavenderRose1.jpeg", "images/flowers/OliveLavenderRose2.png", "images/flowers/OliveLavenderRose3.png"],
        videos: ["videos/flowers/OliveLavenderRoseVideo.mp4"],
        desc: "A handmade pipe cleaner olive lavender rose, perfect for gifting or decorating any space.",
    },
    {
        id: "Purpledaisy",
        category: "flowers",
        name: "Purple Daisy",
        price: 89,
        emoji: "🌼",
        img: "images/flowers/Purpledaisy1.jpeg",
        images: ["images/flowers/Purpledaisy1.jpeg", "images/flowers/Purpledaisy2.png", "images/flowers/Purpledaisy3.png"],
        videos: ["videos/flowers/PurpleDaisyVideo.mp4"],
        desc: "A unique pipe cleaner flower, beautifully handcrafted for a thoughtful gift.",
    },
    {
        id: "tulip",
        category: "flowers",
        name: "Tulip Trio",
        price: 300,
        emoji: "🌷",
        img: "images/flowers/tulip.jpg",
        images: ["images/flowers/tulip.jpg"],
        desc: "Three colourful tulips, perfect for a small vase.",
    },
    {
        id: "Olive Lavender Rose",
        category: "flowers",
        name: "Lavender Sprig",
        price: 89,
        emoji: "💜",
        img: "images/flowers/Olive_Lavender_Rose1.jpeg",
        images: ["images/flowers/Olive_Lavender_Rose1.jpeg", "images/flowers/Olive_Lavender_Rose2.png", "images/flowers/Olive_Lavender_Rose3.png"],
        desc: "A single calming lavender stem.",
    },
    {
        id: "Bluelily",
        category: "flowers",
        name: "Blue Lily",
        price: 89,
        emoji: "🌷",
        img: "images/flowers/Bluelily1.jpeg",
        images: ["images/flowers/Bluelily1.jpeg", "images/flowers/Bluelily2.png", "images/flowers/Bluelily3.png"],
        videos: ["videos/flowers/BlueLilyVideo.mp4"],
        desc: "A beautiful handmade blue lily that stays fresh forever, making every moment special.",
    },
    {
        id: "Pinklily",
        category: "flowers",
        name: "Pink Lily",
        price: 89,
        emoji: "🌷",
        img: "images/flowers/Pinklily1.jpeg",
        images: ["images/flowers/Pinklily1.jpeg", "images/flowers/Pinklily2.png", "images/flowers/Pinklily3.png"],
        videos: ["videos/flowers/PinkLilyVideo.mp4"],
        desc: "A handmade pink lily with bright pink petals and vibrant green leaves, carefully crafted to create a bold and elegant bloom that lasts forever.",
    },
    {
        id: "Orangelily",
        category: "flowers",
        name: "Orange Lily",
        price: 89,
        emoji: "🌷",
        img: "images/flowers/Orangelily1.jpeg",
        images: ["images/flowers/Orangelily1.jpeg", "images/flowers/Orangelily2.png", "images/flowers/Orangelily3.png"],
        videos: ["videos/flowers/OrangeLilyVideo.mp4"],
        desc: "A beautiful handmade orange lily with warm sunset-inspired petals and a delicate pearl center.",
    },
    {
        id: "Pastelflower",
        category: "flowers",
        name: "Pastel Flower",
        price: 89,
        emoji: "🌷",
        img: "images/flowers/Pastelflower1.jpeg",
        images: ["images/flowers/Pastelflower1.jpeg", "images/flowers/Pastelflower2.png", "images/flowers/Pastelflower3.png", "images/flowers/Pastelflower4.png", "images/flowers/Pastelflower5.png"],
        videos: ["videos/flowers/PastelFlowerVideo.mp4"],
        desc: "A handmade pastel flower featuring soft purple and mint petals with vibrant green leaves.",
    },
    {
        id: "Pinklily(desing2)",
        category: "flowers",
        name: "Pink Lily (Another Design)",
        price: 89,
        emoji: "🌷",
        img: "images/flowers/Pinklily(design2)1.jpeg",
        images: ["images/flowers/Pinklily(design2)1.jpeg", "images/flowers/Pinklily(design2)2.png", "images/flowers/Pinklily(design2)3.png"],
        videos: ["videos/flowers/PinkLillyVideo(design2).mp4"],
        desc: "A handmade pink lily with bright pink petals and vibrant green leaves.",
    },
    // Keychain Items
    {
        id: "flowerKeychain",
        category: "keychain",
        name: "Mini Flower Charm Keychain",
        price: 49,
        emoji: "🔑",
        img: "images/keychain1.jpeg",
        images: ["images/keychain1.jpeg"],
        desc: "A cute handmade pipe cleaner mini flower keychain charm for bags or keys.",
    },
    {
        id: "jerseyKeychain",
        category: "keychain",
        name: "Dhoni CSK Woolen Jersey Keychain",
        price: 99,
        emoji: "🔑",
        img: "images/keychains/MahiCSK1.png",
        images: ["images/keychains/MahiCSK1.png", "images/keychains/MahiCSK2.png", "images/keychains/MahiCSK3.png", "images/keychains/MahiCSK4.png", "images/keychains/MahiCSK5.png"],
        videos: ["videos/keychains/MahiCSKVideo.mp4"],
        desc: "A charming, hand-stitched mini woolen CSK jersey keychain featuring Dhoni's iconic number 7.",
    },
    // Clip Items
    {
        id: "flowerClip",
        category: "clip",
        name: "Handmade Floral Hair Clip",
        price: 39,
        emoji: "🎀",
        img: "images/clip1.jpeg",
        images: ["images/clip1.jpeg"],
        desc: "A beautifully crafted pipe cleaner bloom attached to a durable hair clip.",
    },
    {
        id: "flowerClip2",
        category: "clip",
        name: "Handmade Floral Hair Clip",
        price: 39,
        emoji: "🎀",
        img: "images/clip2.jpeg",
        images: ["images/clip2.jpeg"],
        desc: "A beautifully crafted pipe cleaner bloom attached to a durable hair clip.",
    },
    // Bouquets
    {
        id: "rainbow",
        category: "bouquets",
        name: "Rainbow Mixed Bouquet",
        price: 599,
        emoji: "💐",
        img: "images/bouquets/rainbow.jpeg",
        images: ["images/bouquets/rainbow.jpeg"],
        desc: "A vibrant mix of every colour, made to order.",
    },
    {
        id: "customize",
        category: "bouquets",
        name: "Birthday Special (Customize)",
        price: 499,
        emoji: "💐",
        img: "images/bouquets/forbirthday.jpeg",
        images: ["images/bouquets/forbirthday.jpeg"],
        desc: "Customize for birthday.",
    },
    {
        id: "normal1",
        category: "bouquets",
        name: "Normal Bouquet",
        price: 259,
        emoji: "💐",
        img: "images/bouquets/normal1.jpeg",
        images: ["images/bouquets/normal1.jpeg"],
        desc: "For normal season.",
    },
    {
        id: "normal2",
        category: "bouquets",
        name: "Normal Bouquet",
        price: 259,
        emoji: "💐",
        img: "images/bouquets/normal2.jpeg",
        images: ["images/bouquets/normal2.jpeg"],
        desc: "For normal season.",
    },
    {
        id: "normal3",
        category: "bouquets",
        name: "Normal Bouquet",
        price: 259,
        emoji: "💐",
        img: "images/bouquets/normal3.jpeg",
        images: ["images/bouquets/normal3.jpeg"],
        desc: "For normal season.",
    }
];

/* =========================================================================
   3) AUTOMATIC SEASONAL & EVENT MANAGER (15-20 Days Prior Display)
   ========================================================================= */
const seasonalEvents = [
    {
        id: "durga_puja",
        name: "Durga Puja Specials 🪔",
        badge: "Durga Puja Collection",
        description: "Handmade festive marigold & lotus pipe cleaner stems for Agamani vibes!",
        startDate: new Date(new Date().getFullYear(), 8, 15), 
        endDate: new Date(new Date().getFullYear(), 9, 15),
        products: [
            { 
                name: "Divine Red Lotus Stem", 
                price: "₹199", 
                numericPrice: 199, 
                desc: "Hand-crafted red pipe cleaner lotus bloom for puja decoration.", 
                emoji: "🪷", 
                category: "festive"
            },
            { 
                name: "Golden Marigold Garland (Genda Phool)", 
                price: "₹349", 
                numericPrice: 349, 
                desc: "Never-fading fluffy marigold stems for your home mandir.", 
                emoji: "🌼", 
                category: "festive" 
            }
        ]
    },
    {
        id: "diwali",
        name: "Diwali Lights & Blooms 🪔",
        badge: "Diwali Special",
        description: "Bright golden & glowing pipe cleaner bouquets to brighten your Deepawali!",
        startDate: new Date(new Date().getFullYear(), 9, 10), 
        endDate: new Date(new Date().getFullYear(), 10, 5),
        products: [
            { 
                name: "Golden Sunburst Diya Bouquet", 
                price: "₹499", 
                numericPrice: 499, 
                desc: "Bright yellow and orange pipe cleaner bouquet with sparkling wire centers.", 
                emoji: "✨", 
                category: "festive" 
            },
            { 
                name: "Festive Marigold & Rose Combo", 
                price: "₹399", 
                numericPrice: 399, 
                desc: "Long-lasting handmade flower arrangement for Diwali decor.", 
                emoji: "🪔", 
                category: "festive" 
            }
        ]
    },
    {
        id: "christmas_newyear",
        name: "Christmas & New Year Wonders 🎄",
        badge: "Holiday Season",
        description: "Cozy red, white & holly green stem arrangements for the holidays!",
        startDate: new Date(new Date().getFullYear(), 11, 5), 
        endDate: new Date(new Date().getFullYear() + 1, 0, 5),
        products: [
            { 
                name: "Poinsettia Red Velvet Stem", 
                price: "₹249", 
                numericPrice: 249, 
                desc: "Classic Christmas red poinsettia flower twisted stem by stem.", 
                emoji: "🎄", 
                category: "festive" 
            },
            { 
                name: "Winter Berry & Holly Bouquet", 
                price: "₹450", 
                numericPrice: 450, 
                desc: "Festive green pine needles & red pipe cleaner berries.", 
                emoji: "❄️", 
                category: "festive" 
            }
        ]
    },
    {
        id: "valentines",
        name: "Valentine's Love Blooms 💖",
        badge: "Valentine's Special",
        description: "Forever roses that never wilt for your special someone!",
        startDate: new Date(new Date().getFullYear(), 0, 25), 
        endDate: new Date(new Date().getFullYear(), 1, 16),
        products: [
            { 
                name: "Forever Red Velvet Rose", 
                price: "₹299", 
                numericPrice: 299, 
                desc: "A single luxury handmade red rose stem that lasts forever.", 
                emoji: "🌹", 
                category: "festive" 
            },
            { 
                name: "Sweetheart Pink Blossom Bunch", 
                price: "₹599", numericPrice: 599, 
                desc: "Soft pink and lavender pipe cleaner flower arrangement.", 
                emoji: "💌", 
                category: "festive" 
            }
        ]
    }
];

let activeEventProducts = [];

function renderSeasonalSection() {
    const today = new Date();
    const activeEvent = seasonalEvents.find(event => today >= event.startDate && today <= event.endDate);

    const eventSection = document.getElementById("eventSection");
    const eventDivider = document.getElementById("eventDivider");
    const productGrid = document.getElementById("eventProductGrid");

    if (!activeEvent) {
        if (eventSection) eventSection.style.display = "none";
        if (eventDivider) eventDivider.style.display = "none";
        activeEventProducts = [];
        return;
    }

    if (eventSection) eventSection.style.display = "block";
    if (eventDivider) eventDivider.style.display = "block";

    document.getElementById("eventBadge").textContent = activeEvent.badge;
    document.getElementById("eventTitle").textContent = activeEvent.name;
    document.getElementById("eventDescription").textContent = activeEvent.description;

    activeEventProducts = activeEvent.products;

    productGrid.innerHTML = activeEvent.products.map(prod => `
        <div class="card event_card">
            <span class="event_badge_tag">Festive Exclusive</span>
            <div class="card_media">
                <span class="placeholder_emoji">${prod.emoji}</span>
            </div>
            <div class="card_body">
                <h3>${prod.name}</h3>
                <p class="desc">${prod.desc}</p>
                <div class="card_foot">
                    <span class="price">${prod.price} <small>/ stem</small></span>
                    <a href="#order" class="btn btn_primary btn_sm" onclick="selectEventProduct('${prod.name}')">Order Now</a>
                </div>
            </div>
        </div>
    `).join('');
}

function selectEventProduct(productName) {
    if (formCategorySelect) {
        formCategorySelect.value = "festive";
        updateProductDropdown("festive");
    }
    
    if (productSelect) {
        productSelect.value = productName;
    }
}

/* =========================================================================
   4) GENERAL UTILITIES & SHOP LOGIC
   ========================================================================= */
function getCleanWhatsAppNumber(phone) {
    let digits = phone.replace(/\D/g, "");
    if (digits.length === 10) {
        digits = "91" + digits;
    }
    return digits;
}

function getWhatsAppUrl(phone, text = "") {
    const cleanNum = getCleanWhatsAppNumber(phone);
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?phone=${cleanNum}&text=${encodedText}`;
}

function openWhatsApp(text = "") {
    const url = getWhatsAppUrl(CONFIG.ownerWhatsApp, text);
    window.location.href = url;
}

document.getElementById("nav_shop_name").textContent = CONFIG.shopName;
document.getElementById("footerShopName").textContent = CONFIG.shopName;
document.title = CONFIG.shopName + " - Handmade Pipe Cleaner Creations";

document.getElementById("seller-phone").textContent = CONFIG.ownerPhoneDisplay;
document.getElementById("seller-address").textContent = CONFIG.ownerAddress;

document.getElementById("waContactBtn").href = getWhatsAppUrl(CONFIG.ownerWhatsApp, `Hi ${CONFIG.shopName}! I have an inquiry about your products.`);
document.getElementById("callBtn").href = "tel:" + CONFIG.ownerPhoneDisplay.replace(/\s/g, "");

const grid = document.getElementById("productGrid");
const productSelect = document.getElementById("product");
const formCategorySelect = document.getElementById("formCategory");

function renderProducts(category = "all") {
    grid.innerHTML = "";
    
    let filteredProducts = [];
    if (category === "all") {
        filteredProducts = PRODUCTS;
    } else if (category === "festive") {
        filteredProducts = activeEventProducts;
    } else {
        filteredProducts = PRODUCTS.filter(p => p.category === category);
    }

    filteredProducts.forEach((p) => {
        const card = document.createElement("div");
        card.className = category === "festive" ? "card event_card" : "card";
        card.setAttribute("data-id", p.id || p.name);
        card.setAttribute("data-category", category);
        card.innerHTML = `
        ${category === "festive" ? '<span class="event_badge_tag">Festive Exclusive</span>' : ''}
        <div class="card_media">
          ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : ''}
          <div class="placeholder_emoji" style="${p.img ? 'display:none;' : 'display:flex;'} align-items:center; justify-content:center; width:100%; height:100%;">
            ${p.emoji}
          </div>
        </div>
        <div class="card_body">
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
          <div class="card_foot">
            <div class="price">${p.price} <small>${category === "festive" ? '/ stem' : 'onwards'}</small></div>
            <a class="btn btn_dark btn_sm" href="#" data-product="${p.name}">Order on WhatsApp</a>
          </div>
        </div>
      `;
        grid.appendChild(card);
    });
}

function updateProductDropdown(category = "all") {
    productSelect.innerHTML = `
        <option value="" disabled selected>Select an option</option>
        <option value="Custom / Other (see notes)">Custom / Other (see notes)</option>
    `;

    let targetProducts = [];
    if (category === "all") {
        targetProducts = [...PRODUCTS, ...activeEventProducts];
    } else if (category === "festive") {
        targetProducts = activeEventProducts;
    } else {
        targetProducts = PRODUCTS.filter(p => p.category === category);
    }

    targetProducts.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.name;
        opt.textContent = p.name + " - " + p.price;
        productSelect.insertBefore(opt, productSelect.lastElementChild);
    });
}

// Initial renders
renderSeasonalSection();
renderProducts("all");
updateProductDropdown("all");

const filterButtons = document.querySelectorAll(".filter_btn");
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedCategory = btn.getAttribute("data-category");
        renderProducts(selectedCategory);

        if (formCategorySelect) {
            formCategorySelect.value = selectedCategory;
            updateProductDropdown(selectedCategory);
        }
    });
});

if (formCategorySelect) {
    formCategorySelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        updateProductDropdown(selectedCategory);

        filterButtons.forEach((b) => {
            if (b.getAttribute("data-category") === selectedCategory) {
                b.classList.add("active");
            } else {
                b.classList.remove("active");
            }
        });
        renderProducts(selectedCategory);
    });
}

grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product]");
    if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const message = `Hi ${CONFIG.shopName}! I'd like to order: ${btn.dataset.product}. Could you tell me more?`;
        openWhatsApp(message);
        return;
    }

    const card = e.target.closest(".card");
    if (card) {
        const productId = card.getAttribute("data-id");
        const product = PRODUCTS.find((p) => p.id === productId || p.name === productId);
        if (product) openModal(product);
    }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
}

const form = document.getElementById("orderForm");
const formMsgSuccess = document.getElementById("formMsgSuccess");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const rawQuantity = parseInt(form.quantity.value, 10) || 1;
    const safeQuantity = Math.max(1, rawQuantity);
    const categoryText = formCategorySelect.options[formCategorySelect.selectedIndex].text;

    const data = {
        name: form.fullName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        whatsapp: form.whatsapp.value.trim(),
        address: form.address.value.trim(),
        category: categoryText,
        product: form.product.value,
        quantity: safeQuantity.toString(),
        notes: form.notes.value.trim(),
    };

    const lines = [
        `🌸 New order from ${CONFIG.shopName} website`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `WhatsApp: ${data.whatsapp}`,
        `Address: ${data.address}`,
        `Category: ${data.category}`,
        `Item: ${data.product}`,
        `Quantity: ${data.quantity}`,
        data.notes ? `Notes: ${data.notes}` : null,
    ].filter(Boolean);

    const message = lines.join("\n");

    if (formMsgSuccess) formMsgSuccess.style.display = "block";
    form.reset();
    openWhatsApp(message);
});

const themeToggleBtn = document.getElementById("themeToggleBtn");
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector("i");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light_theme");
        if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light_theme");

        let theme = "dark";
        if (document.body.classList.contains("light_theme")) {
            theme = "light";
            if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
        } else {
            if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
        }

        localStorage.setItem("theme", theme);
    });
}

/* =========================================================================
   5) AMAZON-STYLE PRODUCT MODAL LOGIC (IMAGES + VIDEOS)
   ========================================================================= */
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalMainImageWrap = document.querySelector(".modal_main_image_wrap");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalWaBtn = document.getElementById("modalWaBtn");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentMediaList = [];
let currentMediaIndex = 0;

function openModal(product) {
    currentMediaList = [];

    const imgs = product.images && product.images.length ? product.images : (product.img ? [product.img] : []);
    imgs.forEach(src => currentMediaList.push({ type: "image", src }));

    if (product.videos && product.videos.length) {
        product.videos.forEach(src => currentMediaList.push({ type: "video", src }));
    }

    currentMediaIndex = 0;

    modalTitle.textContent = product.name;
    modalPrice.innerHTML = `${product.price} <small style="font-size: 0.8rem;">onwards</small>`;
    modalDesc.textContent = product.desc;

    const message = `Hi ${CONFIG.shopName}! I'd like to order: ${product.name}. Could you tell me more?`;
    modalWaBtn.href = getWhatsAppUrl(CONFIG.ownerWhatsApp, message);

    updateModalGallery();
    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    
    const video = modalMainImageWrap.querySelector("video");
    if (video) video.pause();
}

function updateModalGallery() {
    const existingMedia = modalMainImageWrap.querySelector("img, video");
    if (existingMedia) existingMedia.remove();

    if (currentMediaList.length === 0) {
        const placeholder = document.createElement("div");
        placeholder.style.display = "flex";
        placeholder.style.alignItems = "center";
        placeholder.style.justifyContent = "center";
        placeholder.style.width = "100%";
        placeholder.style.height = "100%";
        placeholder.style.fontSize = "4rem";
        placeholder.textContent = "🎁";
        modalMainImageWrap.appendChild(placeholder);
        modalThumbnails.innerHTML = "";
        modalPrev.style.display = "none";
        modalNext.style.display = "none";
        return;
    }

    const mediaItem = currentMediaList[currentMediaIndex];

    if (mediaItem.type === "image") {
        const img = document.createElement("img");
        img.id = "modalMainImg";
        img.src = mediaItem.src;
        img.alt = "Product View";
        modalMainImageWrap.appendChild(img);
    } else if (mediaItem.type === "video") {
        const video = document.createElement("video");
        video.id = "modalMainImg";
        video.autoplay = true;
        video.controls = true;
        video.loop = true;
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";

        const source = document.createElement("source");
        source.src = mediaItem.src;
        source.type = "video/mp4";
        video.appendChild(source);

        modalMainImageWrap.appendChild(video);
        video.play().catch(() => {});
    }

    modalThumbnails.innerHTML = "";

    if (currentMediaList.length <= 1) {
        modalPrev.style.display = "none";
        modalNext.style.display = "none";
    } else {
        modalPrev.style.display = "flex";
        modalNext.style.display = "flex";
    }

    currentMediaList.forEach((item, idx) => {
        let thumb;
        if (item.type === "image") {
            thumb = document.createElement("img");
            thumb.src = item.src;
        } else {
            thumb = document.createElement("div");
            thumb.className = "video_thumbnail";
            thumb.innerHTML = `<i class="fa-solid fa-play"></i>`;
        }

        if (idx === currentMediaIndex) thumb.classList.add("active");
        thumb.addEventListener("click", () => {
            currentMediaIndex = idx;
            updateModalGallery();
        });
        modalThumbnails.appendChild(thumb);
    });
}

if (modalPrev) {
    modalPrev.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex - 1 + currentMediaList.length) % currentMediaList.length;
        updateModalGallery();
    });
}

if (modalNext) {
    modalNext.addEventListener("click", () => {
        currentMediaIndex = (currentMediaIndex + 1) % currentMediaList.length;
        updateModalGallery();
    });
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (productModal) {
    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) closeModal();
    });
}