// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

    // Example: Highlight the current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.fontWeight = 'bold';
            link.style.color = '#4CAF50';
        }
    });

    // Example: Add a "Back to Top" button
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑ Top';
    backToTop.style.cssText = 'position:fixed; bottom:20px; right:20px; padding:10px 15px;';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});