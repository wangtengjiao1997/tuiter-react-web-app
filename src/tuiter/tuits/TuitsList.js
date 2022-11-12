import React, {useEffect} from "react";
import TuitItem from "./TuitItem.js";
import {useDispatch, useSelector} from "react-redux";
import "../home/index.css";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const PostList = () =>{
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <div className={"wd-div-border"}>

            {
                loading &&
                <div className="list-group-item">
                    Loading...
                </div>
            }
            {
                tuits.map(post =>
                <TuitItem key={post._id} post={post}/>)
            }


        </div>
    );
};
export default PostList;