// Hide and show footer on scroll
let lastScrollTop = 0;
const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll Down
        footer.style.transform = 'translateY(100%)';
    } else {
        // Scroll Up
        footer.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Toggle "About Me" section visibility
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', function(event) {
        if (this.textContent === 'Hire Me!') {
            window.open('https://www.linkedin.com/in/roshan-saini-b0519a263/', '_blank');
            event.preventDefault(); // Prevent the default action
        } else if (this.textContent === 'Download Resume') {
            // Prevent default link action if it's a download link
            event.preventDefault();
            // Show funny text
            document.body.innerHTML = '<div style="text-align: center; padding: 20px; font-size: 24px;">Mere resume ki kya jarurat hai portfolio toh dekh hi liya hoga. Agar updated resume chahiye toh message karo deta hu.</div>';
        }
    });
});
