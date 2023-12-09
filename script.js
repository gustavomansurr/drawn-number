function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value); /* Obtém o valor mínimo inserido */
    const max = Math.floor(document.querySelector(".input-max").value); /* Obtém o valor máximo inserido */
  
    const result = Math.floor(Math.random() * (max - min + 1)) + min; /* Gera um número aleatório dentro do intervalo fornecido */
  
    document.getElementById("result").value = result; /* Define o valor do input de resultado como o número sorteado */
  }
  