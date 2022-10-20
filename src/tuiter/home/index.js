import React from "react";
import PostItem from "./PostItem.js";
import posts from './posts.json';

const PostList = () =>{
    return(
        <div>
        {
            posts.map(post =>
          <PostItem
              key={post._id} post={post}/>)
        }
        </div>
        );
    };
export default PostList;