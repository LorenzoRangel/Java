const buttons = document.querySelectorAll(".btn");
const textarea = document.querySelector("textarea");
const delete_btn = document.querySelector(".delete");
const shift_btn = document.querySelector(".shift");
const space_btn = document.querySelector(".space");
//Arreglo que ira guardando los caracteres
let chars = [];
//funcion para agregar cada caracter al textarea
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});
//funcion para eliminar caracteres
delete_btn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});
//funcion para cuando den click al boton space
space_btn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});
//Funcion para mayusculas
shift_btn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});