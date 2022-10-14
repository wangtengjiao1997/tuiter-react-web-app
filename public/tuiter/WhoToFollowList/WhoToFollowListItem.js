const WhoToFollowListItem  = (who) => {
    return(`
      <li class="list-group-item background_dark">
        <div class="row">
            <div class="col-2 me-2">
                <img class="wd-a-img" src='${who.avatarIcon}'>
            </div>
            <div class="col-6 wd-rightbar"><h1>${who.userName}<span><i class="text-white ms-1 fa fa-check-circle"></i></span></h1>
                <h3>@${who.handle}</h3></div>
            <div class="col-3">
                <button class="btn btn-primary float-end rounded-pill">Follow</button>
            </div>
        </div>
      </li>
   `);
}
export default WhoToFollowListItem;
