import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";
const PostList = () =>{
    return(
        <div>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>

    );
    };
export default PostList;