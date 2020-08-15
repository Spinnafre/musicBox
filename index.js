window.addEventListener("load", () => {
  var stylesCSS=document.createElement('style')
  document.head.appendChild(stylesCSS)

  const visual = document.querySelector(".visual");
  var teclas = document.querySelectorAll(".pads div");
  const sounds = document.querySelectorAll(".sound");
  const colors = [
    "#ff0000",
    "#ffff00",
    "#80ff00",
    "#00ffff",
    "#0080ff",
    "#bf00ff"
  ];

  teclas.forEach((tecla,index)=>{
    tecla.addEventListener('click',()=>{
      sounds[index].currentTime=0
      sounds[index].play()
      createBall(index)
    })
  })

  const createBall=(index)=>{
    const rules=document.createTextNode('body{background-color:gray;}'+`@keyframes jump{0% {bottom: 0%;left: ${index*18}%;}50% {bottom: 50%;left: ${index+10}0;}100% {bottom: 00%;left: 100%;}}`)
    stylesCSS.appendChild(rules)
    
    const ball=document.createElement('div')
    visual.appendChild(ball)
    ball.style.backgroundColor=colors[index]
    ball.style.animation='jump 1s ease-in-out'
    ball.addEventListener('animationend',()=>{
      visual.removeChild(ball);
      console.log(stylesCSS)
      stylesCSS.removeChild(rules)
    })
    // alert('ball')
  
    
  
  }

});

