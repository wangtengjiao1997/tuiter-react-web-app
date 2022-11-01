import React from "react";
import "../home/index.css";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer";

const TuitStats = (
    {
        post
    }
    )=>{
    let color;
    let heart;
    const dispatch = useDispatch();
    if(post.liked === true){
        color = "wd-color-red";
        heart = "fa-heart";
    }else{
        color = "wd-color-gray";
        heart = "fa-heart-o";
    }

    const Liketuits = (id) => {
        dispatch(likeTuit(id));
    }
    const Unliketuits = (id) => {
        dispatch(unlikeTuit(id));
    }
    return(
        <div className="wd-icons wd-nav-tags">
            <ul className="list-inline row">
                <li className="col flex-row "><i
                    className="fa fa-comment-o wd-color-gray"></i><span
                    className={`wd-color-gray ms-1`}>{post.comment}</span></li>
                <li className="col flex-row ">
                    {
                        post.liked &&
                        <i id={"like-icon"} className={`fa ${heart} ${color}`} onClick={() => Unliketuits(post._id)}>
                            <label htmlFor={"like-icon"} className={`${color} ms-1`}style={{outline: "none"}}>{post.like}</label>
                        </i>
                    }
                    {
                        !post.liked &&
                         <i id={"like-icon"} className={`fa ${heart} ${color}`} onClick={() => Liketuits(post._id)}>
                             <label htmlFor={"like-icon"} className={`${color} ms-1`}style={{outline: "none"}}>{post.like}</label>
                         </i>
                    }

                </li>
                <li className="col flex-row "><i
                    className="fa fa-exchange wd-color-gray"></i><span
                    className={`wd-color-gray ms-1`}>{post.transfer}</span></li>
                <li className="col flex-row "><i
                    className="fa fa-download wd-color-gray"></i></li>
            </ul>
        </div>
    )
    };
export default TuitStats;