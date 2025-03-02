
    jQuery(document).ready(function($) {
      console.log("loader");
      var url = window.location.href;
      if (url.indexOf("?") > 0) {
        var param = url.split("?")[1];
        var param_key = param.split("=")[0];
        var param_val = param.split("=")[1];
        if (param_key == 'loader') {
          if(param_val == '1') {
            console.log("loader = 1");
            $(".loader_overlay").show();
            $(".loader1").show();
            $(".loader2").hide();

            $(window).on("load", function(){
              $(".loader_overlay").hide();
            });
          }
          else if(param_val == '2') {
            $(".loader2").show();
            $(".loader1").hide();
            $(".loader_overlay").show();
            console.log("loader = 2");
            var step = 0;
            var loader2_interval = setInterval(function() {
              $(".baroutter .bar").css("width", step+"%");
              console.log(step);

              if (step == 0) {
                 $(".counter .steps1").show();
              }
              if (step == 25) {
                 $(".counter .steps1").hide();
                 $(".counter .steps2").show();
              }
              if (step == 50) {
                 $(".counter .steps2").hide();
                 $(".counter .steps3").show();
              }
              if (step == 75) {
                 $(".counter .steps3").hide();
                 $(".counter .steps4").show();
              }

              if (step >= 100) {
                clearInterval(loader2_interval);
                $(".loader_overlay").hide();
              } 
              step ++;
            }, 50);           
          }
        }
        else {
          $(".loader_overlay").hide();
        }
      }
      else {
        $(".loader_overlay").hide();
      }
    });
