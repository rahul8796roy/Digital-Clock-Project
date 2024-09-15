const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')   // (other method declare var)

setInterval(function () {
  let date = new Date();
  
  // console.log(date.toLocaleTimeString());        // (console run)   
  
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

