let boxs = document.getElementsByClassName('box');
let boxsArray = Array.from(boxs);

// let audio = new Audio('https://flukeout.github.io/simple-sounds/sounds/ping.mp3');

let boxClicked = function(e) {
  // boxsArray.forEach(function(el) {
  //   el.classList.remove('active');
  // })
  
  for(let i = 0; i < boxsArray.length; i++) {
    let el = boxsArray[i];
    el.classList.remove('active');
  }
  
  e.target.classList.add('active');
  // audio.loop = false;
  // audio.play(); 
}


for (let i = 0; i < boxsArray.length; i++) {
    let el = boxsArray[i];
    el.onclick = boxClicked;
}

// boxsArray.forEach(function(el) {
//   el.onclick = boxClicked;
// })