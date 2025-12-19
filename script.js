const defaultConfig = {
  bride_name: "Varo",
  groom_name: "Ansel",
  opening_title: "THE WEDDING OF",
  opening_couple_image: "",
  bride_photo_image: "",
  groom_photo_image: "",
  quran_verse: '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."',
  quran_source: "QS. Ar-Rum: 21",
  bride_full_name: "Varo Amelia Putri",
  bride_father: "Bapak Ahmad",
  bride_mother: "Ibu Siti",
  bride_instagram: "@varoamelia",
  groom_full_name: "Ansel Mahendra",
  groom_father: "Bapak Budi",
  groom_mother: "Ibu Rina",
  groom_instagram: "@anselmahendra",
  love_quote: '"Cinta adalah menemukan orang yang tepat di waktu yang tepat, yang membuat hidup terasa lebih indah dan bermakna."',
  story_1_date: "Januari 2020",
  story_1_title: "First Meet",
  story_1_text: "Pertemuan pertama kami yang tak terduga di sebuah acara kampus. Saat itu kami tidak menyangka bahwa pertemuan singkat itu akan menjadi awal dari sebuah kisah cinta yang indah.",
  story_2_date: "Juni 2021",
  story_2_title: "The Relationship",
  story_2_text: "Kami memulai perjalanan sebagai sepasang kekasih. Setiap hari terasa istimewa, penuh dengan tawa, cerita, dan kenangan indah yang terus kami ciptakan bersama.",
  story_3_date: "Desember 2023",
  story_3_title: "The Proposal",
  story_3_text: "Momen yang tak terlupakan ketika ia berlutut dan mengajukan pertanyaan yang paling ditunggu. Dengan hati penuh bahagia, kami siap memulai babak baru dalam hidup bersama.",
  gallery_0_image: "",
  gallery_1_image: "",
  gallery_2_image: "",
  gallery_3_image: "",
  gallery_4_image: "",
  gallery_5_image: "",
  gallery_6_image: "",
  gallery_7_image: "",
  gallery_8_image: "",
  gallery_9_image: "",
  wedding_date: "2024-12-31",
  akad_date: "Sabtu, 31 Desember 2024",
  akad_time: "09:00 - 10:00 WIB",
  akad_venue: "Grand Ballroom Hotel Santika",
  akad_address: "Jl. Gatot Subroto No. 123, Jakarta Selatan",
  akad_maps: "https://maps.google.com",
  resepsi_date: "Sabtu, 31 Desember 2024",
  resepsi_time: "11:00 - 14:00 WIB",
  resepsi_venue: "Grand Ballroom Hotel Santika",
  resepsi_address: "Jl. Gatot Subroto No. 123, Jakarta Selatan",
  resepsi_maps: "https://maps.google.com",
  bank_name: "Bank BCA",
  account_number: "1234567890",
  account_name: "Ansel Mahendra",
  closing_text: "Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami. Atas kehadiran serta doa restu, kami ucapkan terima kasih."
};

let guestData = [];
let selectedAttendance = null;

