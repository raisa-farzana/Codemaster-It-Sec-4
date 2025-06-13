document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const toolSections = document.querySelectorAll('.tool-section');
    const dynamicBackground = document.getElementById('dynamic-background');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            navItems.forEach(nav => nav.classList.remove('active'));
            toolSections.forEach(section => section.classList.remove('active'));

            this.classList.add('active');

            const toolId = this.getAttribute('data-tool');
            document.getElementById(toolId).classList.add('active');
        });
    });

    // Enhanced stats animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });
        stat.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // CTA button interaction
    document.querySelector('.cta-button').addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Get Started clicked');
        // You can add further actions here, like redirecting to a sign-up page
    });

    // Add parallax effect to background
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        dynamicBackground.style.transform = `translate(${(x * 30) - 15}px, ${(y * 30) - 15}px)`;
    });
});