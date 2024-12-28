import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
    {
        method: "GET",
        path: "/products",
        controller: ({request, response, database}) => {
            //console.log(JSON.stringify(request.body))
            //console.log(request.body.id.toString())
            //console.log(request.body.name)
            //console.log(request.body.price.toString())
            //console.log(request.body.estoque.toString())
            const products = database.select("products")
            database.select("products")
            return response.end(`Lista de produtos ${JSON.stringify(products)}\nInformações do produto informado: ${JSON.stringify(request.query)}`)
        },
    },
    {
        method: "POST",
        path: "/products",
        controller: ({request, response, database}) => {
            const { id, name, price, estoque } = request.body
            database.insert("products", { id, name, price, estoque })
            console.log(JSON.stringify(request.body))
            return response.writeHead(201).end(`Produto cadastrado no banco de dados!`)
        },
    },
    {
        method: "DELETE",
        path: "/products/:id",
        controller: ({request, response}) => {
            return response.end(`Produto com id ${request.params.id} removido!\nUtilizando o método: ${request.method}`)
        },
    },
].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}))