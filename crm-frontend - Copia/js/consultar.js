// consulta.js


function consultarCliente(){


    let clientes = pegarClientes();



    let nomePesquisa = document.getElementById("nome").value.toLowerCase();

    let idadePesquisa = document.getElementById("idade").value;

    let cidadePesquisa = document.getElementById("cidade").value.toLowerCase();

    let cpfPesquisa = document.getElementById("cpf").value;



    let tabela = document.getElementById("listaClientes");


    tabela.innerHTML = "";



    let encontrou = false;



    // cria o cabeçalho uma vez

    tabela.innerHTML = `

    <tr>

        <th>Nome</th>
        <th>CPF</th>
        <th>Idade</th>
        <th>Cidade</th>
        <th>Status</th>
        <th>Cadastro</th>

    </tr>

    `;




    for(let i = 0; i < clientes.length; i++){



        let cliente = clientes[i];



        let nome = cliente.nome.toLowerCase();

        let cidade = cliente.cidade.toLowerCase();



        if(

            nome.includes(nomePesquisa)

            &&

            cidade.includes(cidadePesquisa)

            &&

            cliente.cpf.includes(cpfPesquisa)

            &&

            (idadePesquisa == "" || cliente.idade == idadePesquisa)

        ){



            encontrou = true;



            tabela.innerHTML += `

            <tr>


                <td>
                    ${cliente.nome}
                </td>


                <td>
                    ${cliente.cpf}
                </td>


                <td>
                    ${cliente.idade}
                </td>


                <td>
                    ${cliente.cidade}
                </td>


                <td class="${cliente.status == 'Ativo' ? 'ativo' : 'inativo'}">

                    ${cliente.status}

                </td>


                <td>
                    ${cliente.dataCadastro}
                </td>


            </tr>


            `;



        }



    }




    if(encontrou == false){


        tabela.innerHTML = `

        <tr>

            <td colspan="6">

                Nenhum cliente encontrado

            </td>

        </tr>

        `;


    }



}