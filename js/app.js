//import { Pessoa } from "./classe/Pessoa.js";
////adicionar coixa de texto
//let caixa = document.getElementById("forma");
//let txtN = ``;
//caixa.innerHTML = txtN;
//for (let i =0;i<5;i++){
//    txtN +=`
//    <label for="txtN${i}">Nome ${i +1}</label>
//    <input type="text" id="txtN${i}" placeholder="Caixa ${i + 1}">
//`;
//}
//caixa.innerHTML = txtN;
//let res = document.getElementById("r");
//let r2 = document.getElementById("r2");
//let botao = document.getElementById("btnInserir");
//botao.addEventListener('click',()=>{
//    let valor = document.getElementById('txtN0').value;
//    let pessoa1 = new Pessoa(valor);
//    res.innerHTML = pessoa1.exibirNome();
//    r2.textContent=nome;
//});
//caixa.innerHTML = txtN;
//caixa.style.display = "flex";
//caixa.style.flexFlow='column wrap';
//caixa.style.alignContent= "center";
//caixa.style.gap = '3px';

import { Pessoa } from "./classe/Pessoa.js";

// --- Criação dinâmica das caixas de texto ---
let caixa = document.getElementById("forma");
let txtN = ``;

for (let i = 0; i < 5; i++) {
  txtN += `
    <label for="txtN${i}">Nome ${i + 1}</label>
    <input type="text" id="txtN${i}" placeholder="Caixa ${i + 1}">
  `;
}
caixa.innerHTML = txtN;

// --- Seleção dos elementos de resultado ---
let res = document.getElementById("r");
let r2 = document.getElementById("r2");
let botao = document.getElementById("btnInserir");

// --- Evento do botão ---
botao.addEventListener("click", () => {
  res.innerHTML = ""; // limpa antes de mostrar de novo
  r2.innerHTML = "";  // limpa também

  for (let i = 0; i < 5; i++) {
    let valor = document.getElementById(`txtN${i}`).value.trim();

    if (valor !== "") {
      let pessoa = new Pessoa(valor);

      // mostra a saudação personalizada
      res.innerHTML += pessoa.exibirNome() + "<br>";

      // mostra só o nome cru (se quiser)
     // r2.innerHTML += pessoa.nome + "<br>";
    }
  }
});

// --- Estilização dinâmica ---
caixa.style.display = "flex";
caixa.style.flexFlow = "column wrap";
caixa.style.alignContent = "center";
caixa.style.gap = "3px";
