let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggle_menu() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "160px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
