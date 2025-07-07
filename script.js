import './style/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    let mode = null;
    let swiperInst, desktopInst;

    async function setListener() {

        const newMode = window.innerWidth < 768 ? 'modile' : 'desktop';

        if (newMode === mode) return;

        if (newMode === 'modile') {
            desktopInst?.destroy();
            swiperInst = (await import('./style/brends/swiper.js')).default();
        } else {
            swiperInst?.destroy();
            desktopInst = (await import('./style/brends/view_element.js')).default();
        }

        mode = newMode;
    }

    setListener();
    window.addEventListener('resize', setListener);
})
