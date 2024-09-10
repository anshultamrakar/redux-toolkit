import React from 'react'
import { useSelector } from 'react-redux'
import { selectAll } from './postsSlice'

const PostList = () => {
 const posts = useSelector(selectAll)

 const renderPost = posts.map(post => (
    <section>
        <p>{post.name}</p>
        <p>{post.author}</p>
    </section>
 ))

  return (
    <div>
      <h2>PostsList</h2>
       {renderPost}
    </div>
  )
}

export default PostList