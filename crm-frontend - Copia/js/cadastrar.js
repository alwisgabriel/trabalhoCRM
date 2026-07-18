// cadastrar.js


function cadastrarCliente(){


    let clientes = pegarClientes();


    let nome = document.getElementById("nome").value.trim();

    let cpf = document.getElementById("cpf").value.trim();

    let idade = document.getElementById("idade").value.trim();

    let cidade = document.getElementById("cidade").value.trim();



    // validação dos campos

    if(nome == "" || cpf == "" || idade == "" || cidade == ""){


        alert("Preencha todos os campos!");

        return;

    }




    // verifica CPF duplicado

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






    // criando cliente

    let cliente = {


        id: clientes.length + 1,

        nome:nome,

        cpf:cpf,

        idade:idade,

        cidade:cidade,

        status:"Ativo",

        dataCadastro:new Date().toLocaleDateString()


    };







    // adiciona cliente no array

    clientes.push(cliente);




    // salva clientes

    salvarClientes(clientes);







    // registra auditoria

    let auditoria = pegarAuditoria();




    let registro = {


        data:new Date().toLocaleDateString(),

        hora:new Date().toLocaleTimeString(),

        acao:"Cadastro",

        cliente:nome


    };




    auditoria.push(registro);



    salvarAuditoria(auditoria);







    alert("Cliente cadastrado com sucesso!");



    document.getElementById("formCadastro").reset();



}