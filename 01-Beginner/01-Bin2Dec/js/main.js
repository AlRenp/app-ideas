// ***
// *
//
// [x] Fazer uma validação para verificar se há valor inserido no input
// [x] Validar se o valor inserido é 0 ou 1
// [x] Quando der um backspace, recalcular a converção
// [ ] Validar para que input só aceite 8 caracter
//
// *
// **

import { AlertError } from "./error.js";
import { updateScreen } from "./utils.js";

const input = document.querySelector("#in");
let arrayInput = [];

function start() {
  arrayInput = input.value;

  let aux = arrayInput.length - 1;
  let result = 0;

  for (let i = 0; i <= arrayInput.length - 1; i++) {
    if (
      isNaN(input.value) ||
      parseInt(arrayInput[i]) < 0 ||
      parseInt(arrayInput[i]) > 1
    ) {
      AlertError.open();
      return;
    }
    result += arrayInput[i] * Math.pow(2, aux);
    aux--;
  }
  updateScreen(result);
  AlertError.close();
}

input.addEventListener("input", start);
