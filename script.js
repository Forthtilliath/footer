window.addEventListener('DOMContentLoaded', (_event) => {
    // new TimelineLite()
    //     .from('.footer-left', 1, { x: -200, opacity: 0 })
    //     .from('.footer-right', 1, { x: 200, opacity: 0 }, '-=1')
    //     .from('.letter-image', 0.5, { y: -150, opacity: 0 });
    
    AOS.init();

    document.querySelectorAll('.footer-content a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            // new TimelineLite({})
            // .from('.footer-content li', 1, { marginLeft: 0, opacity: 0 })
        });
    })
});
