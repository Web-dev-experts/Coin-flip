let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (random === 1) {
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    coin.style.animation = "spin-tails 3s forwards";
    tails++;
  }
  setTimeout(() => {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  }, 3000);
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
});
resetBtn.addEventListener("click", function () {
  heads = 0;
  tails = 0;
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  coin.style.animation = "none";
});
