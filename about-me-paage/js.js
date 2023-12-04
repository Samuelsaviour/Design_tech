const bar=document.querySelector(".fa-bars")
const navbar=document.querySelector(".nav")
const professions=document.querySelectorAll(".profession")
const drop_1=document.querySelector(".drop-1")
const Link_its=document.getElementsByClassName("link-it")
const texxt=document.getElementsByClassName("ttxt");
const info_text=document.getElementsByClassName("personal-info-heded");
const wrapping_text=document.querySelector(".wraping-information");


console.log(texxt);

// alert(Link_its);

bar.addEventListener("click",function(){
    if(bar.className=="fa-solid fa-bars") {
        bar.className="fa-solid fa-times"
    }
     else if (bar.className=="fa-solid fa-times"){
        bar.className="fa-solid fa-bars"
    }
     
      
    navbar.classList.toggle('slide-in')
})
let count=''
// getting each text to the info text
   professions.forEach((profess,index) => {
    profess.addEventListener("click",function(e) {
     let getiingtext=  profess.children[0].children[1].innerText
     info_text[0].innerText =getiingtext
 count=index -1
    count=count < 3 ? count + 1:0;
    wrapping_text.style.transform=`translateX(${count*-25}%)`
    
    })
});

// dropdown  section
professions[0].addEventListener("click",function(){
    drop_1.classList.toggle("drop-down");
     
}) 
 

// removing class and adding it to another
 
    for (let index = 0; index < Link_its.length; index++) {
        Link_its[index].addEventListener('click',function(params) {
   
            document.querySelector('.active-proffe').classList.remove('active-proffe')
            Link_its[index].classList.add('active-proffe')
        })   
    }
 
 