const bar=document.querySelector(".fa-bars")
const navbar=document.querySelector(".nav")
const navigate_btn_up=document.getElementsByClassName("right-btn")
const navigate_btn_down=document.getElementsByClassName("left-btn")
const carosel_wrapper=document.getElementsByClassName("carosel-wrap")
let count=0;
 

navigate_btn_up[0].addEventListener("click",scrollup)
navigate_btn_down[0].addEventListener("click",scrolldown)


function  scrolldown(){
    count=count > 0 ? count - 1:0;
    carosel_wrapper[0].style.transform=`translateY(${count*-100}px)`
   
    }

function  scrollup(){
    count=count < 6 ? count + 1:6;
    carosel_wrapper[0].style.transform=`translateY(${count*-100}px)`
   
    }
      

     
bar.addEventListener("click",function(){
    if(bar.className=="fa-solid fa-bars") {
        bar.className="fa-solid fa-times"
    }
     else if (bar.className=="fa-solid fa-times"){
        bar.className="fa-solid fa-bars"
    }
     
      
    navbar.classList.toggle('slide-in')
})