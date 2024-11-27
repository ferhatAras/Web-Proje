// Typed.js Ayarları
var typed = new Typed(".multiple-text", {
  strings: ["Halı Yıkama", "Koltuk Yıkama", "Stor Perde", "Perde"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// WhatsApp ve Telefon Bağlantıları
document.querySelector(".whatsapp-icon").addEventListener("click", function () {
  window.open("https://wa.me/+9005325481027", "_blank");
});
document.querySelector(".phone-icon").addEventListener("click", function () {
  window.location.href = "tel:+9005325481027";
});

// Menü İkonu ve Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Aktif Link ve Sticky Navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector("header");

window.onscroll = () => {
  // Aktif link işlemi
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));

      // Hata önleme için kontrol
      try {
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      } catch (e) {
        console.error("Aktif link hatası:", e);
      }
    }
  });

  // Sticky navbar
  header.classList.toggle("sticky", window.scrollY > 100);

  // Navbar kapanışı
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    })
  );
};

// ScrollReveal Ayarları (Sadece bir kez çalışır)
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".heading", { origin: "top" });
ScrollReveal().reveal(".about,.sevices-container,.referans-box,.contact", {
  origin: "bottom",
});
