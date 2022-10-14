const postSummaryItem = (posts) =>{
    return(`
      <div class="wd-div-border-top bg-black">
        <div class="wd-div-authorAndtitle m-3">
            <h3>${posts.topic}</h3>
            <h1>${posts.userName}<span><i class="text-white ms-1 fa fa-check-circle"></i></span><span style ="color: rgb(110, 118, 125)"> - ${posts.time}</span> </h1>
            <h1>${posts.title}</h1>
        </div>
        <div class="wd-div-image">
            <img src="${posts.image}">
        </div>
        <div class="float-done"></div>
      </div>
   `);
}
export default postSummaryItem;