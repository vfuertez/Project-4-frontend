import url from "./url";
import { redirect } from "react-router-dom";

export async function CreateAction({ request }) {
    // get the form data
    const formData = await request.formData()

    const newProject = {
        name: formData.get('name'),
        repo1: formData.get('repo1'),
        repo2: formData.get('repo2'),
        web: formData.get('web')

    }

    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
    })

    return redirect ('/')
}

export async function UpdateAction({ request, params }) {
    // get the form data
    const formData = await request.formData()

    const updateProject = {
        name: formData.get('name'),
        repo1: formData.get('repo1'),
        repo2: formData.get('repo2'),
        web: formData.get('web')

    }

    await fetch(url + params.id + '/', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateProject)
    })

    return redirect ('/')
}

export async function DeleteAction({params}){
    //get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}