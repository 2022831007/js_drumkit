
let box=document.querySelectorAll(".a");
let audios=document.querySelectorAll("audio");
let keys = ["a","s","d","f","g","h","j","k","l"];
document.addEventListener("keydown",function(e){
    let key=e.key.toLocaleLowerCase();
    let ind=keys.indexOf(key);
    if(ind===-1) return;
    audios[ind].currentTime=0;
    audios[ind].play();
    box[ind].classList.add("playing");
    setTimeout(() => box[ind].classList.remove("playing"), 100);


})


