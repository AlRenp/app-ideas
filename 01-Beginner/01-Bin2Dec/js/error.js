export const AlertError = {
  error: document.querySelector(".error"),

  open() {
    AlertError.error.classList.add("open");
  },
  close() {
    AlertError.error.classList.remove("open");
  },
};
