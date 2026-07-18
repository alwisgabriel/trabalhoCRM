
import java.util.ArrayList;
import java.util.Scanner;

public class Cliente {

    ArrayList<String> nmCliente = new ArrayList<>();
    ArrayList<String> nuCpf = new ArrayList<>();
    ArrayList<Integer> nuIdade = new ArrayList<>();
    ArrayList<Double> vlSalario = new ArrayList<>();
    ArrayList<String> flStatus = new ArrayList<>();
    ArrayList<String> auditoria = new ArrayList<>();
    ArrayList<String> cidade = new ArrayList<>();

    Scanner input = new Scanner(System.in);
    Scanner entradaNumero = new Scanner(System.in);
    Scanner entradaTexto = new Scanner(System.in);

    Integer resposta;
    Integer id = 0;
    String consultaNm;
    String consultaCpf;
    String consultaCidade;

    void registrarAuditoria(String acao, int idCliente) {
        String registro = acao + " | ID: " + idCliente;
        auditoria.add(registro);
    }

    void cadastrar() {
        System.out.println("Iremos iniciar o cadastro...");

        System.out.println("Insira o nome do cliente:");
        nmCliente.add(entradaTexto.nextLine());

        System.out.println("Insira o cpf do cliente:");
        nuCpf.add(entradaTexto.nextLine());

        System.out.println("Insira a idade do cliente:");
        nuIdade.add(entradaNumero.nextInt());

        System.out.println("Insira o salário do cliente:");
        vlSalario.add(entradaNumero.nextDouble());

        System.out.println("Insira a cidade do cliente:");
        cidade.add(entradaTexto.nextLine());

        flStatus.add("ATIVO");

        registrarAuditoria("CADASTRO", id);

        id++;
    }

    void atualizarCliente() {
        System.out.println("Iremos iniciar a atualização do cadastro...");
        System.out.println("Insira o nome do cliente:");
        consultaNm = entradaTexto.nextLine();
        System.out.println("Insira o CPF do cliente:");
        consultaCpf = entradaTexto.nextLine();
        System.out.println("Insira a cidade do cliente:");
        consultaCidade = entradaTexto.nextLine();

        for (int l = 0; l < nmCliente.size(); l++) {

            if (nmCliente.get(l).equals(consultaNm) && nuCpf.get(l).equals(consultaCpf) && cidade.get(l).equals(consultaCidade)) {

            System.out.println("Insira o nome a ser atualizado:");
            nmCliente.set(l, entradaTexto )

            System.out.println("Insira o cpf a ser atualizado:");
            nuCpf.set(resposta, entradaTexto.nextLine());

            System.out.println("Insira a cidade a ser atualiada:");
            cidade.set(resposta, entradaTexto.nextLine());

            System.out.println("Insira a idade a ser atualizada:");
            nuIdade.set(resposta, entradaNumero.nextInt());

            System.out.println("Insira o salário a ser atualizado:");
            vlSalario.set(resposta, entradaNumero.nextDouble());


            registrarAuditoria("ALTERACAO", resposta);

        } else {
            System.out.println("Cliente não encontrado");
        }
    }

    void deletarClientes() {
        System.out.println("Qual cliente deseja excluir?");
        resposta = entradaNumero.nextInt();

        if (resposta >= 0 && resposta < nmCliente.size()) {
            nmCliente.remove(resposta);
            nuCpf.remove(resposta);
            nuIdade.remove(resposta);
            vlSalario.remove(resposta);
            flStatus.remove(resposta);
            cidade.remove(resposta);
            System.out.println("Clientes excluidos com sucesso!");
        } else {
            System.out.println("Cliente não encontrado");
        }
    }

    void alterarStatus() {
        System.out.println("Qual cliente deseja alterar o status?");
        resposta = entradaNumero.nextInt();

        if (resposta >= 0 && resposta < flStatus.size()) {
            System.out.println("Status atual: " + flStatus.get(resposta));
            System.out.println("Digite o novo status:");
            String statusAntigo = flStatus.get(resposta); // Para mostrar o antigo
            entradaTexto.nextLine();
            String statusNovo = entradaTexto.nextLine();
            flStatus.set(resposta, statusNovo);

            registrarAuditoria("ALTERACAO_STATUS", resposta);

            System.out.println("Status alterado com sucesso!");
        } else {
            System.out.println("Cliente não encontrado");
        }
    }

    void consultarAuditoria() {
        System.out.println("Registros de auditoria:");
        for (int i = 0; i < auditoria.size(); i++) {
            System.out.println(auditoria.get(i));
        }
    }

    void consultaCliente() {
        System.out.println("Insira o nome do cliente:");
        consultaNm = entradaTexto.nextLine();
        System.out.println("Insira o CPF do cliente:");
        consultaCpf = entradaTexto.nextLine();
        System.out.println("Insira a cidade do cliente:");
        consultaCidade = entradaTexto.nextLine();

        for (int i = 0; i < nmCliente.size(); i++) {

            if (nmCliente.get(i).equals(consultaNm) && nuCpf.get(i).equals(consultaCpf) && cidade.get(i).equals(consultaCidade)) {

                System.out.printf("O nome do cliente é:\n" + nmCliente.get(i));
                System.out.printf("O CPF do cliente é:\n" + nuCpf.get(i));
                System.out.printf("A cidade do cliente é:\n" + cidade.get(i));
                System.out.printf("A idade do cliente é:\n" + nuIdade.get(i));
                System.out.printf("O salario do cliente é:\n" + vlSalario.get(i));
                System.out.println("O status do cliente é:\n" + flStatus.get(i));

            } else {
                System.out.println("Cliente não encontrado!");
            }
        }
    }
    void relatorio() {
            System.out.printf("Quantidade de clientes é: " + nmCliente.size() +"\n");

            for (int j = 0; j < nmCliente.size(); j++){
                System.out.printf("O status do cliente " + nmCliente.get(j) + " é: " + flStatus.get(j) + "\n");

            }
        }
    }
