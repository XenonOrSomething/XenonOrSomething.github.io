function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  var i = 0;

//document.getElementById("windex").translate(Range(0, 50), Range(0, 50));
sleep(2000).then(() => { rotate(); });
function rotate(){
    /* there was gonna be some cool shit here, but it just freezes your browser. no cool shit here i guess :(
    while(true){
        document.getElementById("windex").style.color = i;
        console.log(i);
        if(i = 360){
            i = 0;
        }
        i++
    }
    */
}

