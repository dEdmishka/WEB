let blur = document.getElementById("blur");
document.querySelector("#show_btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.add("active");
    blur.classList.add("active");
    //document.querySelector("html").style.filter = "blur(5px)";
    //document.querySelector(".popup").style.filter = "blur(0px)";
})
document.querySelector(".popup .close_btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.remove("active");
    blur.classList.remove("active");
})