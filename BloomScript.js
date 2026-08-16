/* =========================================================================
           1) CONFIG — EDIT THIS SECTION WITH YOUR OWN DETAILS
           =========================================================================
           This is the ONLY part of the file you should need to change to make the
           site fully yours. Replace the text inside the quotes " " on each line.
           Do not delete the commas or quotation marks.
        */
const CONFIG = {
    shopName: "Wistful & Bloom", // EDIT: your shop name, shown in the header and footer
    ownerWhatsApp: "918961224516", // FIXED: Added country code 91 for India (digits only)
    ownerPhoneDisplay: "+91 8961224516", // EDIT: your phone number as customers should see/dial it
    ownerAddress: "Howrah, West Bengal, India", // EDIT: Your business display address
    facebookUrl: "https://www.facebook.com/profile.php?id=61592627278956", // EDIT: link to your Facebook page or post
    instagramUrl: "https://www.instagram.com/wistfulbloomshop?igsh=NGZ3ZnliYm9xcTk3&utm_source=ig_contact_invite",
    threadsUrl: "https://www.threads.com/@wistfulbloomshop?invite=0",
};

/* =========================================================================
           2) PRODUCTS — EDIT, ADD, OR REMOVE ITEMS HERE
           =========================================================================
           Categories added: "flowers", "keychain", "clip"
        */
const PRODUCTS = [
    {
        id: "sunflower",
        category: "flowers",
        name: "Sunny Sunflower Stem",
        price: 150,
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
        id: "rainbow",
        category: "flowers",
        name: "Rainbow Mixed Bouquet",
        price: 600,
        emoji: "💐",
        img: "images/flowers/rainbow.jpg",
        images: ["images/flowers/rainbow.jpg"],
        desc: "A vibrant mix of every colour, made to order.",
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
        desc: "A beautiful handmade orange lily with warm sunset-inspired petals and a delicate pearl center, making it a unique and long-lasting keepsake.",
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
        desc: "A handmade pink lily with bright pink petals and vibrant green leaves, carefully crafted to create a bold and elegant bloom that lasts forever.",
    },
    // Keychain Sample Items
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
        id: "flowerKeychain2",
        category: "keychain",
        name: "Mini Flower Charm Keychain",
        price: 49,
        emoji: "🔑",
        img: "images/keychain2.jpeg",
        images: ["images/keychain2.jpeg"],
        desc: "A cute handmade pipe cleaner mini flower keychain charm for bags or keys.",
    },
    // Clip Sample Items
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
];

/* =========================================================================
           3) EVERYTHING BELOW THIS LINE MAKES THE PAGE WORK.
           =========================================================================
        */

// --- Helper function to format WhatsApp numbers safely ---
function getCleanWhatsAppNumber(phone) {
    let digits = phone.replace(/\D/g, "");
    if (digits.length === 10) {
        digits = "91" + digits; // Default to India prefix if only 10 digits are given
    }
    return digits;
}

// Helper to generate universal cross-device WhatsApp links
function getWhatsAppUrl(phone, text = "") {
    const cleanNum = getCleanWhatsAppNumber(phone);
    const encodedText = encodeURIComponent(text);
    return `https://api.whatsapp.com/send?phone=${cleanNum}&text=${encodedText}`;
}

// Universal redirection helper for all devices (Mobile, Tablet, Desktop)
function openWhatsApp(text = "") {
    const url = getWhatsAppUrl(CONFIG.ownerWhatsApp, text);
    // Directly setting location prevents popup block restrictions on mobile browsers
    window.location.href = url;
}

// --- Fill in shop name wherever it appears ---
document.getElementById("nav-shop-name").textContent = CONFIG.shopName;
document.getElementById("footerShopName").textContent = CONFIG.shopName;
document.title = CONFIG.shopName + " - Handmade Pipe Cleaner Creations";

// --- Fill in dynamic seller details in the order info block ---
document.getElementById("seller-phone").textContent = CONFIG.ownerPhoneDisplay;
document.getElementById("seller-address").textContent = CONFIG.ownerAddress;

// --- Build the WhatsApp + Call contact buttons ---
document.getElementById("waContactBtn").href = getWhatsAppUrl(CONFIG.ownerWhatsApp, `Hi ${CONFIG.shopName}! I have an inquiry about your products.`);
document.getElementById("callBtn").href = "tel:" + CONFIG.ownerPhoneDisplay.replace(/\s/g, "");

// --- Render product cards + populate order form dropdown ---
const grid = document.getElementById("productGrid");
const productSelect = document.getElementById("product");
const formCategorySelect = document.getElementById("formCategory");

