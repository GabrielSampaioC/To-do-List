const botaoAdiciona = document.querySelector("#btn-adiciona-tarefa");
const input = document.querySelector("#input");
const corpoTabela = document.querySelector(".tabela-body");

botaoAdiciona.addEventListener("click", (e) => {
    e.preventDefault();
    MontaTarefa();
});

function MontaTarefa() {
    if(input.value == ""){
        input.value = "Digite um valor valido";
    }
    else{
        const lista = document.createElement("tr");

        const montaTarefa = document.createElement("td");
        const dataTarefa = document.createElement("td");
        const andamentoTarefa = document.createElement("td");
        const botoes = document.createElement("td");
    
        montaTarefa.innerHTML = `<td class="lista-table-resposta">${input.value}</td>`;
        montaTarefa.classList.add("lista-table-resposta");
    
        dataTarefa.innerHTML = `<td class="lista-table-data">hoje</td>`;
    
        andamentoTarefa.innerHTML = `<td class="lista-table-opcoes">
       <select class="lista-table-opcoes">
           <option>Concluida</option>
           <option>Em andamento</option>
           <option>Desisto</option>
       </select>
    </td>`;
    
        botoes.innerHTML = `<td class="lista-table-botoes">
        <div>
            <button class="btn-remove-tarefa"><img src="img/lixeira.svg" class="btn-remove-img" alt="lixeira"></button>
        </div>
    </td>`;
        corpoTabela.appendChild(lista);
        lista.appendChild(montaTarefa);
        lista.appendChild(dataTarefa);
        lista.appendChild(andamentoTarefa);
        lista.appendChild(botoes);
    
    }
    }

