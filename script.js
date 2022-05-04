//Variables

let modal = document.querySelector(".modal-start");
let modalGameOver = document.querySelector(".modal-game-over");
let modalTutorial = document.querySelector(".modal-tutorial");
let modalWin = document.querySelector(".modal-win");
let tapSound = document.querySelector(".tap");
let winSound = document.querySelector(".modal-win-sound");
let buttonStart = document.querySelector(".modal__btn");
let buttonTutorial = document.querySelector(".modal__btn__tutorial");
let buttonWin = document.querySelector(".modal__btn__win");
let element = document.createElement("div");
let counter = document.querySelector(".counter");
let counterLine = document.querySelector(".line-counter");
let head = document.querySelector(".head");
let pupils = document.querySelectorAll(".pupils");
let i = 0;
let colors = [
  "023047",
  "cb997e",
  "1d3557",
  "e63946",
  "0077b6",
  "283618",
  "ccd5ae",
  "8338ec",
  "212529",
  "cddafd",
  "222"
];

//SECTION EYES

let mouse = (document.onmousemove = (event) => {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";
  pupils.forEach((pupils) => {
    pupils.style.left = x;
    pupils.style.top = y;
  });
});

//SECTION START
buttonStart.addEventListener("click", () => {
  start();
});

//SECTION TUTORIAL

buttonTutorial.addEventListener("click", () => {
  let closeModalTutorial = document.querySelector("#close-modal-tutorial");
  modalTutorial.style.transform = "translateX(0)";

  closeModalTutorial.addEventListener("click", () => {
    modalTutorial.style.transform = "translateX(100%)";
  });
});

//FUNCTIONS

function start() {
  modal.style.display = "none";
  let cuerpo = document.querySelector("body");
  element.classList.add("balls");
  cuerpo.appendChild(element);

  let index;
  for (index = 100; index > 0; index--) {
    counterLine.style.height = index - 1 + "%";
    counterLine.style.transition = 25 + "s";
  }

  setTimeout(() => {
    if (index == 0 && counter.textContent < "40") {
      modalGameOver.innerHTML =
        '<h1 class="game-over-title">GAME OVER</h1> <br><audio src="src/loser.mp3" autoplay loop></audio> <br> <img src="src/img/1.gif" alt="" class="modal-game-over-img"> <br> <button id="btn-reestart" class="modal__btn modal__btn--2">Reestart</button>';
      modalGameOver.style.display = "flex";
      modalGameOver.style.flexDirection = "column";

      let btnResstart = document.querySelector("#btn-reestart");

      btnResstart.addEventListener("click", () => {
        window.location.href = "/TheGame/index.html";
      });
    }
  }, 25000);

  //balls "tap"
  element.addEventListener("click", (e) => {
    //SOUND "TAP"
    tapSound.innerHTML =
      '<audio class="tap" src="src/tap.mp3" autoplay></audio>';

    //COUNTER
    counter.textContent = i++;
    counterLine.classList.add("line-counter-active");

    let eyebrowsUno = document.querySelector(".eye-1");
    let eyebrowsDos = document.querySelector(".eye-2");
    let mouth = document.querySelector(".mouth");

    //LEVELS
    if (counter.textContent == "10") {
      mouth.classList.add("mouth-2-level");
      eyebrowsDos.classList.add("eyebrows-two-2-level");
      eyebrowsUno.classList.add("eyebrows-one-2-level");
    } else if (counter.textContent == "20") {
      head.style.background = "orange";
      mouth.classList.add("mouth-3-level");
      eyebrowsDos.classList.add("eyebrows-two-3-level");
      eyebrowsUno.classList.add("eyebrows-one-3-level");
    } else if (counter.textContent == "30") {
      head.style.background = "#ae2012";
      mouth.classList.add("mouth-4-level");
      eyebrowsDos.classList.add("eyebrows-two-4-level");
      eyebrowsUno.classList.add("eyebrows-one-4-level");
    } else if (counter.textContent == "40") {
      head.style.background = "#6c757d";
      mouth.classList.add("mouth-5-level");
      eyebrowsDos.classList.add("eyebrows-two-5-level");
      eyebrowsUno.classList.add("eyebrows-one-5-level");
      head.classList.add("fin");
      modalWin.style.transform = "scale(1)";
      winSound.setAttribute("src", "src/win.mp3");
      buttonWin.addEventListener("click", () => {
        window.location.href = "/TheGame/index.html";
      });
    }

    //balls positions
    let x = Math.round(Math.random() * 100);
    let y = Math.round(Math.random() * 100);

    if (x < 90 && y < 90) {
      element.style.left = x + "vw";
      element.style.top = y + "vh";
      element.style.background =
        "#" + colors[Math.floor(Math.random() * colors.length - 1)];
    }
  });
}
