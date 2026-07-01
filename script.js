/* =========================================================
   BLAYCE WILSON — script.js
   Edit the UPLOADS array below whenever a new video drops.
   Each entry builds one card in the "Fresh from the crypt"
   showcase grid automatically — no HTML editing required.
   ========================================================= */

const UPLOADS = [
  {
    title: "The House on Colby Lane Still Has a Light On",
    platform: "YouTube",
    date: "3 days ago",
    duration: "14:22",
    hue: "260, 45%, 18%" // HSL used for the placeholder thumbnail gradient
  },
  {
    title: "I Slept in the Old Asylum So You Don't Have To",
    platform: "TikTok",
    date: "5 days ago",
    duration: "0:58",
    hue: "16, 55%, 20%"
  },
  {
    title: "Ranking Every Urban Legend From My Hometown",
    platform: "Instagram",
    date: "1 week ago",
    duration: "1:12",
    hue: "150, 25%, 16%"
  },
  {
    title: "The 3AM Knock: A Field Recording",
    platform: "YouTube",
    date: "1 week ago",
    duration: "9:47",
    hue: "270, 40%, 15%"
  },
  {
    title: "Why Cemeteries Are Actually the Cozy Option",
    platform: "TikTok",
    date: "2 weeks ago",
    duration: "0:41",
    hue: "20, 50%, 18%"
  },
  {
    title: "Reading Your Scariest Submissions by Candlelight",
    platform: "YouTube",
    date: "2 weeks ago",
    duration: "22:05",
    hue: "255, 35%, 17%"
  }
];

const PLATFORM_LINKS = {
  TikTok: "https://www.tiktok.com/@blaycewilson",
  Instagram: "https://www.instagram.com/blaycewilson",
  YouTube: "https://www.youtube.com/@blaycewilson"
};

function playIconSVG(){
  return `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
}

function renderUploads(){
  const grid = document.getElementById("uploadGrid");
  if (!grid) return;

  grid.innerHTML = UPLOADS.map((item) => `
    <a class="upload-card" href="${PLATFORM_LINKS[item.platform] || '#'}" target="_blank" rel="noopener">
      <div class="upload-card__thumb" style="background: radial-gradient(circle at 30% 20%, hsl(${item.hue}) 0%, #0F0B14 75%);">
        <span class="upload-card__badge">${item.platform}</span>
        <span class="upload-card__play">${playIconSVG()}</span>
        <span class="upload-card__duration">${item.duration}</span>
      </div>
      <div class="upload-card__body">
        <h3 class="upload-card__title">${item.title}</h3>
        <div class="upload-card__meta">
          <span class="platform">${item.platform}</span>
          <span>${item.date}</span>
        </div>
      </div>
    </a>
  `).join("");
}

function setupMobileMenu(){
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("mobileMenu");
  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.classList.toggle("is-active", isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

function setFooterYear(){
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderUploads();
  setupMobileMenu();
  setFooterYear();
});