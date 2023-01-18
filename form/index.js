const photoInput = document.getElementById("file");
const photoContainer = document.getElementById("photoContainer");
const modal = document.getElementById("modal");
const sendButton = document.getElementById("send");
const emailInout = document.getElementById("email");
const cross = document.getElementById("cross");
const toHide = document.getElementsByClassName("toHide");
let currentPhoto = null;

photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file.size > 4000000) {
    return console.warn("limit exceeded");
  }
  const container = document.createElement("div");
  container.classList.add("photo-input__photo-parent");
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.classList.add("photo-input__photo");
  container.appendChild(img);
  photoContainer.appendChild(container);
  Array.prototype.forEach.call(toHide, (el) => {
    el.classList.add("hidden");
  });
});

photoContainer.addEventListener("click", (e) => {
  const img = e.target;
  if (img.tagName === "IMG") {
    currentPhoto?.parentElement.classList.toggle("chosen");
    currentPhoto = e.target;
    currentPhoto?.parentElement.classList.toggle("chosen");
  }
});

sendButton.addEventListener("click", () => {
  if (!currentPhoto) {
    const req = document.getElementsByClassName("requered");
    Array.prototype.forEach.call(req, (el) => {
      el.classList.add("error");
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }
  modal.classList.remove("hidden");
});

cross.addEventListener("click", () => {
  modal.classList.add("hidden");
});
