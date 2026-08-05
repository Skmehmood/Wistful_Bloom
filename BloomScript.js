/* =========================================================================
           1) CONFIG — EDIT THIS SECTION WITH YOUR OWN DETAILS
           =========================================================================
           This is the ONLY part of the file you should need to change to make the
           site fully yours. Replace the text inside the quotes " " on each line.
           Do not delete the commas or quotation marks.
        */
const CONFIG = {
    shopName: "Wistful & Bloom", // EDIT: your shop name, shown in the header and footer
    ownerWhatsApp: "8621878167", // EDIT: your WhatsApp number — country code + number, digits only, no + no spaces (e.g. India = 91XXXXXXXXXX)
    ownerPhoneDisplay: "+91 8621878767", // EDIT: your phone number as customers should see/dial it
    ownerAddress: "Kolkata, West Bengal, India", // EDIT: Your business display address
    facebookUrl: "https://www.facebook.com/koyel.mallick.194152", // EDIT: link to your Facebook page or post
    instagramUrl: "https://www.instagram.com/wistful_bloom_/",
    threadsUrl: "https://www.threads.com/@wistful_bloom_",
};

/* =========================================================================
           2) PRODUCTS — EDIT, ADD, OR REMOVE FLOWERS HERE
           =========================================================================
           Copy one block (from { to },) to add a new flower. Give it a unique "id".
           "img" should point to a photo inside your "images" folder — if that photo
           isn't found, a flower emoji is shown instead so the page never looks broken.
        */
const PRODUCTS = [
    {
        id: "sunflower",
        name: "Sunny Sunflower Stem",
        price: 150,
        emoji: "🌻",
        img: "images/sunflower.jpg",
        images: ["images/sunflower.jpg"],
        desc: "A single cheerful sunflower, handcrafted stem by stem.",
    },
    {
        id: "rose-bunch",
        name: "Rose Bouquet (6 stems)",
        price: 450,
        emoji: "🌹",
        img: "images/rose-bouquet.jpg",
        images: ["images/rose-bouquet.jpg"],
        desc: "Six ruby-red pipe cleaner roses wrapped in craft paper.",
    },
    {
        id: "daisy",
        name: "Daisy Delight Bunch",
        price: 250,
        emoji: "🌼",
        img: "images/daisy.jpg",
        images: ["images/daisy.jpg"],
        desc: "A cheerful bunch of daisies in soft pastel colours.",
    },
    {
        id: "tulip",
        name: "Tulip Trio",
        price: 300,
        emoji: "🌷",
        img: "images/tulip.jpg",
        images: ["images/tulip.jpg"],
        desc: "Three colourful tulips, perfect for a small vase.",
    },
    {
        id: "lavender",
        name: "Lavender Sprig",
        price: 120,
        emoji: "💜",
        img: "images/lavender.jpg",
        images: ["images/lavender.jpg"],
        desc: "A single calming lavender stem.",
    },
    {
        id: "rainbow",
        name: "Rainbow Mixed Bouquet",
        price: 600,
        emoji: "💐",
        img: "images/rainbow.jpg",
        images: ["images/rainbow.jpg"],
        desc: "A vibrant mix of every colour, made to order.",
    },
    {
        id: "lily",
        name: "Lily",
        price: 89,
        emoji: "🌷",
        img: "images/lily1.jpeg",
        images: ["images/lily1.jpeg", "images/lily2.png", "images/lily3.png"],
        desc: "Handmade pipe cleaner lily shown from various angles.",
    },
];

/* =========================================================================
           3) EVERYTHING BELOW THIS LINE MAKES THE PAGE WORK.
           You don't need to edit anything below — but nothing bad happens if you
           just leave it as is.
           =========================================================================
        */

// --- Fill in shop name wherever it appears ---
document.getElementById("nav-shop-name").textContent = CONFIG.shopName;
document.getElementById("footerShopName").textContent = CONFIG.shopName;
document.title = CONFIG.shopName + " - Handmade Pipe Cleaner Flowers";

// --- Fill in dynamic seller details in the order info block ---
document.getElementById("seller-phone").textContent = CONFIG.ownerPhoneDisplay;
document.getElementById("seller-address").textContent = CONFIG.ownerAddress;

// --- Build the WhatsApp + Call contact buttons ---
document.getElementById("waContactBtn").href =
    "https://wa.me/" + CONFIG.ownerWhatsApp;
