// relatorio.js


let clientes = pegarClientes();



// ======================
// CARDS
// ======================


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



document.getElementById("totalClientes").innerHTML = total;


document.getElementById("clientesAtivos").innerHTML = ativos;


document.getElementById("clientesInativos").innerHTML = inativos;





// ======================
// RELATÓRIO GERAL
// ======================


let tabela = document.getElementById("relatorioGeral");


tabela.innerHTML = "";



for(let i = 0; i < clientes.length; i++){


let cliente = clientes[i];



tabela.innerHTML += `

<tr>

<td>${cliente.id}</td>

<td>${cliente.nome}</td>

<td>${cliente.email || "Não informado"}</td>

<td>${cliente.telefone || "Não informado"}</td>


<td class="${cliente.status == "Ativo" ? "ativo" : "inativo"}">

${cliente.status}

</td>


<td>${cliente.dataCadastro}</td>


</tr>


`;


}







// ======================
// CLIENTES ATIVOS
// ======================


let listaAtivos = document.getElementById("listaAtivos");


listaAtivos.innerHTML = "";



for(let i = 0; i < clientes.length; i++){


if(clientes[i].status == "Ativo"){


listaAtivos.innerHTML += `

<li>

${clientes[i].nome}

</li>

`;


}


}








// ======================
// CLIENTES INATIVOS
// ======================



let listaInativos = document.getElementById("listaInativos");


listaInativos.innerHTML = "";



for(let i = 0; i < clientes.length; i++){


if(clientes[i].status == "Inativo"){


listaInativos.innerHTML += `

<li>

${clientes[i].nome}

</li>

`;


}


}











let tabelaData = document.getElementById("clientesData");


tabelaData.innerHTML = "";



let datas = [];



// pega todas as datas sem repetir

for(let i = 0; i < clientes.length; i++){


let data = clientes[i].dataCadastro;


let existe = false;



for(let j = 0; j < datas.length; j++){


if(datas[j] == data){

existe = true;

}


}



if(existe == false){

datas.push(data);

}


}






// conta clientes por data


for(let i = 0; i < datas.length; i++){


let quantidade = 0;



for(let j = 0; j < clientes.length; j++){


if(clientes[j].dataCadastro == datas[i]){


quantidade++;


}


}




tabelaData.innerHTML += `


<tr>


<td>

${datas[i]}

</td>



<td>

${quantidade} clientes

</td>


</tr>


`;



}