  const url = window.location.href;
  
  // ALL VARIATIONS ON THE LINKS
  const split_landers = [
    {
      "funnelURL": "https://try.miraclebrand.co/sheets/ksp/",
    },
//    {
//      "funnelURL": "https://try.miraclebrand.co/sheets/ksp-229/",
//    },
//    {
//      "funnelURL": "https://try.miraclebrand.co/sheets/ksp-179/",
//    },
    
  ];

  // RUN SPLIT TEST ONLY BELOW SELECTED ADVERTORIALS
  if (url.includes("/a/s6-reasons") || url.includes("/a/s6-reasons-new/") || url.includes("/a/s4-v2") || url.includes("/a/s31/")) {

  const split_selected = Math.floor(Math.random() * split_landers.length);
  console.log(split_landers[split_selected]["funnelURL"]);

  $("a.split_link").attr("href", split_landers[split_selected]["funnelURL"]);

  }