async function onConfigChange(config) {
  // Safe helper to set text content
  const safeSetText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Cover names
  safeSetText('cover-bride-name', config.bride_name || defaultConfig.bride_name);
  safeSetText('cover-groom-name', config.groom_name || defaultConfig.groom_name);

  // Opening section
  safeSetText('opening-title', config.opening_title || defaultConfig.opening_title);
  safeSetText('opening-bride', config.bride_name || defaultConfig.bride_name);
  safeSetText('opening-groom', config.groom_name || defaultConfig.groom_name);

  // Opening couple photo
  const openingCouplePhoto = document.getElementById('opening-couple-photo');
  if (openingCouplePhoto && config.opening_couple_image) {
    openingCouplePhoto.style.backgroundImage = `url('${config.opening_couple_image}')`;
    openingCouplePhoto.style.backgroundSize = 'cover';
    openingCouplePhoto.style.backgroundPosition = 'center';
    openingCouplePhoto.innerHTML = '';
  }

  // Quran
  safeSetText('quran-verse', config.quran_verse || defaultConfig.quran_verse);
  safeSetText('quran-source', config.quran_source || defaultConfig.quran_source);

  // Bride
  safeSetText('bride-full-name', config.bride_full_name || defaultConfig.bride_full_name);
  safeSetText('bride-father', config.bride_father || defaultConfig.bride_father);
  safeSetText('bride-mother', config.bride_mother || defaultConfig.bride_mother);
  safeSetText('bride-instagram', config.bride_instagram || defaultConfig.bride_instagram);
  const brideIg = (config.bride_instagram || defaultConfig.bride_instagram).replace('@', '');
  const brideIgLink = document.getElementById('bride-instagram-link');
  if (brideIgLink) brideIgLink.href = `https://instagram.com/${brideIg}`;

  // Bride photo
  const bridePhoto = document.getElementById('bride-photo');
  if (bridePhoto && config.bride_photo_image) {
    bridePhoto.style.backgroundImage = `url('${config.bride_photo_image}')`;
    bridePhoto.style.backgroundSize = 'cover';
    bridePhoto.style.backgroundPosition = 'center';
    bridePhoto.innerHTML = '';
  }

  // Groom
  safeSetText('groom-full-name', config.groom_full_name || defaultConfig.groom_full_name);
  safeSetText('groom-father', config.groom_father || defaultConfig.groom_father);
  safeSetText('groom-mother', config.groom_mother || defaultConfig.groom_mother);
  safeSetText('groom-instagram', config.groom_instagram || defaultConfig.groom_instagram);
  const groomIg = (config.groom_instagram || defaultConfig.groom_instagram).replace('@', '');
  const groomIgLink = document.getElementById('groom-instagram-link');
  if (groomIgLink) groomIgLink.href = `https://instagram.com/${groomIg}`;

  // Groom photo
  const groomPhoto = document.getElementById('groom-photo');
  if (groomPhoto && config.groom_photo_image) {
    groomPhoto.style.backgroundImage = `url('${config.groom_photo_image}')`;
    groomPhoto.style.backgroundSize = 'cover';
    groomPhoto.style.backgroundPosition = 'center';
    groomPhoto.innerHTML = '';
  }

  // Love quote
  safeSetText('love-quote', config.love_quote || defaultConfig.love_quote);

  // Story
  safeSetText('story-1-date', config.story_1_date || defaultConfig.story_1_date);
  safeSetText('story-1-title', config.story_1_title || defaultConfig.story_1_title);
  safeSetText('story-1-text', config.story_1_text || defaultConfig.story_1_text);
  safeSetText('story-2-date', config.story_2_date || defaultConfig.story_2_date);
  safeSetText('story-2-title', config.story_2_title || defaultConfig.story_2_title);
  safeSetText('story-2-text', config.story_2_text || defaultConfig.story_2_text);
  safeSetText('story-3-date', config.story_3_date || defaultConfig.story_3_date);
  safeSetText('story-3-title', config.story_3_title || defaultConfig.story_3_title);
  safeSetText('story-3-text', config.story_3_text || defaultConfig.story_3_text);

  // Story images
  const story1Bg = document.getElementById('story-1-bg');
  if (story1Bg && config.story_1_image) {
    story1Bg.style.background = `url('${config.story_1_image}') center/cover`;
  }
  const story2Bg = document.getElementById('story-2-bg');
  if (story2Bg && config.story_2_image) {
    story2Bg.style.background = `url('${config.story_2_image}') center/cover`;
  }
  const story3Bg = document.getElementById('story-3-bg');
  if (story3Bg && config.story_3_image) {
    story3Bg.style.background = `url('${config.story_3_image}') center/cover`;
  }

  // Gallery photos
  updateGalleryFromConfig();

  // Event
  safeSetText('akad-date', config.akad_date || defaultConfig.akad_date);
  safeSetText('akad-time', config.akad_time || defaultConfig.akad_time);
  safeSetText('akad-venue', config.akad_venue || defaultConfig.akad_venue);
  safeSetText('akad-address', config.akad_address || defaultConfig.akad_address);
  const akadMapsLink = document.getElementById('akad-maps-link');
  if (akadMapsLink) akadMapsLink.href = config.akad_maps || defaultConfig.akad_maps;

  safeSetText('resepsi-date', config.resepsi_date || defaultConfig.resepsi_date);
  safeSetText('resepsi-time', config.resepsi_time || defaultConfig.resepsi_time);
  safeSetText('resepsi-venue', config.resepsi_venue || defaultConfig.resepsi_venue);
  safeSetText('resepsi-address', config.resepsi_address || defaultConfig.resepsi_address);
  const resepsiMapsLink = document.getElementById('resepsi-maps-link');
  if (resepsiMapsLink) resepsiMapsLink.href = config.resepsi_maps || defaultConfig.resepsi_maps;

  // Gift
  safeSetText('gift-bank', config.bank_name || defaultConfig.bank_name);
  safeSetText('gift-account', config.account_number || defaultConfig.account_number);
  safeSetText('gift-name', `a.n. ${config.account_name || defaultConfig.account_name}`);

  // Closing
  safeSetText('closing-text', config.closing_text || defaultConfig.closing_text);
  safeSetText('closing-bride-name', config.bride_name || defaultConfig.bride_name);
  safeSetText('closing-groom-name', config.groom_name || defaultConfig.groom_name);
}

