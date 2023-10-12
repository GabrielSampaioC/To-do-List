const botaoAdiciona = document.querySelector("#btn-adiciona-tarefa");
const input = document.querySelector("#input");
const corpoTabela = document.querySelector(".tabela-body");

botaoAdiciona.addEventListener("click", () => {
    MontaTarefa();
});

function MontaTarefa() {
    
    const lista = document.createElement("tr");

    const MontaTarefa = document.createElement("td");
    const DataTarefa = document.createElement("td");
    const andamentoTarefa = document.createElement("td");
    const botoes = document.createElement("td");

    MontaTarefa.innerHTML = `<td class="lista-table-resposta">${input.value}</td>`;

    DataTarefa.innerHTML = `<td class="lista-table-data">hoje</td>`;

    andamentoTarefa.innerHTML = `<td class="lista-table-opcoes">
   <select class="lista-table-opcoes">
       <option>Concluida</option>
       <option>Em andamento</option>
       <option>Desisto</option>
   </select>
</td>`;

    botoes.innerHTML = `<td class="lista-table-botoes">
    <div>
        <button class="btn-editar-tarefa">Edita</button>
        <button class="btn-remove-tarefa">Remove</button>
    </div>
</td>`;
    corpoTabela.appendChild(lista);
    lista.appendChild(MontaTarefa);
    lista.appendChild(DataTarefa);
    lista.appendChild(andamentoTarefa);
    lista.appendChild(botoes);

}
