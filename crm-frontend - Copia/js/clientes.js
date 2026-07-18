// clientes.js


function carregarClientes(){


    let clientes = pegarClientes();


    let tabela = document.getElementById("listaClientes");


    tabela.innerHTML = "";



    if(clientes.length == 0){


        tabela.innerHTML = `

        <tr>

            <td colspan="3">
                Nenhum cliente cadastrado
            </td>

        </tr>

        `;


        return;

    }




    for(let i = 0; i < clientes.length; i++){


        tabela.innerHTML += `

        <tr>

            <td>
                ${clientes[i].nome}
            </td>


            <td>
                ${clientes[i].cpf}
            </td>


            <td>
                ${clientes[i].cidade}
            </td>


        </tr>

        `;


    }



}





carregarClientes();