const dataHandler = {
  onDataChanged(data) {
    guestData = data;
    renderWishes();
  }
};

function renderWishes() {
  const wishesList = document.getElementById('wishes-list');
  const messagesWithText = guestData.filter(g => g.message && g.message.trim() !== '');

  if (messagesWithText.length === 0) {
    wishesList.innerHTML = '<p class="text-center" style="color: #999; font-style: italic;">Belum ada ucapan 💝</p>';
    return;
  }

  wishesList.innerHTML = messagesWithText
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .map(g => `
      <div class="message-card">
        <div class="flex items-start justify-between mb-2">
          <p class="font-bold text-lg gold-text">${escapeHtml(g.guest_name)}</p>
          <span class="text-xs" style="color: #999;">${formatDate(g.created_at)}</span>
        </div>
        <p class="text-base leading-relaxed" style="color: #555;">${escapeHtml(g.message)}</p>
      </div>
    `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

document.getElementById('open-invitation-btn').addEventListener('click', () => {
  const appContainer = document.getElementById('app-container');
  const mainContent = document.getElementById('main-content');

  // Toggle split screen state
  appContainer.classList.add('is-opened');

  // Ensure main content is visible for animations
  mainContent.style.display = 'block';

  window.scrollTo(0, 0);

  document.querySelectorAll('.slide-up').forEach(el => {
    observer.observe(el);
  });
});

// RSVP attendance buttons
document.getElementById('btn-attend').addEventListener('click', function () {
  selectedAttendance = 'attend';
  document.getElementById('attendance-value').value = 'attend';
  this.classList.add('selected');
  document.getElementById('btn-unable').classList.remove('selected');
  document.getElementById('guest-count-section').style.display = 'block';
});

document.getElementById('btn-unable').addEventListener('click', function () {
  selectedAttendance = 'unable';
  document.getElementById('attendance-value').value = 'unable';
  this.classList.add('selected');
  document.getElementById('btn-attend').classList.remove('selected');
  document.getElementById('guest-count-section').style.display = 'none';
});

document.getElementById('rsvp-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  if (!selectedAttendance) {
    const statusEl = document.getElementById('rsvp-status');
    statusEl.innerHTML = '<span style="color: #dc2626; font-weight: 600;">⚠️ Please select your attendance</span>';
    return;
  }

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const statusEl = document.getElementById('rsvp-status');

  if (guestData.length >= 999) {
    statusEl.innerHTML = '<span style="color: #dc2626; font-weight: 600;">⚠️ Maximum limit reached</span>';
    return;
  }

  submitBtn.classList.add('loading');
  submitBtn.textContent = 'SENDING...';
  statusEl.textContent = '';

  const guestName = document.getElementById('rsvp-name').value;
  const guestCount = selectedAttendance === 'attend' ? parseInt(document.getElementById('rsvp-count').value) : 0;

  const result = await window.dataSdk.create({
    guest_name: guestName,
    attendance: selectedAttendance,
    guest_count: guestCount,
    message: '',
    created_at: new Date().toISOString()
  });

  submitBtn.classList.remove('loading');
  submitBtn.textContent = 'SEND CONFIRMATION';

  if (result.isOk) {
    statusEl.innerHTML = '<span style="color: #16a34a; font-weight: 600;">✓ Thank you for your confirmation!</span>';
    form.reset();
    selectedAttendance = null;
    document.getElementById('btn-attend').classList.remove('selected');
    document.getElementById('btn-unable').classList.remove('selected');
    document.getElementById('guest-count-section').style.display = 'none';
  } else {
    statusEl.innerHTML = '<span style="color: #dc2626; font-weight: 600;">✗ Error occurred. Please try again.</span>';
  }
});

