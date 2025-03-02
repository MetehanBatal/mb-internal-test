export function switchImages(index = 0) {
    const bannerImgs = document.querySelectorAll('.banner-product');
    const bannerImgsWhite = document.querySelectorAll('.banner-product-white');
    const slide = document.querySelector(`.nav-lg .w-slider-dot:nth-child(${index})`);
    const bannersHandler = {
        '1': () => {
            bannerImgs?.forEach(el => el.style.display = "block")
            bannerImgsWhite?.forEach(el => el.style.display = "none");
        },
        '2': () => {
            bannerImgs?.forEach(el => el.style.display = "none")
            bannerImgsWhite?.forEach(el => el.style.display = "block");
        },
        '3': () => {
            bannerImgs?.forEach(el => el.style.display = "block")
            bannerImgsWhite?.forEach(el => el.style.display = "none");
        },
    }

    bannersHandler[index] && bannersHandler[index]();
    slide?.click();
}