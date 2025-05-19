document.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroSection = document.querySelector('.hero-image-section');
    const heroOverlay = document.querySelector('.hero-overlay');

    // Ako je širina ekrana veća od 768px, radi parallax
    if (window.innerWidth > 768) {
        if (heroSection) {
            heroSection.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
        }

        if (heroOverlay) {
            heroOverlay.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    } else {
        // Na mobilnim uređajima resetuj stilove
        if (heroSection) {
            heroSection.style.backgroundPositionY = 'center';
        }

        if (heroOverlay) {
            heroOverlay.style.transform = 'translateY(0px)';
        }
    }
});