document.getElementById('wish-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const statusEl = document.getElementById('wish-status');

  if (guestData.length >= 999) {
    statusEl.innerHTML = '<span style="color: #dc2626; font-weight: 600;">⚠️ Maximum limit reached</span>';
    return;
  }

  submitBtn.classList.add('loading');
  submitBtn.textContent = 'SENDING...';
  statusEl.textContent = '';

  const guestName = document.getElementById('wish-name').value;
  const message = document.getElementById('wish-message').value;

  const result = await window.dataSdk.create({
    guest_name: guestName,
    attendance: 'wish',
    guest_count: 0,
    message: message,
    created_at: new Date().toISOString()
  });

  submitBtn.classList.remove('loading');
  submitBtn.textContent = 'SEND WISHES';

  if (result.isOk) {
    statusEl.innerHTML = '<span style="color: #16a34a; font-weight: 600;">✓ Thank you for your wishes!</span>';
    form.reset();
  } else {
    statusEl.innerHTML = '<span style="color: #dc2626; font-weight: 600;">✗ Error occurred. Please try again.</span>';
  }
});

document.getElementById('toggle-gift-btn').addEventListener('click', () => {
  const giftBox = document.getElementById('gift-box');
  const btn = document.getElementById('toggle-gift-btn');

  if (giftBox.classList.contains('open')) {
    giftBox.classList.remove('open');
    btn.textContent = 'LIHAT DETAIL REKENING';
  } else {
    giftBox.classList.add('open');
    btn.textContent = 'TUTUP DETAIL REKENING';
  }
});

document.getElementById('copy-account').addEventListener('click', () => {
  const accountNumber = window.elementSdk.config.account_number || defaultConfig.account_number;
  const copyStatus = document.getElementById('copy-status');

  navigator.clipboard.writeText(accountNumber).then(() => {
    copyStatus.innerHTML = '<span style="color: #16a34a; font-weight: 600;">✓ Account number copied!</span>';
    setTimeout(() => {
      copyStatus.textContent = '';
    }, 3000);
  }).catch(() => {
    copyStatus.innerHTML = '<span style="color: #dc2626;">Failed to copy</span>';
  });
});

