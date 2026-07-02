const passwordBox = document.getElementById("passwordBox");

const numButtons = document.querySelectorAll(".num-btn");

const clearBtn = document.querySelector(".clear-btn");

const enterBtn = document.querySelector(".enter-btn");

let enteredPassword = "";

numButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (enteredPassword.length < 6) {

            enteredPassword += button.textContent;

            passwordBox.value = enteredPassword;
        }

    });

});

clearBtn.addEventListener("click", () => {

    enteredPassword = enteredPassword.slice(0, -1);

    passwordBox.value = enteredPassword;

});

enterBtn.addEventListener("click", () => {

    if (enteredPassword === "372004") {

       document.getElementById("page1").style.display = "none";
       document.getElementById("page2").classList.remove("hidden");
       setInterval(createFirework,300);
       setInterval(createHeart,700);
       setTimeout(() => {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3")
            .classList.remove("hidden");
        startLoading();
        },5000);


    } else {

        passwordBox.classList.add("shake");
        setTimeout(() => {
            passwordBox.classList.remove("shake");
        
        }, 400);
        enteredPassword = "";
        passwordBox.value = "";

    }

});
function createFirework(){

    const firework = document.createElement("div");

    firework.classList.add("firework");

    firework.style.left = Math.random() * window.innerWidth + "px";

    firework.style.top = Math.random() * window.innerHeight + "px";

    const colors = [
        "#FFD700",
        "#FF69B4",
        "#FFFFFF",
        "#FF0000"
    ];

    firework.style.background =
        colors[Math.floor(Math.random()*colors.length)];

    document.getElementById("fireworks")
        .appendChild(firework);

    setTimeout(()=>{
        firework.remove();
    },1500);
}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}
function startLoading(){

    let progress = 0;

    const fill =
        document.getElementById("loadingFill");

    const percent =
        document.getElementById("loadingPercent");

    const interval = setInterval(() => {

        progress++;

        fill.style.width = progress + "%";

        percent.innerHTML = progress + "%";

        if(progress >= 100){

    clearInterval(interval);

    setTimeout(() => {

        document.getElementById("page3").style.display = "none";

        document.getElementById("page4")
            .classList.remove("hidden");

    },1000);

}

            

        

    },100);

}
function createPage3Heart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.fontSize =
        (20 + Math.random() * 30) + "px";

    document.getElementById("page3Hearts")
        .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}
const openLetter = document.getElementById("openLetter");

if(openLetter){

    openLetter.addEventListener("click", () => {

        document.querySelector(".envelope")
            .style.transform = "scale(0)";

        setTimeout(() => {

            document.getElementById("page4")
                .style.display = "none";

            document.getElementById("page5")
                .classList.remove("hidden");

        },500);

    });

}
const readLetterBtn = document.getElementById("readLetterBtn");

if(readLetterBtn){

    readLetterBtn.addEventListener("click", () => {

        document.getElementById("page5")
            .style.display = "none";

        document.getElementById("page6")
            .classList.remove("hidden");

    });

}
function buildCake(){

    setTimeout(() => {

        document.querySelector(".layer1")
        .classList.add("show-layer");

    },1000);

    setTimeout(() => {

        document.querySelector(".layer2")
        .classList.add("show-layer");

    },2000);

    setTimeout(() => {

        document.querySelector(".layer3")
        .classList.add("show-layer");

    },3000);

    setTimeout(() => {

        document.querySelector(".candles")
        .classList.add("show-layer");

    },4000);

    setTimeout(() => {

        document.querySelector(".wish-title")
        .classList.add("show-element");

    },5000);

    setTimeout(() => {

        document.querySelector(".countdown")
        .classList.add("show-element");

        startCountdown();

    },6000);

}
const finalGiftBtn =
document.getElementById("finalGiftBtn");

if(finalGiftBtn){

    finalGiftBtn.addEventListener("click", () => {
        

        document.getElementById("page6").style.display = "none";

        document.getElementById("page7")
            .classList.remove("hidden");

        document.querySelector(".layer1")
            ?.classList.remove("show-layer");

        document.querySelector(".layer2")
            ?.classList.remove("show-layer");

        document.querySelector(".layer3")
            ?.classList.remove("show-layer");

        document.querySelector(".candles")
            ?.classList.remove("show-layer");

        document.querySelector(".wish-title")
            ?.classList.remove("show-element");

        document.querySelector(".countdown")
            ?.classList.remove("show-element");

        buildCake();

    });

}
function startCountdown(){

    let count = 5;

    const countdown =
    document.getElementById("countdown");

    countdown.innerText = count;

    const timer = setInterval(() => {

        count--;

        countdown.innerText = count;

        if(count === 0){

            clearInterval(timer);

            birthdayEnding();

        }

    },1000);

}
function birthdayEnding(){

    document.querySelector(".cake-stage").style.display = "none";
    document.querySelector(".wish-title").style.display = "none";
    

    document.getElementById("countdown").style.display = "none";

    const page7 =
    document.getElementById("page7");

    page7.style.transition = "2s";
    page7.style.background = "#111";

    setTimeout(()=>{
        const endingMusic =
            document.getElementById("endingMusic");

            endingMusic.play();

        const msg = document.createElement("h1");

        msg.innerHTML =
        "Happy Birthday My Love ❤️";

        msg.classList.add("final-message");

        msg.style.position = "fixed";
        msg.style.top = "50%";
        msg.style.left = "50%";
        msg.style.transform =
        "translate(-50%,-50%)";

        msg.style.color = "white";
        msg.style.fontSize = "80px";
        msg.style.width = "100%";
        msg.style.textAlign = "center";
        msg.style.zIndex = "999999";

        document.body.appendChild(msg);

    },1500);

}
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

if(musicBtn){

    musicBtn.addEventListener("click", () => {

        if(bgMusic.paused){

            bgMusic.play();
            musicBtn.classList.add("music-playing");

        }else{

            bgMusic.pause();
            musicBtn.classList.remove("music-playing");

        }

    });

}