let btn=document.getElementById("btn")
let counter=document.getElementById("counter")
let btnaz=document.getElementById("btn-az")
let say=0
if(localStorage.getItem("say")){
    say=parseInt(localStorage.getItem("say"))
    counter.innerHTML=say
}else{
    say=0
    localStorage.setItem("say",0)
}
btn.addEventListener("click",(e)=>{
    say++
    localStorage.setItem("say",say)
    counter.innerHTML=say
})

btnaz.addEventListener("click",(e)=>{
    
    if (say>0) {
        say--
    localStorage.setItem("say",say)
    counter.innerHTML=say
    }
    else{
        alert("menfi ola bilmez")
    }
})