function updateCountdown() {
  const weddingDate = new Date(window.elementSdk.config.wedding_date || defaultConfig.wedding_date);
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Gallery carousel with thumbnails
let currentGalleryIndex = 0;
const totalPhotos = 10;
const prevBtn = document.getElementById('gallery-prev-btn');
const nextBtn = document.getElementById('gallery-next-btn');
const currentPhotoEl = document.getElementById('current-photo');
const thumbnailTrack = document.getElementById('thumbnail-track');
const thumbnailItems = document.querySelectorAll('.thumbnail-item');
let autoSlideInterval;

function updateGalleryFromConfig() {
  const config = window.elementSdk ? window.elementSdk.config : defaultConfig;

  // Update main photo
  const mainPhoto = document.querySelector('#main-photo .gallery-photo');
  const galleryKey = `gallery_${currentGalleryIndex}_image`;
  if (config[galleryKey]) {
    mainPhoto.style.backgroundImage = `url('${config[galleryKey]}')`;
    mainPhoto.style.backgroundSize = 'cover';
    mainPhoto.style.backgroundPosition = 'center';
    mainPhoto.innerHTML = '';
  }

  // Update all thumbnails
  thumbnailItems.forEach((thumb, idx) => {
    const thumbPhoto = thumb.querySelector('.gallery-photo');
    const thumbKey = `gallery_${idx}_image`;
    if (config[thumbKey]) {
      thumbPhoto.style.backgroundImage = `url('${config[thumbKey]}')`;
      thumbPhoto.style.backgroundSize = 'cover';
      thumbPhoto.style.backgroundPosition = 'center';
      thumbPhoto.innerHTML = '';
    }
  });
}

function updateGalleryPosition() {
  // Update counter
  currentPhotoEl.textContent = currentGalleryIndex + 1;

  // Update main photo from config
  updateGalleryFromConfig();

  // Update thumbnail highlights
  thumbnailItems.forEach((thumb, idx) => {
    if (idx === currentGalleryIndex) {
      thumb.style.border = '3px solid #c9a961';
      thumb.style.boxShadow = '0 4px 15px rgba(201, 169, 97, 0.4)';
      thumb.style.opacity = '1';
    } else {
      thumb.style.border = '3px solid transparent';
      thumb.style.boxShadow = 'none';
      thumb.style.opacity = '0.6';
    }
  });

  // Auto-scroll thumbnails to center the active one
  const thumbWidth = 120 + 16; // width + gap
  const containerWidth = thumbnailTrack.parentElement.offsetWidth;
  const offset = (currentGalleryIndex * thumbWidth) - (containerWidth / 2) + (thumbWidth / 2);
  thumbnailTrack.style.transform = `translateX(-${Math.max(0, offset)}px)`;
}

function nextPhoto() {
  currentGalleryIndex = (currentGalleryIndex + 1) % totalPhotos;
  updateGalleryPosition();
}

function prevPhoto() {
  currentGalleryIndex = (currentGalleryIndex - 1 + totalPhotos) % totalPhotos;
  updateGalleryPosition();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextPhoto();
  }, 3000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
}

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevPhoto();
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextPhoto();
  startAutoSlide();
});

// Click on thumbnails
thumbnailItems.forEach((thumb, idx) => {
  thumb.addEventListener('click', () => {
    stopAutoSlide();
    currentGalleryIndex = idx;
    updateGalleryPosition();
    startAutoSlide();
  });
});

// Pause auto-slide when user hovers over gallery
const gallerySection = document.querySelector('#main-photo').closest('section');
if (gallerySection) {
  gallerySection.addEventListener('mouseenter', stopAutoSlide);
  gallerySection.addEventListener('mouseleave', startAutoSlide);
}

// Initialize gallery
updateGalleryPosition();
startAutoSlide();

// Handle story image uploads
function setupStoryUpload(uploadId, bgId, configKey) {
  const uploadInput = document.getElementById(uploadId);
  const bgElement = document.getElementById(bgId);

  uploadInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;
      bgElement.style.background = `url('${imageData}') center/cover`;

      if (window.elementSdk) {
        const updateObj = {};
        updateObj[configKey] = imageData;
        window.elementSdk.setConfig(updateObj);
      }
    };
    reader.readAsDataURL(file);
  });
}


// Handle gallery photo upload
function setupGalleryUpload() {
  const uploadInput = document.getElementById('gallery-current-upload');

  uploadInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
      const imageData = event.target.result;
      const configKey = `gallery_${currentGalleryIndex}_image`;

      // Update main photo
      const mainPhoto = document.querySelector('#main-photo .gallery-photo');
      mainPhoto.style.backgroundImage = `url('${imageData}')`;
      mainPhoto.style.backgroundSize = 'cover';
      mainPhoto.style.backgroundPosition = 'center';
      mainPhoto.innerHTML = '';

      // Update thumbnail
      const currentThumb = thumbnailItems[currentGalleryIndex].querySelector('.gallery-photo');
      currentThumb.style.backgroundImage = `url('${imageData}')`;
      currentThumb.style.backgroundSize = 'cover';
      currentThumb.style.backgroundPosition = 'center';
      currentThumb.innerHTML = '';

      if (window.elementSdk) {
        const updateObj = {};
        updateObj[configKey] = imageData;
        window.elementSdk.setConfig(updateObj);
      }
    };
    reader.readAsDataURL(file);
  });
}

