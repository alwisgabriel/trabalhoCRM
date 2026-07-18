

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Cliente cli = new Cliente();
        Scanner input = cli.input;
        Integer resposta;

        do {
            System.out.println("Escolha uma das opções");
            System.out.println("[1] Para cadastrar um cliente");
            System.out.println("[2] Para atualizar um cliente");
            System.out.println("[3] Para remover um cliente");
            System.out.println("[4] Para alterar o status do cliente");
            System.out.println("[5] Para consultar auditoria");
            System.out.println("[6] Para consultar cliente");
            System.out.println("[7] Para ver o relatorio");
            System.out.println("[99] Para sair do sistema");

            resposta = input.nextInt();

            switch (resposta) {
                case 1:
                    input.nextLine();
                    cli.cadastrar();
                    break;

                case 2:
                    cli.atualizarCliente();
                    break;

                case 3:
                    cli.deletarClientes();
                    break;

                case 4:
                    cli.alterarStatus();
                    break;

                case 5:
                    cli.consultarAuditoria();
                    break;

                case 6:
                    cli.consultaCliente();
                    break;

                case 7:
                    cli.relatorio();
                    break;

                case 99:
                    System.out.println("Saindo do sistema...");
                    break;

                default:
                    System.out.println("Opção inválida!");
                    break;
            }

        } while (resposta != 99);
    }
}