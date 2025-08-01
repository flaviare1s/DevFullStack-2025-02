const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");

function toggleContent(contentToShow, activeButton) {
  content1.classList.add("hidden");
  content2.classList.add("hidden");
  content3.classList.add("hidden");

  btn1.classList.remove("button-active");
  btn2.classList.remove("button-active");
  btn3.classList.remove("button-active");

  contentToShow.classList.remove("hidden");

  activeButton.classList.add("button-active");
}

btn1.addEventListener("click", () => toggleContent(content1, btn1));
btn2.addEventListener("click", () => toggleContent(content2, btn2));
btn3.addEventListener("click", () => toggleContent(content3, btn3));