(async function init() {
  if (window.elementSdk) {
    await window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: () => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ["bride_name", config.bride_name || defaultConfig.bride_name],
        ["groom_name", config.groom_name || defaultConfig.groom_name],
        ["opening_title", config.opening_title || defaultConfig.opening_title],
        ["quran_verse", config.quran_verse || defaultConfig.quran_verse],
        ["quran_source", config.quran_source || defaultConfig.quran_source],
        ["bride_full_name", config.bride_full_name || defaultConfig.bride_full_name],
        ["bride_father", config.bride_father || defaultConfig.bride_father],
        ["bride_mother", config.bride_mother || defaultConfig.bride_mother],
        ["bride_instagram", config.bride_instagram || defaultConfig.bride_instagram],
        ["groom_full_name", config.groom_full_name || defaultConfig.groom_full_name],
        ["groom_father", config.groom_father || defaultConfig.groom_father],
        ["groom_mother", config.groom_mother || defaultConfig.groom_mother],
        ["groom_instagram", config.groom_instagram || defaultConfig.groom_instagram],
        ["love_quote", config.love_quote || defaultConfig.love_quote],
        ["story_1_date", config.story_1_date || defaultConfig.story_1_date],
        ["story_1_title", config.story_1_title || defaultConfig.story_1_title],
        ["story_1_text", config.story_1_text || defaultConfig.story_1_text],
        ["story_2_date", config.story_2_date || defaultConfig.story_2_date],
        ["story_2_title", config.story_2_title || defaultConfig.story_2_title],
        ["story_2_text", config.story_2_text || defaultConfig.story_2_text],
        ["story_3_date", config.story_3_date || defaultConfig.story_3_date],
        ["story_3_title", config.story_3_title || defaultConfig.story_3_title],
        ["story_3_text", config.story_3_text || defaultConfig.story_3_text],
        ["gallery_0_image", config.gallery_0_image || defaultConfig.gallery_0_image],
        ["gallery_1_image", config.gallery_1_image || defaultConfig.gallery_1_image],
        ["gallery_2_image", config.gallery_2_image || defaultConfig.gallery_2_image],
        ["gallery_3_image", config.gallery_3_image || defaultConfig.gallery_3_image],
        ["gallery_4_image", config.gallery_4_image || defaultConfig.gallery_4_image],
        ["gallery_5_image", config.gallery_5_image || defaultConfig.gallery_5_image],
        ["gallery_6_image", config.gallery_6_image || defaultConfig.gallery_6_image],
        ["gallery_7_image", config.gallery_7_image || defaultConfig.gallery_7_image],
        ["gallery_8_image", config.gallery_8_image || defaultConfig.gallery_8_image],
        ["gallery_9_image", config.gallery_9_image || defaultConfig.gallery_9_image],
        ["wedding_date", config.wedding_date || defaultConfig.wedding_date],
        ["akad_date", config.akad_date || defaultConfig.akad_date],
        ["akad_time", config.akad_time || defaultConfig.akad_time],
        ["akad_venue", config.akad_venue || defaultConfig.akad_venue],
        ["akad_address", config.akad_address || defaultConfig.akad_address],
        ["akad_maps", config.akad_maps || defaultConfig.akad_maps],
        ["resepsi_date", config.resepsi_date || defaultConfig.resepsi_date],
        ["resepsi_time", config.resepsi_time || defaultConfig.resepsi_time],
        ["resepsi_venue", config.resepsi_venue || defaultConfig.resepsi_venue],
        ["resepsi_address", config.resepsi_address || defaultConfig.resepsi_address],
        ["resepsi_maps", config.resepsi_maps || defaultConfig.resepsi_maps],
        ["bank_name", config.bank_name || defaultConfig.bank_name],
        ["account_number", config.account_number || defaultConfig.account_number],
        ["account_name", config.account_name || defaultConfig.account_name],
        ["closing_text", config.closing_text || defaultConfig.closing_text]
      ])
    });
  }

  if (window.dataSdk) {
    await window.dataSdk.init(dataHandler);
  }

  // Setup story image uploads
  setupStoryUpload('story-1-upload', 'story-1-bg', 'story_1_image');
  setupStoryUpload('story-2-upload', 'story-2-bg', 'story_2_image');
  setupStoryUpload('story-3-upload', 'story-3-bg', 'story_3_image');


  // Setup gallery upload
  setupGalleryUpload();

  setInterval(updateCountdown, 1000);
  updateCountdown();
})();
