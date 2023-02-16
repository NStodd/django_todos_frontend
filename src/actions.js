// actions.js
// Contains the functions to be run when the user perfors an action on the site.

import { redirect } from "react-router-dom";
import url from "./url"

// Deployed api Url
//const URL = "https://django-todos-api.onrender.com"

// createAction, creates a new todo
export const createAction = async ({request}) => {
    // take the form data from request and turn it into a new todo
    const formData = await request.formData()

    //make the new todo
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details"),
    }

    // request to create a route in the backend
    await fetch(url, {
        method:"post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo)
    })
    //redirect
    return redirect("/")
}

// updateAction, updates an existing todo
export const updateAction = async ({request, params}) => {
    // take the form data from the request and plug it into the id given in params
    const formData = await request.formData()

    //construct a new todo
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details"),
    }

    // request to update the route on backend
    await fetch(url + params.id + "/", {
        method:"put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
    })

    // redirect to index
    return redirect("/")
}

// deleteAction, deletes an existing todo
export const deleteAction = async ({params}) => {
    // delete the todo based on the id in params
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method:"delete"
    })

    //redirect to index
    return redirect("/")
}

