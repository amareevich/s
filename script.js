import './style/style.scss';


document.addEventListener('DOMContentLoaded', () => {
    let flag__module__swiper = false;
    let flag__module__desktop = false;
    let module__swiper;
    let module__desktop;

    async function setListener() {

        if (window.innerWidth < 767 && flag__module__swiper === false) {
            module__desktop ? module__desktop.destroy() : null;
            flag__module__desktop = false;
            flag__module__swiper = true;
            module__swiper = (await (import('./style/brends/swiper.js'))).default();

        } else if (window.innerWidth > 767 && flag__module__desktop === false) {
            module__swiper ? module__swiper.destroy() : null;
            flag__module__swiper = false;
            flag__module__desktop = true;
            module__desktop = (await (import('./style/brends/view_element.js'))).default();
        }
    }

    setListener();
    window.addEventListener('resize', setListener);
})

