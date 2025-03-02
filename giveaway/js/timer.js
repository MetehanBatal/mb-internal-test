function setCookie(cname, cvalue, exdays = 100) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

jQuery(document).ready(function($) {
  function num_to_str(num) {
    if (num >= 10) {
      return "" + num;
    }
    return "0" + num;
  }

  function interval() {
    var h = getCookie("hour");
    var m = getCookie("min");
    var s = getCookie("sec");

    if (h <= 0 && m <= 0 && s <= 0) {
      setCookie("hour", 24);
      setCookie("min", 0);
      setCookie("sec", 0);
    }

    $("#js-clock-hours").css("visibility", "hidden");
    $("#js-clock-minutes").css("visibility", "hidden");
    $("#js-clock-seconds").css("visibility", "hidden");
    $("#js-clock-hours").html(num_to_str(h));
    $("#js-clock-minutes").html(num_to_str(m));
    $("#js-clock-seconds").html(num_to_str(s));
    $("#js-clock-hours").css("visibility", "visible");
    $("#js-clock-minutes").css("visibility", "visible");
    $("#js-clock-seconds").css("visibility", "visible");

    if(s <= 0) {
      if(m <= 0) {
        if(h <= 0) {
          h = 24;
          m = 0;
          s = 0;
        }
        else {
          h --;
          m = 59;
          s = 59;
        }
      }
      else {
        m --;
        s = 59;
      }
    }
    else {
      s --;
    }

    setCookie("hour", h);
    setCookie("min", m);
    setCookie("sec", s);
  }

  var timer = setInterval(function() {
    interval();
  }, 1000);  
  interval();
});