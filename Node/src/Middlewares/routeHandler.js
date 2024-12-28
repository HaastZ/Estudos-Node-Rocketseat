import { routes } from "../routes.js"
import { ExtractQueryParams } from "../utils/extract-query-params.js"
import { Database } from "../database.js"

const database = new Database()

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    if(route) {
        const routeParams = request.url.match(route.path)
        
        const {query, ...params } = routeParams.groups

        
        request.params = params
        request.query = query ? ExtractQueryParams(query) : {}

        return route.controller({request, response, database})
    }
    else{
        return response.writeHead(404).end("Rota não encontrada")
    }
} 