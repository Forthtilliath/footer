window.addEventListener('DOMContentLoaded', (_event) => {
    AOS.init();

    document.querySelectorAll('.socials i').forEach((icon, key) => {
        new TimelineLite().from(icon, 1 + key, { x: -500 * (key + 1), opacity: 0 }, '+=0.5');
    });
});
