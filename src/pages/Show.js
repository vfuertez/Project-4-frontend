import { Link, useLoaderData, Form } from 'react-router-dom'

const Show = (props) => {
  const post = useLoaderData()

  return (
    <>
      <div>
        <h2>{post.name}</h2>
       <a href={post.repo1} target='_blank' rel="noopener noreferrer"> {post.repo1} </a>  
        <h3>{post.repo2}</h3>
        <h3>{post.web}</h3>

        <Link to="/">
          <button> Main Page</button>
        </Link>
      </div>

      <div>
        <Form action={`/update/${post.id}`} method="post">
          <input type="text" name="name" placeholder="name" defaultValue={post.name} />
          <input type="text" name="repo1" placeholder="Repo1" defaultValue={post.repo1} />
          <input type="text" name="repo2" placeholder="Repo2" defaultValue={post.repo2} />
          <input type="text" name="web" placeholder="website" defaultValue={post.web} />
          <button>Update</button>
        </Form>
      </div>
    </>
  )
}

export default Show
