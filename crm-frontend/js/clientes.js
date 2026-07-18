function registrarAuditoria(acao, cliente){
    let auditoria = pegarAuditoria();

    auditoria.push({
        data: dataAtual(),
        hora: horaAtual(),
        acao: acao,
        cliente: cliente
    });

    salvarAuditoria(auditoria);
}

function carregarClientes(){
    let clientes = pegarClientes();
    let tabela = document.getElementById("listaClientes");

    tabela.innerHTML = "";

    if(clientes.length == 0){
        tabela.innerHTML = `
        <tr>
            <td colspan="5">Nenhum cliente cadastrado</td>
        </tr>
        `;
        return;
    }

    for(let i = 0; i < clientes.length; i++){
        tabela.innerHTML += `
        <tr>
            <td>${clientes[i].nome}</td>
            <td>${clientes[i].cpf}</td>
            <td>${clientes[i].cidade}</td>
            <td class="${clientes[i].status == 'Ativo' ? 'ativo' : 'inativo'}">${clientes[i].status}</td>
            <td>
                <button type="button" onclick="editarCliente(${clientes[i].id})">Editar</button>
                <button type="button" onclick="alterarStatusCliente(${clientes[i].id})">Status</button>
                <button type="button" onclick="excluirCliente(${clientes[i].id})">Excluir</button>
            </td>
        </tr>
        `;
    }
}

function salvarAlteracoes(clientes){
    salvarClientes(clientes);
    carregarClientes();
}

function encontrarClientePorId(id){
    let clientes = pegarClientes();

    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].id == id){
            return { cliente: clientes[i], indice: i, clientes: clientes };
        }
    }

    return null;
}

function editarCliente(id){
    let resultado = encontrarClientePorId(id);

    if(resultado == null){
        alert("Cliente não encontrado!");
        return;
    }

    let cliente = resultado.cliente;

    let nome = prompt("Atualize o nome:", cliente.nome);
    if(nome == null) return;

    let cpf = prompt("Atualize o CPF:", cliente.cpf);
    if(cpf == null) return;

    let idade = prompt("Atualize a idade:", cliente.idade);
    if(idade == null) return;

    let cidade = prompt("Atualize a cidade:", cliente.cidade);
    if(cidade == null) return;

    cliente.nome = nome.trim();
    cliente.cpf = cpf.trim();
    cliente.idade = idade.trim();
    cliente.cidade = cidade.trim();

    salvarAlteracoes(resultado.clientes);
    registrarAuditoria("Alteração", cliente.nome);
    alert("Cliente atualizado com sucesso!");
}

function excluirCliente(id){
    let resultado = encontrarClientePorId(id);

    if(resultado == null){
        alert("Cliente não encontrado!");
        return;
    }

    if(confirm("Tem certeza que deseja excluir este cliente?" ) == false){
        return;
    }

    let nomeCliente = resultado.cliente.nome;
    resultado.clientes.splice(resultado.indice, 1);
    salvarAlteracoes(resultado.clientes);
    registrarAuditoria("Exclusão", nomeCliente);
    alert("Cliente excluído com sucesso!");
}

function alterarStatusCliente(id){
    let resultado = encontrarClientePorId(id);

    if(resultado == null){
        alert("Cliente não encontrado!");
        return;
    }

    let cliente = resultado.cliente;
    cliente.status = cliente.status == "Ativo" ? "Inativo" : "Ativo";

    salvarAlteracoes(resultado.clientes);
    registrarAuditoria("Alteração de status", cliente.nome);
    alert("Status alterado com sucesso!");
}

carregarClientes();
