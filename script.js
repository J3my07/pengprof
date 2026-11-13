const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.skill-card, .project-card').forEach((el) => {
    el.classList.add('hidden');
    observer.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;

        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - card.offsetHeight/2) / 10}deg)
            rotateY(${-(x - card.offsetWidth/2) / 10}deg)
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeBtn.querySelector('i');

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    
    icon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});