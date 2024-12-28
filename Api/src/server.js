import http from "node:http"
import { jsonMiddleware } from "./Middlewares/JSONBodyHandler.js"
import { routeHandler } from "./Middlewares/routeHandler.js"

const port = 3333

const server = http.createServer(async (request, response) => {
    await jsonMiddleware(request, response)
    routeHandler(request, response)
})

server.listen(port, () => {
    console.log(`Servidor rodando no endereço localhost:${port}`);
})