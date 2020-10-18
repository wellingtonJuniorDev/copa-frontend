export class HttpStatus {
    static AcessoNegado = "Acesso negado, para acessar é necessário autenticação.";
    static SemPrivilegios = "Esta conta não tem privilégios para acessar este recurso.";
    static DadosInvalidos = "Dados enviados são inválidos";
    static Indisponivel = "Serviço indisponível, tente novamente em breve.";
    static TempoExcedido = "O tempo limite para estabelecer a conexão foi atingido.";
    static NaoEncontrado = "Recurso não encontrado.";
    static FormatoInvalido = "Requisição rejeitada por formato inválido.";
    static ErroInterno = "Erro interno no servidor da aplicação.";
    static Inesperado = "Houve um erro inesperado. Tente novamente";
}