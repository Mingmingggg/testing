let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.parentNode.href; 

        document.getElementById('loading-screen').style.display = 'flex';
        setTimeout(() => {
            window.location.href = url; 
        }, 2000);
    });
});