export function parseRoutePath(path) {
    const routeParamtersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParamtersRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`)
    
    return pathRegex
}