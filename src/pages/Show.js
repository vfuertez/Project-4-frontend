import { useLoaderData, Form } from 'react-router-dom'


const Show = (props) => {
  const post = useLoaderData()

  return (
    <>
      <div className="show">
        
        <div className="show_name">
          <h2>{post.name}</h2>
        </div>
        <a
          className="show_a"
          href={post.repo1}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post.repo1}
        </a>
        <a
          className="show_a"
          href={post.repo2}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          {post.repo2}
        </a>
        <a
          className="show_a"
          href={post.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          {post.web}
        </a>
      </div>

      <div className='show_input_container'>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="repo1"
            placeholder="Repo1"
            defaultValue={post.repo1}
          />
          <input
            type="text"
            name="repo2"
            placeholder="Repo2"
            defaultValue={post.repo2}
          />
          <input
            type="text"
            name="web"
            placeholder="website"
            defaultValue={post.web}
          />
          <div className="update_container">
            <button className="update_btn">Update</button>
          </div>
        </Form>
        <div className="delete_container">
          <Form action={`/delete/${post.id}`} method="post">
            <button >Delete</button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Show
