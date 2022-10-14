const NavigationSidebar = (active) => {
    let bg_home = "bg-black";
    let bg_explore = "bg-black";

    if (active=="home"){
        bg_home = "bg-gray";
    }
    else if (active =="explore"){
        bg_explore = "bg-gray";
    }

    let str = `
   <div class="list-group">
        <a class="list-group-item bg-black text-white" href="#"><i class="fa fa-t " aria-hidden="true"></i></a>
        <a id="HomeScreen" href="../HomeScreen/index.html" class="list-group-item ${bg_home} text-white"><i class="fa fa-home me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Home</span></a>
        <a id='Explore' href="../explore/index.html" class="list-group-item ${bg_explore} text-white"><i class="fa fa-hashtag me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Explore</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-bell me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Notification</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-envelope me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Message</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-bookmark me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Bookmark</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-list me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Lists</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-user me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">Profile</span></a>
        <a href="#" class="list-group-item bg-black text-white"><i class="fa fa-ellipsis-h me-3 col-1" aria-hidden="true"></i><span class="col-10 d-none d-xl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>`;

    return(str);
}
export default NavigationSidebar;