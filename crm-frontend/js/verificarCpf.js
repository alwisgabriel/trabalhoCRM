function verificarCpf(cpf) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].cpf == cpf) {
            alert("CPF já cadastrado!");
            return false;
        }
    }

    return true;
}
