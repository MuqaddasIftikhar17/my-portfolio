// Ensure DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
    // Header Toggle for Mobile Navigation
    const menuBtn = document.getElementById('MenuBtn');

    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            document.body.classList.toggle('mobile-new-active'); // Toggle the mobile menu visibility
            this.classList.toggle('fa-xmark'); // Switch between hamburger and close icon
        });
    }

    // Typing Effect using Typed.js
    const typed = new Typed('.auto-input', {
        strings: ['Data Scientist!', 'Python Developer!', 'Machine Learning Engineer!', 'Data Analyst!'],
        typeSpeed: 100, // Speed of typing each character
        backSpeed: 100, // Speed of deleting characters
        backDelay: 2000, // Delay before starting to delete
        loop: true, // Loop the typing effect
    });

    // Active Link State On Scroll
    const navLinks = document.querySelectorAll('nav ul li a'); // Get all navigation links
    const sections = document.querySelectorAll('section'); // Get all sections

    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY; // Get current scroll position
        sections.forEach(section => {
            // Check if the scroll position is within the section's boundaries
            if (scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
                navLinks.forEach(link => {
                    link.classList.remove('active'); // Remove active class from all links
                    // Add active class to the link that corresponds to the currently visible section
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
