$('[data-action="gateway"]').click(function() {
  $('.error').remove();

  $('.error-data').removeClass('error-data');

  $('#form-gateway').val($(this).data('gateway'));

  $('.gateway').hide();

  var gateway = $(this).data('gateway');

  $('.gateway-'+$(this).data('gateway')).stop().slideDown('fast',function(){

    $('html,body').animate({
      scrollTop: $('.gateway-'+gateway).offset().top
    },500);

  });

  return false;
});

$(document).ready(function() {
  var counter = $('#countdown').html().split(':')[0]*60;

  setInterval(function() {
    counter--;

   if(counter >= 0) {
        var mins = Math.floor(counter / 60) % 60;
        var secs = counter % 60;

        $('#countdown').html(("0"+mins).slice(-2)+':'+("0"+secs).slice(-2));
   } else {
     $('#countdown').html('00:00');


     clearInterval(counter);
   }
  },1000);
});



jQuery(document).ready(function($) {

window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
window.checkoutReadyCallbacks.push(() => {
  $(".ch-preloader").fadeOut();

  if (checkoutData.cart.shippingZone != "CA") {
    $(".checkout-note").hide();
  }

   

});



    $("#billing_use_shipping_false").click(function(e) {
      $(".checkout-billing-fields").slideDown();
    });

    $("#billing_use_shipping_true").click(function(e) {
      $(".checkout-billing-fields").slideUp();
    });

    $(".checkout-combo-form .frm-flds input").focusin(function(e) {
      $(this).parent().addClass("filled");
    });

    $(".checkout-combo-form .frm-flds input").focusout(function(e) {
      if ($(this).val().trim().length <= 0) {
        $(this).parent().removeClass("filled");
      }
    });

    $("#cc_number").keypress(function(e) {
      if (e.key < '0' || e.key > '9') {
        e.preventDefault();
        return;
      }
    });

    $(".checkout-submit-combo").click(function(e) {
      var btn = $(this);
      setTimeout(function() {
        console.log($(".checkout-combo-form .checkout-invalid-field").length);
        if ($(".checkout-combo-form .checkout-invalid-field").length > 0) {
          var new_position = $(".checkout-combo-form .checkout-invalid-field").offset();
          $('html, body').stop().animate({ scrollTop: new_position.top - 15 }, 500);
        }
        else {
          btn.addClass("submitting");
          setTimeout(function() {
            btn.removeClass("submitting");
          }, 7000);
        }
      }, 300);
    });

    	/////////////////////////////////////////////////// Discount popup //////////////////////////////////////////////////////
	$(window).on("load", function() {
	});	

	$('.checkout-discount-value').on('DOMSubtreeModified',function(){
		if (checkoutData.cart.localCart.state.discountTotal > 0) {
			$(".discount-applied").removeClass("es_hide");
		}
		else {
			$(".discount-applied").addClass("es_hide");
		}
	});
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  });


  /* ACTION (BILLING) */
  $(document).on('click', '[data-action="billing"]', function () {
    if ($(this).data('slide')) $('#payFldToggle').stop().slideDown();
    else $('#payFldToggle').stop().slideUp();
    $(this).find('input').prop('checked', true);
  });


  $(document).ready(function () {
    $('.summry-toggle-mob').click(function () {
      $('#toggle-mob-cart').toggleClass('isopened');

      $('.sm-txt').toggle();
    });
  });

//////////////////////////////////////// Remove mobile/desktop coupon on desktop/mobile view ///////////////////////////
jQuery(document).ready(function($) {
  if ($(window).width() >= 768) {
    $(".mobile_coupon").remove();
  }
  else {
    $(".desktop_coupon").remove();
  }
});


