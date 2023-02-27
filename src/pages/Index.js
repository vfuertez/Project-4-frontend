import { useLoaderData, Form } from 'react-router-dom'
import Post from '../components/Post'

const Index = (props) => {
  const project = useLoaderData()

  return (
    <>
      <div className="index-input">
        <h3> Add Project</h3>
        <Form action="/create" method="post">
          <div >
            <input type="text" name="name" placeholder="name" required /> 
            <input type="text" name="repo1" placeholder="Repo1" /> 
            <input type="text" name="repo2" placeholder="Repo2" />
            <input type="text" name="web" placeholder="website" />
            <button>Add</button>
          </div>
        </Form>
      </div>

      {project.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export default Index
