
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUser } from "../users/usersSlice";


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId , setUserId] = useState("")


    const users = useSelector(selectAllUser)


   const handleSavePost = () => {
     if(title && content ){
       dispatch(postAdded(title , content , userId))
     }
     setTitle("")
     setContent("")
   }


   const userOptions = users.map(user => {
    <option key = {user.id} value = {user.id}>
         {user.name}
    </option>
   })

   

    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                  <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type = "submit" onClick={handleSavePost}>Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm
