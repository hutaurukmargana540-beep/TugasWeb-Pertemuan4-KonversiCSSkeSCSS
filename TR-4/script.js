const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  formMessage.textContent =
    "Pesan berhasil divalidasi. Terima kasih sudah menghubungi saya!";
  form.reset();
});


const themeToggle=document.getElementById("themeToggle");const savedTheme=localStorage.getItem("portfolio-theme");if(savedTheme==="light"){document.body.classList.add("light");themeToggle.textContent="🌙";themeToggle.setAttribute("aria-label","Aktifkan mode gelap")}themeToggle.addEventListener("click",()=>{document.body.classList.toggle("light");const light=document.body.classList.contains("light");themeToggle.textContent=light?"🌙":"☀️";themeToggle.setAttribute("aria-label",light?"Aktifkan mode gelap":"Aktifkan mode terang");localStorage.setItem("portfolio-theme",light?"light":"dark")});const revealObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
