export function getApiError(error) {
    // Se o erro vier do Axios e tiver uma resposta da API

    if (error.response && error.response.data) {
        const data = error.response.data;

        // Caso a API envie { erro: "mensagem" }
        if (data.erro) return data.erro;

        // Caso envie { mensagem: "mensagem" }
        if (data.mensagem) return data.mensagem;
        // Caso envie { mensagem: "mensagem" }

        if (data.detalhes) return data.detalhes;
        // Caso envie { detalhes: "mensagem" }

        // Caso envie apenas uma string
        if (typeof data === 'string') return data;

        return 'Erro inesperado na resposta da API.';
    }

    // Se for um erro genérico
    if (error.message) return error.message;

    return 'Erro desconhecido.';
}

