const player = document.querySelector(".player");
const obstacle = document.querySelector(".obstacle");
const gameDiv = document.querySelector(".game");
const youLoseText = document.querySelector(".you-lose");
const restartBtn = document.querySelector(".you-lose button");

document.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    player.classList.remove("jump");
    void player.offsetWidth;
    player.classList.add("jump");
  }
})

setInterval(function () {
  let collision = checkCollision(player, obstacle);
  if (collision) {
    player.style.animation = "none";
    obstacle.style.animation = "none";
    player.style.left = collision.left1.toString() + "px";
    player.style.top = collision.top1.toString() + "px";
    obstacle.style.left = collision.left2.toString() + "px";
    obstacle.style.top = collision.top2.toString() + "px";

    endgame();
  }
}, 10)

function checkCollision(elem1, elem2) {
  width1 = elem1.offsetWidth;
  height1 = elem1.offsetHeight;
  left1 = elem1.offsetLeft;
  top1 = elem1.offsetTop;

  width2 = elem2.offsetWidth;
  height2 = elem2.offsetHeight;
  left2 = elem2.offsetLeft;
  top2 = elem2.offsetTop;

  if (left1 < left2 + width2 &&
    left1 + width1 > left2 &&
    top1 < top2 + height2 &&
    top1 + height1 > top2) {
    return {
      left1: left1,
      top1: top1,
      left2: left2,
      top2: top2
    }
  }
}

function endgame() {
  gameDiv.style.opacity = ".5";
  youLoseText.style.display = "block";
}

restartBtn.addEventListener("click", function () {
  setTimeout(function () {
    player.setAttribute("style", "");
    obstacle.setAttribute("style", "");

    player.classList.remove("jump");

    gameDiv.style.opacity = "1";
    youLoseText.style.display = "none";

  }, 500)

})

