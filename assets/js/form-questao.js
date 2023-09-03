// Duas formas de criar varíavel var ou let; let na hora da minificação ele juntara as informções(se tiver 5 varíaveis text em cincos aqrquivos diferentes ele saberá diferenciar).
// .getElementById = pegar elemento por ID
// innerText = É o q está escrito entre as tags de abrir e fechar exemplo: <tag>innerText</tag>
// innerHTML = permite colocar elementos HTML dentro da tag <span></span> 
// Um array e uma armazenamento de posições inifnitas(O tamanho e colocado pelo usuário), onde a várias posições com propriedades e valor.

import perguntas from
  '/assets/dados/perguntas.json' assert { type: 'json'};

  //Variáveis
  let h3Pergunta = document.getElementById('h3Pergunta');
  let labelResposta01 = document.getElementById('labelResposta01');
  let labelResposta02 = document.getElementById('labelResposta02');
  let labelResposta03 = document.getElementById('labelResposta03');
  let labelResposta04 = document.getElementById('labelResposta04');
  let btnConfirmar = document.getElementById('btnConfirmar');
  let spanPontuacao = document.getElementById('spanPontuacao');
  let spanErros = document.getElementById('spanErros');
  let pontuacao = 0;
  let qtdeErros = 0;

  //Definição de Eventos
  btnConfirmar.addEventListener('click', () => validarResposta());

  let index = Math.floor(Math.random() * perguntas.length);

  //Movendo os dados do array de posição(index) 0 para a tela
  h3Pergunta.innerText = perguntas[index].PERGUNTA;
  labelResposta01.innerText = perguntas[index].RESP1;
  labelResposta02.innerText = perguntas[index].RESP2;
  labelResposta03.innerText = perguntas[index].RESP3;
  labelResposta04.innerText = perguntas[index].RESP4;
  
  //Definição de Funções
  function validarResposta() {
    let resp = document.
      querySelector('input[name="resposta"]:checked');

    if (resp.value == perguntas[index].CERTA) {
      alert('Parabéns... Você Acertou!!!');
      pontuacao++;
      spanPontuacao.innerText = 'Pontos: ' + pontuacao;
    } else {
      alert('Que Pena... Você Errou');
      qtdeErros++;
      spanErros.innerText = 'Erros: ' + qtdeErros;
    }
  }

//Math.random: É uma função matemática do JavaScript Math.(alguma coisa).
//Math.random * 2: O random  tem limite de até 2, o (*) nesse caso significa limitar o random
// Math.floor: Serve para arredondar um número(ele sempre arredondará para baixo por exemplo:11.971094701967502 ele arredonda para 11)




