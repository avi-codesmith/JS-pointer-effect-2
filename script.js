"use strict";

const cursor = document.getElementById("customCursor");
const text = document.getElementById("dynamicText");

text.innerHTML = text.innerText
  .split(" ")
  .map((word) => `<span>${word}</span>`)
  .join(" ");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

text.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.classList.add("hover-effect");
    cursor.classList.add("cursor-active");
  }
});

text.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.classList.remove("hover-effect");
    cursor.classList.remove("cursor-active");
  }
});
