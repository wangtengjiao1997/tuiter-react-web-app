import React from "react";
import "../home/index.css";
const PostItem = (
    {
    post
    }
) => {
    return(
        <div className="container">
            <div className="row mb-3 wd-div-border-bottom">
                <div className=" col-1 ms-3">
                    <img className="wd-a-img" src={`${post.avator}`} alt={"..."}/>
                </div>
                <div className="ms-3 col-10">
                    <div id="name-title" className="mb-3">
                        <h1>{post.userName}<span><i
                            className="text-white ms-1 fa fa-check-circle"></i></span><span
                            style={{color : 'rgb(110, 118, 125)'}}> - {post.time}</span></h1>
                        <h1>{post.title}</h1>
                    </div>

                    <div className="mb-3 card wd-div-border">
                        <div>
                            <img src={`${post.image}`}
                                 className="card-img-top" style={{height: '264px'}} alt="..."/>
                                <div className="card-text border-2 m-2">
                                    <h1>{post.content1}</h1>
                                    <h1 style={{color : 'rgb(110, 118, 125)'}}>{post.content2}</h1>
                                </div>
                        </div>
                    </div>

                    <div className="wd-icons wd-nav-tags">
                        <ul className="list-inline">
                            <li className="col flex-row "><a href="/tuiter/home"
                                                             className="text-decoration-none "><i
                                className="fa fa-comment-o wd-color-gray"></i><span
                                className="wd-color-gray ms-1">{post.comment}</span></a></li>
                            <li className="col flex-row "><a href="/tuiter/home"
                                                             className="text-decoration-none "><i
                                className="fa fa-heart-o wd-color-gray"></i><span
                                className="wd-color-gray ms-1">{post.like}</span></a></li>
                            <li className="col flex-row "><a href="/tuiter/home"
                                                             className="text-decoration-none "><i
                                className="fa fa-exchange wd-color-gray"></i><span
                                className="wd-color-gray ms-1">{post.transfer}</span></a></li>
                            <li className="col flex-row "><a href="/tuiter/home"
                                                             className="text-decoration-none "><i
                                className="fa fa-download wd-color-gray"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostItem;