let scrolltotop = document.querySelector(".scroll-to-top")
let stickynav = document.querySelector(".sticky-navbar")
let body = document.querySelector("html,body")
// console.log(stickynav)
window.addEventListener("scroll" , ()=>{
if(body.scrollTop >= 100){
    scrolltotop.style.display= "block"
    scrolltotop.addEventListener("click" , ()=>{
        window.scrollTo(0 , 0)
    })
}else{
    scrolltotop.style.display= "none"
}
})

window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100){
        stickynav.style.display= "block"
        if(stickynav.classList.contains("animate__fadeOutUp")){
            stickynav.classList.remove("animate__animated","animate__fadeOutUp")
        }
        
        stickynav.classList.add("animate__animated","animate__fadeInDown")
    }else{
        stickynav.style.display= "block"
        if(stickynav.classList.contains("animate__fadeInDown")){
            stickynav.classList.remove("animate__animated","animate__fadeInDown")
        }
        stickynav.classList.add("animate__animated","animate__fadeOutUp")
    }
    })

    let moonicon = document.querySelector(".dark-theme")
    let stylesheet = document.querySelector(".stylesheet")
    moonicon.addEventListener("click" , ()=>{
        stylesheet.setAttribute("href" , "css/style-dark.css")
    })