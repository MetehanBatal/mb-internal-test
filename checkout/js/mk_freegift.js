/////////////////////////////////////////////// Addon Free Gift ////////////////////////////////////////////////
  window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || [];
  window.checkoutReadyCallbacks.push(() => {

    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&');
    var varId = 0, giftId = 0;
        
    for( var i = 0; i < sURLVariables.length; i ++) {
      var param = sURLVariables[i].split("=");
      if (param[0] == 'addonVariantId') {
        giftId = param[1];
      }
      else if(param[0] == 'VariantId') {
        varId = param[1];
      }
    }

    console.log(giftId);
    console.log(varId);
    
    var lineItems = checkoutData.cart.localCart.state.lineItems;
    var clearData = {};

    for( i = 0; i < lineItems.length; i ++ ) {
      if (lineItems[i]['variantId'] != "34937177702550") {
        clearData[lineItems[i]['variantId']] = 0;
      }      
    }
    window.checkout.apiClient.setVariantQuantities(clearData).then(x => {
      if (varId != 0) {
        window.checkout.apiClient.setCurrentVariant(varId).then(x => {
          if(giftId != 0) {
            window.checkout.apiClient.toggleAddon(giftId).then(x => {
              window.checkout.setCart(x);
              window.checkout.drawCart();
            });
          }
          else {
            window.checkout.setCart(x);
            window.checkout.drawCart();
          }
        }); 
      }
      else {
        console.log("ccc");
        console.log(varId);
        window.checkout.setCart(x);
        window.checkout.drawCart();
      }
    });
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////