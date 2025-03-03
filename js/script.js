let picker = document.querySelectorAll("li")
let changebackground = document.querySelector("body")

picker.forEach((li)=>{
    li.addEventListener("click", (e)=> {
        picker.forEach(li => {
            li.classList.remove("active")
        });
        
        e.target.classList.add("active")
        window.localStorage.setItem("color",e.target.dataset.color)
        changebackground.style.backgroundColor = e.target.dataset.color
        })
})

if(window.localStorage.getItem("color")){
    changebackground.style.backgroundColor = window.localStorage.getItem("color")
    picker.forEach(li => {
        if(li.dataset.color === window.localStorage.getItem("color")){
            li.classList.add("active")
        }
    })
}
