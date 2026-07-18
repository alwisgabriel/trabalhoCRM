// auditoria.js


function mostrarAuditoria(){


    let auditoria = pegarAuditoria();



    let tabela = document.getElementById("listaAuditoria");



    tabela.innerHTML = "";




    if(auditoria.length == 0){


        tabela.innerHTML = `

        <tr>

            <td colspan="4">
                Nenhum registro encontrado
            </td>

        </tr>

        `;


        return;


    }






    for(let i = 0; i < auditoria.length; i++){



        tabela.innerHTML += `


        <tr>


            <td>
                ${auditoria[i].data}
            </td>


            <td>
                ${auditoria[i].hora}
            </td>


            <td>
                ${auditoria[i].acao}
            </td>


            <td>
                ${auditoria[i].cliente}
            </td>


        </tr>


        `;


    }



}