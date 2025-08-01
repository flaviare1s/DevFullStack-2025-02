const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".grid button");

let expressao = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const valor = button.textContent;

    if (valor === "AC") {
      expressao = "";
      display.textContent = "";
    } else if (valor === "DEL") {
      expressao = expressao.slice(0, -1);
      display.textContent = expressao;
    } else if (valor === "=") {
      try {
        const resultado = eval(expressao);
        display.textContent = resultado;
        expressao = resultado.toString();
      } catch (error) {
        display.textContent = "Erro";
        expressao = "";
      }
    } else {
      expressao += valor;
      display.textContent = expressao;
    }
  });
});
