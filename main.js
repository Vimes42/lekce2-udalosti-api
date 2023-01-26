// tady je místo pro náš program

let odstavec = document.querySelector("p");
let zvuk = document.querySelector(".zvuk");



function textBold(){
    odstavec.style.fontWeight = "bold";
}

function zmenBarvu(){
    odstavec.classList.add("cerveny");
}

function zvetsiPismo(){
    odstavec.style.fontSize = "17px";
}

function prehraj(){
    zvuk.play();
}

function stop(){
    zvuk.pause();
}

function pretoc(){
    zvuk.currentTime=0;
}
