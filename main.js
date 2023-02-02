// tady je místo pro náš program

let odstavec = document.querySelector("p");
let zvuk = document.querySelector(".zvuk");



function textBold(){
    if(odstavec.style.fontWeight == "bold"){
        odstavec.style.fontWeight = "normal";
    }else{
        odstavec.style.fontWeight = "bold";
        }
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

if (zvuk.volume=0){
    function zvysHlasitost(){
        zvuk.volume=0.5} 
    } else if (zvuk.volume=0.5){
        function zvysHlasitost(){zvuk.volume=1};
    } else {
        zvuk.volume=1;
    }

if (zvuk.volume=1){
    function snizHlasitost(){
        zvuk.volume=0.5;} 
    } else {
        function snizHlasitost(){zvuk.volume=0}
    } 

function pretoc(){
    zvuk.currentTime=0;
}
