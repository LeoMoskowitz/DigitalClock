var timeDiv = document.querySelector('#time');

function getTime(){
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var meridiem = "AM";
  
  if(min < 10){
    min = "0" + min;
     }
  
    if(sec < 10){
    sec = "0" + sec;
     }
  
  if(hrs > 11){
    meridiem = "PM";
  }
  if(hrs > 12){
    hrs = hrs - 12
  }
  
  timeDiv.innerHTML = hrs + ":" + min + ":" + sec + " " +meridiem;
}

function getRandomNum(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * ((max-min)+ 1)) + min;
}

function getRGB(background, color){
  var r = getRandomNum(0, 135);
  var g = getRandomNum(0, 135);
  var b = getRandomNum(0, 135);
  
  var R = getRandomNum(150, 256);
  var G = getRandomNum(150, 256);
  var B = getRandomNum(150, 256);
  
  document.body.style.background = "rgb("+ r + "," + g + "," + b + ")";
  document.body.style.color = "rgb("+ B + "," + G + "," + R + ")";
}


getRGB();
setInterval(getRGB,1000);
getTime();
setInterval(getTime,1000);
