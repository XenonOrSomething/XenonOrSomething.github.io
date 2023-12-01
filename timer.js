//welcome to reused code

        
            
var countDownDate = new Date(Date.UTC(2023, 11, 24)).getTime();
var endDate = new Date(Date.UTC(2023, 11, 26)).getTime();

function dateCompare(date1, date2){
    return new Date(date2) > new Date(date1);
}

if(dateCompare(endDate, new Date().getTime())){
    document.getElementById("timerText").innerHTML = "event over";
    throw new Error("event over");
}


  var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24) + 1);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timerText").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timerText").innerHTML = "its happening.";
  }
  
}, 1000);