function renderProducts(category = "all") {
    grid.innerHTML = "";
    
    const filteredProducts = category === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === category);

    filteredProducts.forEach((p) => {
        // Product card
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-id", p.id);
        card.setAttribute("data-category", p.category);
        card.innerHTML = `
        <div class="card-media">
          <img src="${p.img}" alt="${p.name}" loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <div class="placeholder-emoji" style="display:none; align-items:center; justify-content:center; width:100%; height:100%;">
            ${p.emoji}
          </div>
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <p class="desc">${p.desc}</p>
          <div class="card-foot">
            <div class="price">₹${p.price} <small>onwards</small></div>
            <a class="btn btn-dark btn-sm" href="#" data-product="${p.name}">Order on WhatsApp</a>
          </div>
        </div>
      `;
        grid.appendChild(card);
    });
}

function updateProductDropdown(category = "all") {
    // Clear dynamic options (keep default option and Custom option)
    productSelect.innerHTML = `
        <option value="" disabled selected>Select an option</option>
        <option value="Custom / Other (see notes)">Custom / Other (see notes)</option>
    `;

    const filteredProducts = category === "all" 
        ? PRODUCTS 
        : PRODUCTS.filter(p => p.category === category);

    filteredProducts.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.name;
        opt.textContent = p.name + " - ₹" + p.price;
        productSelect.insertBefore(opt, productSelect.lastElementChild);
    });
}

// Initial render
renderProducts("all");
updateProductDropdown("all");

// --- Category Filtering Event Listeners (Shop Section) ---
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedCategory = btn.getAttribute("data-category");
        renderProducts(selectedCategory);

        // Synchronize category dropdown in order form
        if (formCategorySelect) {
            formCategorySelect.value = selectedCategory;
            updateProductDropdown(selectedCategory);
        }
    });
});

// Category Dropdown Change Listener (Order Form Section)
if (formCategorySelect) {
    formCategorySelect.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        updateProductDropdown(selectedCategory);

        // Synchronize Shop Category Buttons
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

// --- Quick "Order on WhatsApp" buttons on each product card ---
grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product]");
    if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const message = `Hi ${CONFIG.shopName}! I'd like to order: ${btn.dataset.product}. Could you tell me more?`;
        openWhatsApp(message);
        return;
    }

    // Open Modal Viewer when clicking on product card/media
    const card = e.target.closest(".card");
    if (card) {
        const productId = card.getAttribute("data-id");
        const product = PRODUCTS.find((p) => p.id === productId);
        if (product) openModal(product);
    }
});

// --- Mobile menu toggle ---
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

// --- Order form: build a WhatsApp message from the entered details ---
const form = document.getElementById("orderForm");
const formMsgSuccess = document.getElementById("formMsgSuccess");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Force the quantity to be an integer, fallback to 1 if empty
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

    // Trigger device-friendly WhatsApp navigation
    openWhatsApp(message);
});

// --- Theme Light/Dark Switcher Feature ---
const themeToggleBtn = document.getElementById("themeToggleBtn");
if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector("i");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        let theme = "dark";
        if (document.body.classList.contains("light-theme")) {
            theme = "light";
            if (themeIcon) themeIcon.classList.replace("fa-sun", "fa-moon");
        } else {
            if (themeIcon) themeIcon.classList.replace("fa-moon", "fa-sun");
        }

        localStorage.setItem("theme", theme);
    });
}

/* =========================================================================
   4) AMAZON-STYLE PRODUCT MODAL LOGIC (IMAGES + VIDEOS)
   ========================================================================= */
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalMainImageWrap = document.querySelector(".modal-main-image-wrap");
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

    // Combine images into media list
    const imgs = product.images && product.images.length ? product.images : [product.img];
    imgs.forEach(src => currentMediaList.push({ type: "image", src }));

    // Append videos to media list if present
    if (product.videos && product.videos.length) {
        product.videos.forEach(src => currentMediaList.push({ type: "video", src }));
    }

    currentMediaIndex = 0;

    modalTitle.textContent = product.name;
    modalPrice.innerHTML = `₹${product.price} <small style="font-size: 0.8rem;">onwards</small>`;
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
    
    // Stop any playing video on close
    const video = modalMainImageWrap.querySelector("video");
    if (video) video.pause();
}

function updateModalGallery() {
    // Remove existing image/video dynamic elements (keep navigation buttons)
    const existingMedia = modalMainImageWrap.querySelector("img, video");
    if (existingMedia) existingMedia.remove();

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

    // Render Thumbnails
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
            thumb.className = "video-thumbnail";
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