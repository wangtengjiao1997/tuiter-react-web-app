import postSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const postSummaryList = () =>{
    return(`${
        posts.map(x=>{
            return postSummaryItem(x);
        }).join('')
    }
    `);}
export default postSummaryList;