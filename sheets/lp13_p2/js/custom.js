const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();


//close popup 
  const popup=document.querySelector('.popup-size')
  popup.addEventListener('click',e=>{
    console.log(e.target)
    const el=e.target.closest('.popup-size-block') || e.target.closest('.popup-size-block-mobile')
    console.log(el)
    if(el===null){
      popup.style.display="none"
    }
  })

  //Date 
  function setDate(element){
    const date=new Date(Date.now() + 172800000)
    const day=date.toString().split(' ')[0]
    const dayNum=date.getDate()
    const month=date.toString().split(' ')[1]
    element.textContent=`${day}, ${month} ${dayNum}th`
  }

  const atcScDate=document.querySelector('.date-2')
  const dateSticky=document.querySelector('.date-1')
  setDate(dateSticky)
  setDate(atcScDate)
  window.addEventListener('DOMContentLoaded',()=>{
    //Load More
    jQuery(function($) {
      $lis = $('.reviews-list .review-item-2'); 
      min = 12;
      max = $lis.length;
      var visible = min;

      console.log(".review-item-2")

      function showUpToIndex(index) {
        $lis.hide();
        $lis.slice(0, index).show();
      }

      function disableButtons(){
        if (visible >= max){
          visible = max;
          $('.load-more').hide();
        }
        else
        {
          $('.load-more').show();
        }
      }

      showUpToIndex(visible);
      disableButtons();

      $('.load-more').click(function(e) {
        e.preventDefault();
        visible = visible + 12;
        disableButtons();  
        showUpToIndex(visible);
      });
    });


    const atcItems=document.querySelectorAll('.color-choice') 
     atcItems.forEach(el=>{
      el.addEventListener('click',e=>{ 
        const item=e.target.closest('.color-choice') 
        atcItems.forEach(el=>el.classList.remove('active'))
        item.classList.add('active')
        if(item){
          const toSlide=item.dataset.slide
          if(toSlide==1){
            document.querySelector('.color-value').textContent="Stone"
          }else if(toSlide==2){
            document.querySelector('.color-value').textContent="White"
          }else if(toSlide==3){
            document.querySelector('.color-value').textContent="Sky Blue"
          }
          document.querySelector(`.previous-nav .w-slider-dot:nth-child(${toSlide})`).click()
          document.querySelector(`.header-nav .w-slider-dot:nth-child(${toSlide})`).click()
        }
      })
    })
     

    /* Owl Carousel */
    $('.owl-carousel').owlCarousel({
      items:4,
      navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
      responsive: {
        0: {
          margin: 14,
          items: 2,
          dots: true,
          nav: true,
          center: false,
          loop:false
        },
        650: {
          items: 3,
          nav: true,
          dots: false,
          margin:10,
          center: false,
          loop:true
        },
        992:{
          center: false, 
          items:4,
          loop: true,
          nav:true,
          dots:false, 
          margin: 30, 
        }, 
      },
    });

  })

  function handleItemsSlider(slider){ 
    const productItems=slider.querySelectorAll('.product-icon') 
    productItems.forEach(el=>{
      el.addEventListener('click',e=>{
        const pEl=e.target.closest('.product-icon')
        if(pEl){
          productItems.forEach(el=>el.classList.remove("active"))
          pEl.classList.add('active')
          const toSlideItem=pEl.dataset.to
          const activeProductItem= slider.querySelector(`.w-slider-nav .w-slider-dot:nth-child(${toSlideItem})`)
          activeProductItem.click()
        }
      })
    })

    const buttons=slider.querySelectorAll('.w-slider-arrow-left , .w-slider-arrow-right')
    buttons.forEach(el=>{
      el.addEventListener('click',()=>{
        productItems.forEach(el=>el.classList.remove("active"))
        setTimeout(()=>{
          const navSlide = slider.querySelector(".w-slider-nav .w-slider-dot.w-active")
          const navSlideNum = navSlide.getAttribute('aria-label').split(' ')[2]
          const prodItem=slider.querySelector(`.product-icon:nth-child(${navSlideNum})`)
          console.log(prodItem)
          prodItem.classList.add('active')
        },100)

      })
    })


  }

  const sliderStone=document.querySelector('#inside-slider-1')
  const sliderWhite=document.querySelector('#inside-slider-2')
  const sliderSky=document.querySelector('#inside-slider-3')
  const headerSlider=document.querySelector('#header-slider')
  handleItemsSlider(sliderStone)
  handleItemsSlider(sliderWhite)
  handleItemsSlider(sliderSky)
  handleItemsSlider(headerSlider)

  /**Owl Carousel */





  
var accordion = (function () {
  var $accordion = $(".js-accordion");
  var $accordion_header = $accordion.find(".js-accordion-header");
  var $accordion_item = $(".js-accordion-item");

  // default settings
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: false,
  };

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on("click", function () {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $(".js-accordion-item.active").length > 1) {
        $(".js-accordion-item.active:not(:first)").removeClass("active");
      }

      // reveal the active accordion bodies
      $(".js-accordion-item.active").find("> .js-accordion-body").show();
    },
    toggle: function ($this) {
      if (
        settings.oneOpen &&
        $this[0] !=
          $this
            .closest(".js-accordion")
            .find("> .js-accordion-item.active > .js-accordion-header")[0]
      ) {
        $this
          .closest(".js-accordion")
          .find("> .js-accordion-item")
          .removeClass("active")
          .find(".js-accordion-body")
          .hide();
      }

      // show/hide the clicked accordion item
      $this.closest(".js-accordion-item").toggleClass("active");
      $this.next().stop().slideToggle(settings.speed);
    },
  };
})();

$(document).ready(function () {
  accordion.init({ speed: 0, oneOpen: true });
});
