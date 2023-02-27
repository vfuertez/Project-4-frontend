import { useLoaderData, Form } from 'react-router-dom'
import Post from '../components/Post'

const Index = (props) => {
  const project = useLoaderData()

  return (
    <>
      <div className="index-input">
        <Form action="/create" method="post">
          <div >
            
            <input type="text" name="name" placeholder="Name" required /> 
            <input type="text" name="repo1" placeholder="Front-End" /> 
            <input type="text" name="repo2" placeholder="Back-End" />
            <input type="text" name="web" placeholder="Website" /><br></br>
            <button>Add Project</button>
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
