const flipbtn = document.getElementById("flip-button");
const resdisplay = document.getElementById("result");
const coinImg = document.getElementById("coin-img");

const headsImg = "./assets/heads.svg";
const tailsImg = "./assets/tails.svg";
function flipCoin() {
  resdisplay.textContent = "Flipping...";
  resdisplay.className = "flipping-text";
  coinImg.classList.add("flipping");

  setTimeout(() => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    coinImg.src = result === "Heads" ? headsImg : tailsImg;
    resdisplay.textContent = result;
    resdisplay.className = "result-badge";
    resdisplay.style.animation = "none";
    void resdisplay.offsetWidth;
    resdisplay.style.animation = "pop 0.3s ease";
    coinImg.classList.remove("flipping");
  }, 600);
}

flipbtn.addEventListener('click', flipCoin);
coinImg.addEventListener('click', flipCoin);