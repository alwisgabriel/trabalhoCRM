function cadastrarCliente(){
    let clientes = pegarClientes();

    let nome = document.getElementById("nome").value.trim();
    let cpf = document.getElementById("cpf").value.trim();
    let idade = document.getElementById("idade").value.trim();
    let salario = document.getElementById("salario").value.trim();
    let cidade = document.getElementById("cidade").value.trim();

    if(nome == "" || cpf == "" || idade == "" || salario == "" || cidade == ""){
        alert("Preencha todos os campos!");
        return;
    }

    let cpfExiste = false;

    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].cpf == cpf){
            cpfExiste = true;
        }
    }

    if(cpfExiste){
        alert("CPF já cadastrado!");
        return;
    }

    let cliente = {
        id: gerarId(),
        nome: nome,
        cpf: cpf,
        idade: idade,
        salario: salario,
        cidade: cidade,
        status: "Ativo",
        dataCadastro: dataAtual()
    };

    clientes.push(cliente);
    salvarClientes(clientes);

    let auditoria = pegarAuditoria();

    auditoria.push({
        data: dataAtual(),
        hora: horaAtual(),
        acao: "Cadastro",
        cliente: nome
    });

    salvarAuditoria(auditoria);

    alert("Cliente cadastrado com sucesso!");
    document.getElementById("formCadastro").reset();
}
