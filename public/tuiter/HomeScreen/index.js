import NavigationSidebar from "../NavigationSidebar/index.js";
import postSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";
function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2 ">
        ${NavigationSidebar("home")}
       </div>
       <div class="col-10 col-lg-7 col-xl-6 ">
        <div class=" wd-div-border pt-3 ps-0 pe-0 ms-4 me-4">   
           ${PostList()}
        </div>
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
           <div class=" wd-div-border pt-0 ps-0 pe-0 ms-4 me-4">
                <div class="mb-3">
                    ${postSummaryList()}
                </div>
           </div>
       </div>
      </div>
   `);
}

$(exploreComponent);