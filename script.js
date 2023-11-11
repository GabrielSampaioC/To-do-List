const botaoAdiciona = document.querySelector("#btn-adiciona-tarefa");
const input = document.querySelector("#input");
const corpoTabela = document.querySelector(".tabela-body");


now = new Date;
let tarefas = [];

if (localStorage.getItem('tarefas')) {
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
    renderizaTarefas();
}

function validaTarefa() {
    if (input.value.trim().length > 0) {
        console.log("Tarefa Adicionada");
        input.classList.remove("error");
    } else {
        input.classList.add("error");
        console.log("Tarefa Vazia");
    }
}

botaoAdiciona.addEventListener("click", () => {
    MontaTarefa();
    validaTarefa();
    input.value = "";

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
});

function MontaTarefa() {
    if (input.value == "") {

    } else {
        tarefas.push({
            nome: input.value,
            data: now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear(),
            andamento: "Executando"
        });

        localStorage.setItem('tarefas', JSON.stringify(tarefas));

        renderizaTarefas();
    }
}

function RemoveTarefa(linha) {
    const index = Array.from(corpoTabela.children).indexOf(linha);
    tarefas.splice(index, 1);

    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    corpoTabela.removeChild(linha);
}

function renderizaTarefas() {
    corpoTabela.innerHTML = "";

    tarefas.forEach((tarefa, index) => {
        const lista = document.createElement("div");
        const montaTarefa = document.createElement("td");
        const dataTarefa = document.createElement("td");
        const andamentoTarefa = document.createElement("td");
        const botoes = document.createElement("td");

        montaTarefa.innerHTML = `<div class="lista-table-resposta">${tarefa.nome}</div>`;
        dataTarefa.innerHTML = `<td class="lista-table-data">${tarefa.data}</td>`;

        andamentoTarefa.innerHTML = `<td class="lista-table-seletores">
            <select class="lista-table-opcoes">
                <option ${tarefa.andamento === "Concluida" ? "selected" : ""}>Concluida</option>
                <option ${tarefa.andamento === "Executando" ? "selected" : ""}>Executando</option>
            </select>
        </td>`;
        const select = andamentoTarefa.querySelector("select");

        
        if (tarefa.andamento === "Concluida") {
            montaTarefa.classList.add("conclui");
            lista.classList.add("bg");
            select.classList.remove("lista-table-opcoes");
            select.classList.add("lista-table-opcoes-concluidas");
        }

        select.addEventListener("change", () => {
            tarefa.andamento = select.value;

            
            if (tarefa.andamento === "Concluida") {
                montaTarefa.classList.add("conclui");
                lista.classList.add("bg");
                select.classList.remove("lista-table-opcoes");
                select.classList.add("lista-table-opcoes-concluidas");
            } else {
                montaTarefa.classList.remove("conclui");
                lista.classList.remove("bg");
                select.classList.remove("lista-table-opcoes-concluidas");
                select.classList.add("lista-table-opcoes");
            }

            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        });

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
        lista.classList.add("flex");

        const botaoRemove = lista.querySelector(".btn-remove-tarefa");
        botaoRemove.addEventListener("click", () => {
            RemoveTarefa(lista);
        });
    });
}
