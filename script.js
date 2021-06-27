window.addEventListener('DOMContentLoaded', (_event) => {
    AOS.init();

    document.querySelectorAll('.socials i').forEach((icon, key) => {
        new TimelineLite().from(icon, 1 + key, { x: -500 * (key + 1), opacity: 0 }, '+=0.5');
    });

    let xScreen = window.innerWidth;
    const duration = 4;
    window.addEventListener('resize', () => (xScreen = window.innerWidth));

    let TL_formulaOne_modal = new TimelineLite({ paused: true })
        .fromTo('.formula-red', duration, { x: xScreen * -2.5 }, { x: xScreen * 2.5 })
        // .fromTo('.curve', duration, { x: xScreen * -2.5 }, { x: xScreen * 2.5 }, '-=' + duration)
        .fromTo('.modal-content', duration, { x: xScreen * -4.5, opacity: 1 }, { x: 0, opacity: 1 }, '-=' + duration);
    let TL_formulaOne_modal_out;
    
    document.querySelector('.letter').addEventListener('click', () => {
        TL_formulaOne_modal.restart();
        TL_formulaOne_modal_out = new TimelineLite({ paused: true })
            .fromTo('.modal-content', duration / 2, { x: 0, opacity: 1 }, { x: xScreen * 2, opacity: 0 });
    });

    document.querySelector('.modal-close').addEventListener('click', () => {
        TL_formulaOne_modal_out.play();
    });
});
