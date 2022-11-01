import React from "react";
import TuitItem from "./TuitItem.js";
import {useSelector} from "react-redux";
import "../home/index.css";

const PostList = () =>{
    const posts = useSelector(state => state.tuits)
    return(
        <div className={"wd-div-border"}>
            {
                posts.map(post =>
                <TuitItem key={post._id} post={post}/>)
            }
        </div>
    );
};
export default PostList;