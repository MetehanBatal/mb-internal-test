
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
    console.log(day)
    element.textContent=`${day}, ${month} ${dayNum}th`
  }
  const atcScDate=document.querySelector('#date-2')
  const dateSticky=document.querySelector('#date-1')
  setDate(dateSticky)
  setDate(atcScDate)

  $(document).ready(function() {
    $('select').niceSelect();
  });

  window.addEventListener('DOMContentLoaded',()=>{
    //Load More
    jQuery(function($) {
      $lis = $('.reviews-list .w-dyn-item'); 
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

    const atcItems=document.querySelectorAll('.radio-color-1, .radio-color-2, .radio-color-3') 

    // Color changer
    atcItems.forEach(el=>{
      el.addEventListener('click',e=>{ 
        const item=e.target.closest('.radio-color-wrapper') 
        if(item){
          const toSlide=item.dataset.slide
          if(toSlide==1){
            document.querySelector('.color-value').textContent="Stone" 
            setColorChanger('gray')
            
          }else if(toSlide==2){
            document.querySelector('.color-value').textContent="White" 
            setColorChanger('white')
                       
          }else if(toSlide==3){
            document.querySelector('.color-value').textContent="Sky Blue"
            setColorChanger('blue')

          } 
          document.querySelector(`.nav-lg .w-slider-dot:nth-child(${toSlide})`).click()

        }
      })

    })

    // Slider coordinator
    function handleItemsSlider(slider){ 
      const productItems=slider.querySelectorAll('.product-icon-2') 
      productItems.forEach(el=>{
        el.addEventListener('click',e=>{
          const pEl=e.target.closest('.product-icon-2')
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

          setTimeout(()=>{
            productItems.forEach(el=>el.classList.remove("active"))
            const navSlide = slider.querySelector(".w-slider-nav .w-slider-dot.w-active")
            console.log(navSlide)
            const navSlideNum = navSlide.getAttribute('aria-label').split(' ')[2]
            const prodItem=slider.querySelector(`.product-icons-2 .product-icon-2:nth-child(${navSlideNum})`)
            console.log(prodItem)
            prodItem.classList.add('active')
          },100)


        })

      })

    }

    // Number of sheets
    document.querySelectorAll('.option-radio-input-2').forEach( e => {
      
      e.addEventListener('click', function(){
        let text = e.parentElement.querySelector('.option-text').textContent
        let name;
        let number

        if(text.includes("4")){
          number = 4
        } else if(text.includes('2')){
          number = 2
        } else{
          number = 1
        }

        imgQuantity(number)

        e.parentElement.parentElement.parentElement.parentElement.querySelector('.color-value').textContent = `Set of ${number}`
      })
    })

    document.querySelectorAll('.button-quantity').forEach( e => {
      e.addEventListener('click', () => {
        quantityChanger(e)
      })
    })

    const sliderStone=document.querySelector('#inside-slider-1')
    const sliderWhite=document.querySelector('#inside-slider-2')
    const sliderSky=document.querySelector('#inside-slider-3')
    handleItemsSlider(sliderStone)
    handleItemsSlider(sliderWhite)
    handleItemsSlider(sliderSky)

  })

  function quantityChanger(e){
    let number = Number(document.querySelector('.quantity-value').textContent)

    switch (e.getAttribute('quantity')){

      case '+':
        number++
        break;

      case '-':
        if(number != 1){
          number--
        }
        break;
    }

    document.querySelector('.quantity-value').textContent = number
  }

  function setColorChanger(e){
    let allowed;
    
    document.querySelectorAll('.multi-img-option.show').forEach( e => {
      e.classList.remove('show')
    })

    switch(e){

      case 'gray':
      allowed = '.gray'
      break;

      case 'white':
      allowed = '.white'
      break;

      case 'blue':
      allowed = '.blue'
      break;
    }

    document.querySelectorAll(allowed).forEach( e => {
      e.classList.add('show')
    })
  }

  function imgQuantity(e){
    let allowed;
    
    document.querySelectorAll('.multi-img.show').forEach( e => {
      e.classList.remove('show')
    })

    switch(e){

      case 1:
      allowed = '.one'
      break;

      case 2:
      allowed = '.two'
      break;

      case 4:
      allowed = '.four'
      break;
    }

    document.querySelectorAll(allowed).forEach( e => {
      e.classList.add('show')
    })
  }