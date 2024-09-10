
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";


const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

   const handleSavePost = () => {
     if(title &&setContent ){
       dispatch(postAdded({id : 3 , title , content}))
     }
     setTitle("")
     setContent("")
   }


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
