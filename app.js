// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to animate progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-line');
        progressBars.forEach(bar => {
            const width = bar.parentNode.querySelector('span').textContent;
            bar.style.width = width;
        });
    }
    
    // Function to toggle navbar background on scroll
    function toggleNavbarBackground() {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('solid');
            } else {
                navbar.classList.remove('solid');
            }
        });
    }

    // Call the functions
    animateProgressBars();
    toggleNavbarBackground();
});
