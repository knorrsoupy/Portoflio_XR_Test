
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // gsap code here!
    gsap.from('.hero-content', {
        duration: 2,
        y: -100,
        opacity: 0,
        ease: 'power4.out',
    });

    gsap.from('.w-100', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
    });

    gsap.from('.card', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
    });

    gsap.from('.portfolio-card', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.card',
            start: 'top 80%',
        }
    });

    gsap.from('.container', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power4.out',
    });

    gsap.from('.section', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power4.out',
    });

});

