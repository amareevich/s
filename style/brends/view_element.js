const btn = document.querySelector('.unwrap-btn--type--brends');
const changeable_element = document.querySelector('.swiper-wrapper');

class Changes {
    constructor(changing_element, modified_element) {

        //Проверка внутри на наличие элемента, в дальнейшем ее лучше вынести, потому что класс будет задействован в цикле.
        if (!changing_element || !modified_element) {
            throw new Error('Required DOM elements not found');
        }
        // В класс попадает кнопка, ее дочерний элемент и изменяемный элемент с базовыми CSS параметрами высоты
        // Для удобства обработчик клика по кнопке реализован в конструкторе, а не через метод класса 
        // Так же создана ссылка для корректного удаления обработчика т.к. используется bind

        this.changer = changing_element;
        this.changing = modified_element;
        this.window = window;
        this.changer_children_span = this.changer.querySelector('span');
        this.base_height = getComputedStyle(this.changing).height;
        this._link = this.changes_element.bind(this);
        this._reset = this.reset_inline.bind(this);
        this.changer.addEventListener('click', this._link);
    };

    // Обработчик проверяет наличие базового CSS класса, и в зависимоти от результата меняет высоту + переключает классы
    changes_element() {
        this.window.addEventListener('resize', this._reset);
        const boolean_toggle = this.changer.classList.contains('unwrap-btn--action--open');
        this.changer.classList.toggle('unwrap-btn--action--open');
        this.changer.classList.toggle('unwrap-btn--action--close');
        this.changing_height(boolean_toggle);
    };

    // Просто выделенный метод для изменения высоты c тернарным оператором :), можно было написать все в changes_element.
    changing_height(flag) {
        flag
            ? (this.changing.style.height = this.changing.scrollHeight + "px", this.changer_children_span.textContent = 'Скрыть')
            : (this.changing.style.height = this.base_height, this.changer_children_span.textContent = 'Показать все');
    };

    // Обнуление стилей и классов элемента при ресайзе для более стабильного отображения элементов
    reset_inline() {
        this.changing.removeAttribute('style');
        this.changer.classList.add('unwrap-btn--action--open');
        this.changer.classList.remove('unwrap-btn--action--close');
        this.changer_children_span.textContent = 'Показать все';
        this.window.removeEventListener('resize', this._reset);

    }

    // Красная кнопка класса
    destroy() {
        this.window.removeEventListener('resize', this._reset);
        this.changer.removeEventListener('click', this._link);
        this.changing.removeAttribute('style');
        this.changer = null;
        this.changing = null;
        this.changer_children_span = null;
        this.base_height = null;
        this._link = null;
        this._reset = null;
    };
}

export default function view_element() {
    return new Changes(btn, changeable_element);
}