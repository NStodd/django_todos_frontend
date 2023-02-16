import url from "./url"

// indexLoader, getting todos for the index route
export const indexLoader = async () => {
    const response = await fetch(url)
    const todos = await response.json()
    console.log("Index Loader:", todos)
    return todos
}

// showLoader, getting a specific todo for the show route
export const showLoader = async ({params}) => {
    const response = await fetch(url + params.id + "/")
    const todo = await response.json()
    console.log("Show Loader:", todo)
    return todo
}

