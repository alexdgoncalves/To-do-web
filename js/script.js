const btnAdc = document.querySelector("#adicionar-tarefa");
const boardTarefa = document.querySelector("#tarefas");
const inputTarefa = document.querySelector("#tarefa-digitada");

btnAdc.addEventListener("click", () => {
  // Criando um elemento HTML utilizando o DOM obs: criado como um obj js
  // const div = document.createElement("div");
  // div.textContent = "teste div";

  // Só pode adicionar um elemento que foi criado pelo DOM utilizando comando appendChild
  // boardTarefa.appendChild(div);

  // Aqui é utilizado um método que cria um elemtento HTML

  const tarefaJaDigitada = inputTarefa.value;
  let card = `<div class="col-md-4">
                  <div class="card-tarefa">
                    <div class="texto-tarefa">${tarefaJaDigitada}</div>
                    <div class="botao-tarefa">
                      <img
                        src="img/check.png"
                        width="32"
                        alt="Botão para finalizar tarefa"
                        title="Botão para finalizar tarefa"
                      />
                    </div>
                  </div>
                </div>
`;
  tarefaJaDigitada.input = null;
  boardTarefa.insertAdjacentHTML("beforeend", card);

  const btnFinalizar =
    boardTarefa.lastElementChild.lastElementChild.lastElementChild;

  btnFinalizar.addEventListener("click", () => {
    btnFinalizar.parentNode.parentNode.remove();
  });
});
