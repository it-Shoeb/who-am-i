const leftArrowEl = document.querySelector(".left");
const rightArrowEl = document.querySelector(".right");
const imageContaierEl = document.querySelector(".image-container");

console.log(imageContaierEl);

import { data } from "./data.js";
console.log(data);

let i = 0;
contentSetter();

rightArrowEl.addEventListener("click", () => {
  i++;
  if (i > data.length - 1) {
    i = 0;
  }
//   clearInterval(imageInerval)
  contentSetter();
});

leftArrowEl.addEventListener("click", () => {
  i--;

  if(i <= 0){
    i = data.length - 1
  }
//   clearInterval(imageInerval)
  contentSetter();
});

const imageInerval = setInterval(() => {
    i++;
    if(i > data.length - 1){
        i = 0;
    }
    
    contentSetter()
}, 5000)

function contentSetter() {
  imageContaierEl.innerHTML = `
          <img src="${data[i].img}" alt="" />
          <div class="skill-name">${data[i].skill}</div>
          `;
}