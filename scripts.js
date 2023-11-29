if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    document.getElementById("mobileusers").innerHTML = "if youre a mobile user, cope";
    console.log("haha mobile user");
  }else{
    // false for not mobile device
    console.log("thanks stackoverflow");
  }
  