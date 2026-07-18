// home.js


function carregarHome(){



    let clientes = pegarClientes();



    let total = clientes.length;


    let ativos = 0;


    let inativos = 0;




    for(let i = 0; i < clientes.length; i++){



        if(clientes[i].status == "Ativo"){


            ativos++;


        }else{


            inativos++;


        }


    }







    // Cards


    document.getElementById("totalClientes").innerHTML = total;


    document.getElementById("clientesAtivos").innerHTML = ativos;


    document.getElementById("clientesInativos").innerHTML = inativos;







    // Cadastros do dia


    let hoje = new Date().toLocaleDateString();


    let hojeTotal = 0;



    for(let i = 0; i < clientes.length; i++){


        if(clientes[i].dataCadastro == hoje){


            hojeTotal++;


        }


    }




    document.getElementById("cadastrosHoje").innerHTML = hojeTotal;







    // Resumo


    document.getElementById("resumoTotal").innerHTML = total;


    document.getElementById("resumoAtivos").innerHTML = ativos;


    document.getElementById("resumoInativos").innerHTML = inativos;








    // Últimos clientes cadastrados


    let tabela = document.getElementById("ultimosClientes");


    tabela.innerHTML = "";





    let quantidade = 4;


    let inicio = clientes.length - quantidade;



    if(inicio < 0){


        inicio = 0;


    }







    for(let i = clientes.length - 1; i >= inicio; i--){



        let cliente = clientes[i];



        tabela.innerHTML += `

        <tr>


            <td>
                ${cliente.nome}
            </td>



            <td>
                ${cliente.cpf}
            </td>



            <td class="${cliente.status == 'Ativo' ? 'ativo':'inativo'}">

                ${cliente.status}

            </td>



            <td>
                ${cliente.dataCadastro}
            </td>


        </tr>


        `;


    }






    if(clientes.length == 0){


        tabela.innerHTML = `

        <tr>

            <td colspan="4">

                Nenhum cliente cadastrado

            </td>

        </tr>

        `;


    }





}




carregarHome();