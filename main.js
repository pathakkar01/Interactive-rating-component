const buttons = document.querySelectorAll(".rating--button");
const selected = document.getElementById("selected-stars");
const thankYouScreen = document.getElementById("thank-you-screen");
const ratingScreen = document.getElementById("rating-screen");
let stars;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeAll();
    button.classList.add("active");
    stars = button.id[0];
    console.log(stars);
  });
});

const removeAll = () => {
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
};

document.getElementById("submit").addEventListener("click", () => {
  selected.innerHTML = stars;
  ratingScreen.style.display = "none";
  thankYouScreen.style.display = "flex";
});
