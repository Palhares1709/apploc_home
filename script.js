// HEADER SCROLL
window.addEventListener("scroll", () => {
    document.getElementById("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// ANIMAÇÃO
const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

elements.forEach(el => observer.observe(el));

// FORM → WHATSAPP
document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = this.querySelector("input[type=text]").value;
    let msg = this.querySelector("textarea").value;

    let texto = `Olá, meu nome é ${nome}. ${msg}`;

    let url = `https://wa.me/5584987553068?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});
