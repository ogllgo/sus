function obamaAttack() {

    for (let i = 0; i < 100; i++) {
        window.open("./sus-land.html");
    }
}

let time = 1000;

let x = 0;
let y = 0;
let xDir = 1;
let yDir = 1;

let sus2Size = 0;
let sus2Dir = 1;
let sus2Step = 20;

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }

const tick = () => {
    if (time >= 50) {
        time -= 10;
    } else if (time >= 2) {
        time--;
    }
    const rand1 = Math.floor(Math.random() * 256);
    const rand2 = Math.floor(Math.random() * 256);
    const rand3 = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${rand1}, ${rand2}, ${rand3})`;
    setTimeout(() => tick(), 1);
}

const thing = () => {
    x += xDir;
    y += yDir;

    if (x >= 100 || x <= 0) xDir *= -1;
    if (y >= 100 || y <= 0) yDir *= -1;

    document.getElementById("sus").style.top = y + "%";
    document.getElementById("sus").style.left = x + "%";

    sus2Size += sus2Step * sus2Dir;
    if (sus2Size > 700 || sus2Size < 0) sus2Dir *= -1;
    document.getElementById("sus2").style.width = sus2Size + "px";
    document.getElementById("sus2").style.height = sus2Size + "px";

    if (Math.random() <= 0.2) {
        new Audio("./sus-sound.mp3").play();
        console.log("AMOUNG US POGGERS");
        while (true) {
            if (Math.random() <= 0.7) {
                if (Math.random() <= 6) {
                    console.error(Math.random())
                } else {
                    
                console.warn(Math.random())
                }
            } else {
                break;
            }
        }
    }
}

window.onload = () => {
    setInterval(() => thing(), 50);
}

document.onclick = () => {
    tick();

    for (const elem of document.querySelectorAll(".inVENT")) {
        elem.classList.remove("inVENT");
    }
}