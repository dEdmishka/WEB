function calc() {
    let a = document.getElementById("height").value;
    let b = document.getElementById("width").value;
    let perim = 0, square = 0, diag = 0;

    if (a > 0 && b > 0){
        perim = (+a + +b) * 2;
        square = +a * +b;
        diag = Math.sqrt((+a)**2 + (+b)**2).toFixed(4)
    }

    document.getElementById("perim").innerHTML = String(perim);
    document.getElementById("square").innerHTML = String(square);
    document.getElementById("diag").innerHTML = String(diag);
}
//
function dayCalc(){
    let input = document.getElementById("date").value;
    let enteredDate = new Date(input);
    let day = enteredDate.getDay();
    let month = enteredDate.getMonth();
    let year = enteredDate.getFullYear();

    const daysOfWeek = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];
    document.getElementById("daysOfWeek").innerHTML = String(daysOfWeek[day]);
//calculating day formula
    let a = (14 - month) / 12;
    let y = year - a;
    let m = month + 12 * a - 2;
    let dayOfWeek = parseInt(String((day + y + y / 4 - y / 100 + y / 400 + (31 * m) / 12) % 7));

    const days = {
        '0': 'субота', '1' : 'неділя', '2' : 'понеділок', '3': 'вівторок',
        '4': 'середа', '5': 'четвер', '6': "п'ятниця"
    }
    if (days[dayOfWeek] !== undefined){
        console.log(days[dayOfWeek])
        document.getElementById("dayOfWeek").innerHTML = String(days[dayOfWeek]);
    }
//
}
//
function uaToEn() {
    const ua = {
        'а': 'a', 'б' : 'b', 'в' : 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
        'є': 'ye', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'j',
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
        'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'x', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'shch', 'ю': 'yu', 'я': 'ya', 'ь': "'", "'": "'",
        '' : '', ' ' : ' '
    }
    let text = document.querySelector('.ua').value;
    let str = '';
    for (let i = 0; i < text.length; i++){
        let k = text[i];
        if (ua[k] !== undefined)
            str += ua[k];
        else {
            if (ua[k.toLowerCase()]) {
                let s = ua[k.toLowerCase()]
                str += s.toUpperCase();
            }
        }
    }
    document.querySelector('.en').innerHTML = str;
}
const ua = document.querySelector(".ua")
ua.addEventListener("input", ()=>{
    uaToEn();
})
//
const imagesOuter = document.querySelector('.images-outer');
const imageOut = document.querySelector('.image-out');

for(let key in images){
    let img = document.createElement('img');
    img.setAttribute("data-key", key);
    img.src = "../img/"+key+".png";
    img.alt = key;
    imagesOuter.append(img);
}
//
imagesOuter.addEventListener("click", showImg);

function showImg(event){
    const key = event.target.dataset["key"];
    if(key === undefined){
        return true;
    }
    if(imageOut.hasChildNodes()){
        imageOut.firstChild.remove();
    }
    let imgOut = document.createElement('img');
    imgOut.src = images[key]["image"];
    imgOut.alt = key;
    imageOut.append(imgOut);
}
//





