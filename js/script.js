document.addEventListener('DOMContentLoaded', function() {
    // Home Button Navigation
    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', function() {
        window.location.href = '/'; // Redirect to homepage
    });

    // Contact Support Button
    const contactBtn = document.getElementById('contactBtn');
    contactBtn.addEventListener('click', function() {
        window.location.href = '/contact'; // Redirect to contact page
    });

    // Error Page Animation
    function animateErrorPage() {
        const errorWrapper = document.querySelector('.error-wrapper');
        errorWrapper.style.opacity = 0;
        errorWrapper.style.transform = 'translateY(20px)';

        setTimeout(() => {
            errorWrapper.style.transition = 'all 0.5s ease';
            errorWrapper.style.opacity = 1;
            errorWrapper.style.transform = 'translateY(0)';
        }, 100);
    }

    // Error Tracking (Optional)
    function logErrorEvent() {
        console.log('404 Error Occurred', {
            timestamp: new Date().toISOString(),
            path: window.location.pathname
        });
        
        // You could send this to an analytics service
    }

    // Initialize Functions
    animateErrorPage();
    logErrorEvent();
});