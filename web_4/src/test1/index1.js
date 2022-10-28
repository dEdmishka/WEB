const popup = document.querySelector(".popup"),
      signUp = document.querySelector(".signup-link"),
      signIn = document.querySelector(".signin-link"),
      blur = document.getElementById("blur"),
      show = document.querySelector("#show_btn"),
      close1 = document.querySelector(".popup .close_btn_1"),
      close2 = document.querySelector(".popup .close_btn_2");

    signUp.addEventListener("click", ()=>{
        popup.classList.add("active");
    });
    signIn.addEventListener("click", ()=>{
        popup.classList.remove("active");
    });

    show.addEventListener("click", function (){
    popup.classList.add("actived");
    blur.classList.add("active");
})

    close1.addEventListener("click", function (){
    popup.classList.remove("actived");
    blur.classList.remove("active");
})
    close2.addEventListener("click", function (){
    popup.classList.remove("actived");
    blur.classList.remove("active");
})
