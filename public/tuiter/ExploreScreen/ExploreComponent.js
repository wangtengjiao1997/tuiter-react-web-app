import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            
       <div id="Search_row" class="row ms-2">
            <div class="input-group rounded-pill col">
                <span class="input-group-text bg-dark" id="basic-addon1"><i class="fa fs-6 fa-search text-white"></i></span>
                <input type="text" class="form-control bg-dark" placeholder="Search Tuiter" >
            </div>
            <div class="col-1 d-flex align-items-center me-4">
                <a href="#">
                    <i class="fa fs-3 fa-cog text-blue"></i>
                </a>
            </div>
       </div>
       <div id="nav_bar" class="wd-nav-tags">
            <ul class="list-inline ps-2">
                <li class="wd-selected col" >
                    <a class="nav-link active flex-row" href="for-you.html">For you</a>
                </li>
                <li class="col">
                    <a class="nav-link flex-row" href="trending.html">Trending</a>
                </li>
                <li class="col">
                    <a class="nav-link flex-row" href="news.html">News</a>
                </li>
                <li class="col">
                    <a class="nav-link flex-row" href="sport.html">Sports</a>
                </li>
                <li class="col d-none d-md-inline-flex">
                    <a class="nav-link flex-row" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
       </div>
       <!-- image with overlaid text -->
       <div id="main_content" class="mb-3">
        <div>
            <img src="../../images/6.jfif"
                 class="card-img-top" alt="...">
            <h2 class="wd-wordonimage">SpaceX's starship</h2>
        </div>
            ${PostSummaryList()}
       </div>   
    `);
}
export default ExploreComponent;
