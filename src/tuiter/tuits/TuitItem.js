import React from "react";
import "../home/index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        post
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="container">
            <div className="row wd-div-border-bottom">
                <div className="mt-3 col-1 ms-3">
                    <img className="wd-a-img" src={`${post.avator}`} alt={"..."}/>
                </div>
                <div className="mt-3  ms-3 col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div id="name-title" className="mb-1">
                        <h1>{post.userName}<span><i
                            className="ms-1 fa fa-check-circle"></i></span><span
                            style={{color : 'rgb(110, 118, 125)'}}> - {post.time}</span></h1>

                    </div>
                    <div className="mb-3">
                        <div>
                            <p>{post.content}</p>
                        </div>
                    </div>

                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </div>
    );
};
export default TuitItem;