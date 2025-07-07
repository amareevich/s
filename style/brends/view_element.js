const btn = document.querySelector('.unwrap-btn--type--brends');
const changeable_element = document.querySelector('.swiper-wrapper');

class Changes {
    constructor(changing_element, modified_element) {

        this.changer = changing_element;
        this.changing = modified_element;
        this.changer_children_span = this.changer.querySelector('span');
        this._link = this.changes_element.bind(this);
        this._reset = this.reset_inline.bind(this);
        this.changer.addEventListener('click', this._link);
    };

    changes_element() {
        window.addEventListener('resize', this._reset);
        const boolean_toggle = this.changer.classList.contains('unwrap-btn--action--open');
        this.changer.classList.toggle('unwrap-btn--action--open');
        this.changer.classList.toggle('unwrap-btn--action--close');
        this.changing_height(boolean_toggle);
    };

    changing_height(flag) {
        flag
            ? (this.changing.style.height = this.changing.scrollHeight + "px", this.changer_children_span.textContent = 'Скрыть')
            : (this.changing.removeAttribute('style'), this.changer_children_span.textContent = 'Показать все');
    };

    reset_inline() {
        this.changing.removeAttribute('style');
        this.changer.classList.add('unwrap-btn--action--open');
        this.changer.classList.remove('unwrap-btn--action--close');
        this.changer_children_span.textContent = 'Показать все';
        window.removeEventListener('resize', this._reset);
    }

    destroy() {
        window.removeEventListener('resize', this._reset);
        this.changer.removeEventListener('click', this._link);
        this.changing?.removeAttribute('style');
        this.changer = null;
        this.changing = null;
        this.changer_children_span = null;
        this._link = null;
        this._reset = null;
    };
}

export default function view_element() {
    return new Changes(btn, changeable_element);
}

