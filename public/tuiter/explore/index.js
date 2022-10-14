import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowListItem from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
        ${NavigationSidebar("explore")}
       </div>
       <div class="col-10 col-lg-7 col-xl-6 ">
        <div class=" wd-div-border pt-3 ps-0 pe-0 ms-4 me-4">
            ${ExploreComponent()}
        </div>
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
        ${WhoToFollowListItem()}
       </div>
      </div>
   `);
}

$(exploreComponent);


