// banco.js
// Banco de dados simples usando LocalStorage



// ===============================
// CLIENTES
// ===============================


// Buscar clientes salvos

function pegarClientes(){


    let clientes = localStorage.getItem("clientes");



    if(clientes == null){


        return [];


    }else{


        return JSON.parse(clientes);


    }


}




// Salvar clientes

function salvarClientes(clientes){


    localStorage.setItem(

        "clientes",

        JSON.stringify(clientes)

    );


}






// ===============================
// AUDITORIA
// ===============================


// Buscar registros de auditoria

function pegarAuditoria(){


    let auditoria = localStorage.getItem("auditoria");



    if(auditoria == null){


        return [];


    }else{


        return JSON.parse(auditoria);


    }


}







// Salvar auditoria

function salvarAuditoria(auditoria){


    localStorage.setItem(

        "auditoria",

        JSON.stringify(auditoria)

    );


}







// ===============================
// GERAR ID
// ===============================


function gerarId(){


    let clientes = pegarClientes();



    if(clientes.length == 0){


        return 1;


    }



    return clientes[clientes.length - 1].id + 1;



}







// ===============================
// DATA ATUAL
// ===============================


function dataAtual(){


    return new Date().toLocaleDateString();


}







// ===============================
// HORA ATUAL
// ===============================


function horaAtual(){


    return new Date().toLocaleTimeString();


}