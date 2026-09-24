// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));
document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks?.classList.remove("active")));

// Contact form: client-side validation + safe WhatsApp handoff
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    if (!name || name.length < 2 || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || message.length < 10) {
      alert("Please enter a valid name, email address and a message of at least 10 characters.");
      return;
    }
    const text = `Hello ZAK Electronics, my name is ${name}. Email: ${email}. ${message}`;
    window.open(`https://wa.me/254717022136?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    contactForm.reset();
  });
}

// Lightweight cookie consent for non-essential site preferences
if (!localStorage.getItem("zak_cookie_consent")) {
  const banner = document.createElement("aside");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Cookie preferences");
  banner.innerHTML = `<p>We use essential cookies and may use privacy-conscious analytics to improve ZAK Electronics.</p><div><button id="cookieAccept" class="button button-primary">Accept</button><button id="cookieDecline" class="button button-outline">Decline</button></div>`;
  document.body.appendChild(banner);
  document.getElementById("cookieAccept")?.addEventListener("click", () => { localStorage.setItem("zak_cookie_consent", "accepted"); banner.remove(); });
  document.getElementById("cookieDecline")?.addEventListener("click", () => { localStorage.setItem("zak_cookie_consent", "declined"); banner.remove(); });
}

// Current year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
