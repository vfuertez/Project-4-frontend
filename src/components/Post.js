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
      <a className='post2_link' href={post.repo1} target="_blank" rel="noopener noreferrer"> {post.repo1}</a>
      <a className='post2_link' href={post.repo2} target="_blank" rel="noopener noreferrer"> {post.repo2}</a>
      <a className='post2_link' href={post.web} target="_blank" rel="noopener noreferrer"> {post.web}</a>
     
      </div>
      </div>
    </div>
  )
}

export default Post
