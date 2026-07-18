function pegarClientes(){
    let clientes = localStorage.getItem("clientes");

    if(clientes == null){
        return [];
    }

    return JSON.parse(clientes);
}

function salvarClientes(clientes){
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function pegarAuditoria(){
    let auditoria = localStorage.getItem("auditoria");

    if(auditoria == null){
        return [];
    }

    return JSON.parse(auditoria);
}

function salvarAuditoria(auditoria){
    localStorage.setItem("auditoria", JSON.stringify(auditoria));
}

function gerarId(){
    let clientes = pegarClientes();

    if(clientes.length == 0){
        return 1;
    }

    return clientes[clientes.length - 1].id + 1;
}

function dataAtual(){
    return new Date().toLocaleDateString();
}

function horaAtual(){
    return new Date().toLocaleTimeString();
}
