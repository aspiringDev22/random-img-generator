const imgContainerEL = document.querySelector(".img-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imgNum = 4;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imgNum; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/200/200?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgContainerEL.appendChild(newImgEl);
  }
}
