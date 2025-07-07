import './style/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    let mode = null;
    let swiperInst, desktopInst;

    async function setListener() {

        const newMode = window.innerWidth < 767 ? 'modile' : 'desktop';

        if (newMode === mode) return;
        mode = newMode;

        if (newMode === 'modile') {
            desktopInst?.destroy();
            swiperInst = (await import('./style/brends/swiper.js')).default();
        } else if (newMode === 'desktop') {
            swiperInst?.destroy();
            desktopInst = (await import('./style/brends/view_element.js')).default();
        }
    }

    setListener();
    window.addEventListener('resize', setListener);

})
