export async function jsonMiddleware(request, response) {
// Adicionar cada chunk em um array
const body = [];

// Coleta os chunks de dados da requisição
for await (const chunk of request) {
    body.push(chunk);
}
try {
  // Concatena os chunks e converte para string, em seguida, converte a string para JSON
    request.body = JSON.parse(Buffer.concat(body).toString());
}
catch(error){
    request.body = null
}

response.setHeader("Content-Type", "application/json")
} 