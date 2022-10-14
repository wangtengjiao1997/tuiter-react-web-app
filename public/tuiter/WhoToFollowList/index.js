import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
       <!-- continue here -->
       ${
            who.map(x => {
                return(WhoToFollowListItem(x));
            }).join('')
        }
       </ul>
`); }
export default WhoToFollowList;