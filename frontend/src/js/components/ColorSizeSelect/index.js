import { switchImages } from "../../utils";
export class ColorSizeSelect {
    element = document.querySelector('[data-element="ColorSizeSelect"]');
    subElements = {};
    onColorSelect = (e) => {
        const color = e.target.closest('[data-color]');

        if (!color) return;

        if (color.classList.contains("sold")) {
            this.existSizeHandler(e);
        }
    }
    onSizeSelect = (e) => {
        const size = e.target.closest('[data-value]');

        if (!size) return;

        if (size.classList.contains("sold")) {
            this.existColorHandler(e);
            $(".current-size")[0].click();
        }
    }

    constructor(variantsConfig = {}) {
        this.variants = variantsConfig;

        if (!this.element) return;

        this.subElements = this.getSubElements(this.element);
        console.log(this.variants)

        this.initEventListeners();
    }

    initEventListeners() {
        const { ColorSelect, SizeSelect } = this.subElements;

        ColorSelect.addEventListener("pointerdown", this.onColorSelect);
        SizeSelect.addEventListener("pointerdown", this.onSizeSelect);
    }

    existColorHandler(e) {
        const fabric = $("input[name='fabric_type']:checked").val();
        const size = $(e.target).data('value');
        const color = Object.keys(this.variants[fabric][size]).slice(-1)[0];
        const colorChoice = $(`[data-color=${color}]`)[0];
        const sliderImage = colorChoice.dataset.slide;

        colorChoice.click();

        switchImages(sliderImage);
    }

    existSizeHandler(e) {
        const fabric = $("input[name='fabric_type']:checked").val();
        const colorChoice = $(e.target).closest('.color-choice');
        const slide = colorChoice.data('slide');
        const color = colorChoice.data('color');

        for (const [size, colors] of Object.entries(this.variants[fabric])) {
            if (colors[color]) {
                $(`[data-value=${size}]`)[0].click();
                break;
            }
        }

        switchImages(slide);
    }

    getSubElements(element) {
        const result = {};
        const elements = element.querySelectorAll('[data-subelement]');

        for (const subElement of elements) {
            const name = subElement.dataset.subelement;

            result[name] = subElement;
        }

        return result;
    }

    remove() {
        if (this.element) {
            this.element.remove();
        }
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements = {};
    }
}