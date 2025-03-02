var cookie_array = document.cookie.split(";");
var fbp = 0, fbc = 0;
for(var i = 0; i < cookie_array.length; i ++) {
  if (cookie_array[i].split("=")[0].trim() == "_fbp") {
    fbp = cookie_array[i].split("=")[1];
  };
  if (cookie_array[i].split("=")[0].trim() == "_fbc") {
    fbc = cookie_array[i].split("=")[1];
  }
}


// DATA LAYER GLOBAL
const extractDataForDataLayer = () => {
  return {
      lpName: checkoutData.cart.landingPageName,
      paramMB: checkoutData.cart.checkoutPageParams.mb,
      paramSource: checkoutData.cart.checkoutPageParams.source,
      paramUTMSource: checkoutData.cart.checkoutPageParams.utm_source,
      paramLoader: checkoutData.cart.checkoutPageParams.loader,
      paramLP: checkoutData.cart.checkoutPageParams.lp,
      paramFlow: checkoutData.cart.checkoutPageParams.flow,
      primaryVariantId: checkoutData.cart.primaryVariantId,
      transactionId: checkoutData.sessionId,
      transactionTotal: checkoutData.cart.localCart.subTotal,
      _fbp: fbp,
      _fbc: fbc,
      cart_total: checkoutData.cart.localCart.total,

  }
};

// PAGE VIEW
const sendDLNewPV = (e) => {
  // console.log(e);

 

  window.dataLayer.push({
      'event': 'page_view_custom',
      ...extractDataForDataLayer(),
  });
};


const handleNewPV = (e) => {
    sendDLNewPV(e);
    console.log('handleNewPV');
};


// NEW CART
const sendDLNewCart = (e) => {
  // console.log(e);
  window.dataLayer.push({
      'event': 'new_cart',
      ...extractDataForDataLayer()
    });  
  };

const handleNewCart = (e) => {
    sendDLNewCart(e);
    console.log('handleNewCart');
};


// STARTED CHECKOUT
const sendDLInitiateCheckout = (e) => {
  //console.log(e);
  window.dataLayer.push({
      'event': 'initiate_checkout',
      ...extractDataForDataLayer(e),
      'eventId': e.eventId,
      'eventSourceUrl': e.eventSourceUrl,
      'email': e.email
    });  
  };

const handleInitiateCheckout = (e) => {
    sendDLInitiateCheckout(e);
    //console.log('handleInitiateCheckout');
};


// ACCEPTED UPSELL
const sendDLAcceptedUpsell = (e) => {
  // console.log(e);
  window.dataLayer.push({
      'event': 'accepted_upsell',
      ...extractDataForDataLayer(),
      upsellValue: e.value,
      upsellPageName: e.upsellPageName,
      upsellParam1: e.upsellParam1,
    });  
  };

const handleAcceptedUpsell = (e) => {
  sendDLAcceptedUpsell(e);
    console.log('handleAcceptedUpsell');
    // console.log(e);
};

// PURCHASE
const sendDLPurchase = (e) => {
  // console.log(e);

  var param = {
    'ecommerce': {
      'purchase': {
        'actionField': {},
        'products': []
      }
    }
  };

  param.ecommerce.purchase.actionField.id = checkoutData.sessionId;
  param.ecommerce.purchase.actionField.affiliation = "RTC";
  param.ecommerce.purchase.actionField.revenue = checkoutData.cart.localCart.state.total;
  param.ecommerce.purchase.actionField.tax = checkoutData.cart.localCart.state.taxTotal;
  param.ecommerce.purchase.actionField.shipping = checkoutData.cart.localCart.state.shippingTotal;
  param.ecommerce.purchase.actionField.coupon = '';

  var items = checkoutData.cart.localCart.state.lineItems;

  param.ecommerce.purchase.products = items.map(x => {
    return {
      id: x.variantId,
      name: x.title,
      price: x.price,
      brand: 'Miracle Brand',
      category: '',
      variant: '',
      quantity: x.quantity,
      coupon: ''
    }
  });


  window.dataLayer.push({
      'event': 'purchase_custom',
      ...extractDataForDataLayer(),
      'uEmail': e.email,
      'uFirstName': e.shippingAddress.first_name,
      'uLastName': e.shippingAddress.last_name,
      'uPhone': e.shippingAddress.phone,
      'uCity': e.shippingAddress.city,
      'uProvince': e.shippingAddress.province,
      'uZip': e.shippingAddress.zip,
      'uCurrency': e.currency,
      'uCountry': e.shippingAddress.country,
      'totalValue': e.totalValue,
      'ecommerce': param.ecommerce,
      'eventId': e.eventId,
      'eventSourceUrl': e.eventSourceUrl,
    });  
  };

const handlePurchase = (e) => {
  sendDLPurchase(e);
    console.log('handlePurchase');
    // console.log(e);

};



// RUN
window.dataLayer = window.dataLayer || [];
Checkout.addPixel((e) => {
    // console.log(e);
    switch (e.eventType) {
        case 'page_view':
            handleNewPV(e);
            break;
        case 'new_cart':
            handleNewCart(e);
            break;
        case 'checkout_started':
            handleInitiateCheckout(e);
            break;      
        case 'accepted_upsell':
            handleAcceptedUpsell(e);
            break;
        case 'checked_out':
            handlePurchase(e);
    };

});


