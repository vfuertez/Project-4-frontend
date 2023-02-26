import { useLoaderData, Form } from "react-router-dom"
import Post from "../components/Post"

const Index = (props) => {

    const project = useLoaderData()


  return <>

<div>
    <h2> Add Project</h2>
    <Form action='/create' method='post'>
        <input type='text' name="name" placeholder='name' />
        <input type='text' name="repo1" placeholder='Repo1' />
        <input type='text' name="repo2" placeholder='Repo2' />
        <input type='text' name="web" placeholder='website' />
        <button>Add</button>
    </Form>
    
  </div>

  {project.map((post) => <Post key={post.id} post={post} />)}

  
  </>
}

export default Index
