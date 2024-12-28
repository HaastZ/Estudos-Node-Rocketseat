const API_PATH = "http://localhost:3333";

async function fetchProducts() {
    try {
        // Faz a requisição para a API
        const response = await fetch(`${API_PATH}/products`);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Mostra os dados no console
        console.log("Produtos recebidos da API:", data);
    } catch (error) {
        // Mostra erros no console
        console.error("Erro ao acessar a API:", error);
    }
}

// Chama a função para buscar os produtos
fetchProducts();