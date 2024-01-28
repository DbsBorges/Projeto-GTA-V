const botao = document.querySelector(".btn");
const elementoPlataformas = document.querySelector(".btn .plataformas");

botao.addEventListener("click", () => {   
  elementoPlataformas.classList.toggle("ativo");
});

   

