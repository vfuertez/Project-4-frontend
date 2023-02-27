import { Link } from 'react-router-dom'

const Post = (props) => {
  const post = props.post

  return (
    <div className="post">
      <div className='post-child'>
        <div className='post1'>
      <Link to={`/project/${post.id}`}>
        <h1>{post.name}</h1>
      </Link></div>
      <div className='post2'>
      <p>{post.repo1}</p>
      <p>{post.repo2}</p>
      <p>{post.web}</p>
      </div>
      </div>
    </div>
  )
}

export default Post
