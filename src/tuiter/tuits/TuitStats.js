import React from "react";
import "../home/index.css";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";
const TuitStats = (
    {
        post
    }
    )=>{
    const dispatch = useDispatch();
    /*
    let color;
    let heart;
    if(post.liked === true){
        color = "wd-color-red";
        heart = "fa-heart";
    }else{
        color = "wd-color-gray";
        heart = "fa-heart-o";
    }

    const Liketuits = (post) => {
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes + 1,
            liked: true
        }))
    }
    const Unliketuits = (post) => {
        dispatch(updateTuitThunk({
            ...post,
            likes: post.likes - 1,
            liked: false
        }))
    }*/
    return(
        <div className="wd-icons wd-nav-tags">
            <ul className="list-inline row">
                <li className="col flex-row "><i
                    className="fa fa-comment-o wd-color-gray"></i><span
                    className={`wd-color-gray ms-1`}>{post.comment}</span></li>
                <li className="col flex-row ">
                    <div>
                        Likes: {post.likes}
                        <i onClick={() => dispatch(updateTuitThunk({
                           ...post,
                           likes: post.likes + 1
                       }))} className="bi bi-heart-fill me-2 text-danger ms-2"></i>
                        <i onClick={() => dispatch(updateTuitThunk({
                           ...post,
                           likes: post.likes - 1
                       }))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                    </div>


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