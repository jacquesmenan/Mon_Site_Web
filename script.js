// Effet de machine à écrire pour le slogan
const slogan = document.getElementById('slogan');
const text = "DataForge : Forgeons l'avenir avec vos données.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        slogan.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Mode sombre/clair
const modeBouton = document.getElementById('mode');
const body = document.body;

modeBouton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeBouton.textContent = body.classList.contains('dark-mode') ? 'Mode clair' : 'Mode sombre';
});

// Carrousel de projets
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Compteur de statistiques
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.textContent;
        const increment = target / speed;

        if (count < target) {
            counter.textContent = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.textContent = target;
        }
    };

    updateCount();
});

// Formulaire de contact
const form = document.getElementById('contact-form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email.includes('@') && message) {
        messageDiv.textContent = 'Merci, nous vous contacterons bientôt !';
        messageDiv.style.color = 'green';
        form.reset();
    } else {
        messageDiv.textContent = 'Veuillez remplir tous les champs correctement.';
        messageDiv.style.color = 'red';
    }
});

// Cartes interactives
function toggleCard(card) {
    const details = card.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}