document.getElementById("callBtn").href =
    "tel:" + CONFIG.ownerPhoneDisplay.replace(/\s/g, "");

// --- Render product cards + order form dropdown from the PRODUCTS list ---
const grid = document.getElementById("productGrid");
const productSelect = document.getElementById("product");

PRODUCTS.forEach((p) => {
    // Product card
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-id", p.id);
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

    // Dropdown option in the order form
    const opt = document.createElement("option");
    opt.value = p.name;
    productSelect.insertBefore(opt, productSelect.lastElementChild);
    opt.textContent = p.name + " - ₹" + p.price;
});

// --- Quick "Order on WhatsApp" buttons on each product card ---
grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-product]");
    if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const message = `Hi ${CONFIG.shopName}! I'd like to order: ${btn.dataset.product}. Could you tell me more?`;
        window.open(
            "https://wa.me/" +
            CONFIG.ownerWhatsApp +
            "?text=" +
            encodeURIComponent(message),
            "_blank",
        );
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
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// --- Order form: build a WhatsApp message from the entered details ---
const form = document.getElementById("orderForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Force the quantity to be an integer, fallback to 1 if empty
    const rawQuantity = parseInt(form.quantity.value, 10) || 1;
    // Safety check: if the number is less than 1, force it to be 1
    const safeQuantity = Math.max(1, rawQuantity);

    const data = {
        name: form.fullName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        whatsapp: form.whatsapp.value.trim(),
        address: form.address.value.trim(),
        product: form.product.value,
        quantity: safeQuantity.toString(), // Holds the validated positive number
        notes: form.notes.value.trim(),
    };

    const lines = [
        `🌸 New order from ${CONFIG.shopName} website`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `WhatsApp: ${data.whatsapp}`,
        `Address: ${data.address}`,
        `Item: ${data.product}`,
        `Quantity: ${data.quantity}`,
        data.notes ? `Notes: ${data.notes}` : null,
    ].filter(Boolean);

    const message = lines.join("\n");
    window.open(
        "https://wa.me/" +
        CONFIG.ownerWhatsApp +
        "?text=" +
        encodeURIComponent(message),
        "_blank",
    );

    formMsg.style.display = "block";
    form.reset();
});

// --- Theme Light/Dark Switcher Feature ---
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = themeToggleBtn.querySelector("i");

// Check user choice from previous visits
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    let theme = "dark";
    if (document.body.classList.contains("light-theme")) {
        theme = "light";
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    localStorage.setItem("theme", theme);
});

/* =========================================================================
   4) AMAZON-STYLE PRODUCT MODAL LOGIC
   ========================================================================= */
const productModal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalMainImg = document.getElementById("modalMainImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalWaBtn = document.getElementById("modalWaBtn");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentImageList = [];
let currentImageIndex = 0;

function openModal(product) {
    currentImageList = product.images && product.images.length ? product.images : [product.img];
    currentImageIndex = 0;

    modalTitle.textContent = product.name;
    modalPrice.innerHTML = `₹${product.price} <small style="font-size: 0.8rem;">onwards</small>`;
    modalDesc.textContent = product.desc;

    const message = `Hi ${CONFIG.shopName}! I'd like to order: ${product.name}. Could you tell me more?`;
    modalWaBtn.href = "https://wa.me/" + CONFIG.ownerWhatsApp + "?text=" + encodeURIComponent(message);
    modalWaBtn.target = "_blank";

    updateModalGallery();
    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
}

function updateModalGallery() {
    modalMainImg.src = currentImageList[currentImageIndex];
    modalThumbnails.innerHTML = "";

    if (currentImageList.length <= 1) {
        modalPrev.style.display = "none";
        modalNext.style.display = "none";
    } else {
        modalPrev.style.display = "flex";
        modalNext.style.display = "flex";
    }

    currentImageList.forEach((imgSrc, idx) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        if (idx === currentImageIndex) thumb.classList.add("active");
        thumb.addEventListener("click", () => {
            currentImageIndex = idx;
            updateModalGallery();
        });
        modalThumbnails.appendChild(thumb);
    });
}

modalPrev.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + currentImageList.length) % currentImageList.length;
    updateModalGallery();
});

modalNext.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % currentImageList.length;
    updateModalGallery();
});

modalClose.addEventListener("click", closeModal);
productModal.addEventListener("click", (e) => {
    if (e.target === productModal) closeModal();
});