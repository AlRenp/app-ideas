import { AlertError } from "./error.js";
const span = document.querySelector("span");

export function updateScreen(value) {
  if (isNaN(value)) {
    AlertError.open();
    return;
  }
  span.innerText = value;
}

export function isNumber(value) {
  return isNaN(value) || value === "";
}
