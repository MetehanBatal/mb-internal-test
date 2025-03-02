(() => {
    "use strict";
    function e() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const t = document.querySelectorAll(".banner-product"),
            l = document.querySelectorAll(".banner-product-white"),
            s = document.querySelector(`.nav-lg .w-slider-dot:nth-child(${e})`),
            n = {
                1: () => {
                    t.forEach((e) => (e.style.display = "block")), l.forEach((e) => (e.style.display = "none"));
                },
                2: () => {
                    t.forEach((e) => (e.style.display = "none")), l.forEach((e) => (e.style.display = "block"));
                },
                3: () => {
                    t.forEach((e) => (e.style.display = "block")), l.forEach((e) => (e.style.display = "none"));
                },
            };
        n[e] && n[e](), s.click();
    }
    function t(e, t, l) {
        return t in e ? Object.defineProperty(e, t, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = l), e;
    }
    (window.MkMiracle = window.MkMiracle || {}),
        (window.MkMiracle.ColorSizeSelect = class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, "element", document.querySelector('[data-element="ColorSizeSelect"]')),
                    t(this, "subElements", {}),
                    t(this, "onColorSelect", (e) => {
                        const t = e.target.closest("[data-color]");
                        t && t.classList.contains("sold") && this.existSizeHandler(e);
                    }),
                    t(this, "onSizeSelect", (e) => {
                        const t = e.target.closest("[data-value]");
                        t && t.classList.contains("sold") && (this.existColorHandler(e), $(".current-size")[0].click());
                    }),
                    (this.variants = e),
                    this.element && ((this.subElements = this.getSubElements(this.element)), console.log(this.variants), this.initEventListeners());
            }
            initEventListeners() {
                const { ColorSelect: e, SizeSelect: t } = this.subElements;
                e.addEventListener("pointerdown", this.onColorSelect), t.addEventListener("pointerdown", this.onSizeSelect);
            }
            existColorHandler(t) {
                const l = $("input[name='fabric_type']:checked").val(),
                    s = $(t.target).data("value"),
                    n = Object.keys(this.variants[l][s]).slice(-1)[0],
                    o = $(`[data-color=${n}]`)[0],
                    i = o.dataset.slide;
                o.click(), e(i);
            }
            existSizeHandler(t) {
                const l = $("input[name='fabric_type']:checked").val(),
                    s = $(t.target).closest(".color-choice"),
                    n = s.data("slide"),
                    o = s.data("color");
                for (const [e, t] of Object.entries(this.variants[l]))
                    if (t[o]) {
                        $(`[data-value=${e}]`)[0].click();
                        break;
                    }
                e(n);
            }
            getSubElements(e) {
                const t = {},
                    l = e.querySelectorAll("[data-subelement]");
                for (const e of l) t[e.dataset.subelement] = e;
                return t;
            }
            remove() {
                this.element && this.element.remove();
            }
            destroy() {
                this.remove(), (this.element = null), (this.subElements = {});
            }
        });
})();
