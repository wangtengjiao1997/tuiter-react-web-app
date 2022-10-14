import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () =>{
    return(`${
        posts.map(x=>{
            return PostItem(x);
        }).join('')
    }
    `);}
export default PostList;