const postItem = (posts) =>{
    return(`
    <div class = "container">
      <div class="row mb-3 wd-div-border-bottom">
          <div class=" col-1 ms-3">
            <img class="wd-a-img" src="${posts.avator}">
          </div>
          <div class="bg-black ms-3 col-10">
                <div class="mb-3">
                    <h1>${posts.userName}<span><i class="text-white ms-1 fa fa-check-circle"></i></span><span style ="color: rgb(110, 118, 125)"> - ${posts.time}</span> </h1>
                    <h1>${posts.title}</h1>
                </div>
                
                <div class="mb-3 card bg-black wd-div-border">
                    <div>
                        <img src="${posts.image}"
                             class="card-img-top" style="height: 264px" alt="...">
                        <div class="card-text border-2 m-2" >
                            <h1>${posts.content1}dd</h1>
                            <h1 style="color:rgb(110, 118, 125)">${posts.content2}</h1>
                        </div>     
                    </div>
                </div>   
        
                <div class="wd-icons wd-nav-tags">
                <ul class="list-inline">
                    <li class="col flex-row "><a href="#" class="text-decoration-none "><i class="fa fa-comment-o wd-color-gray"></i><span class="wd-color-gray ms-1">${posts.comment}</span></a></li>
                    <li class="col flex-row "><a href="#" class="text-decoration-none "><i class="fa fa-heart-o wd-color-gray"></i><span class="wd-color-gray ms-1">${posts.like}</span></a></li>
                    <li class="col flex-row "><a href="#" class="text-decoration-none "><i class="fa fa-exchange wd-color-gray"></i><span class="wd-color-gray ms-1">${posts.transfer}</span></a></li>
                    <li class="col flex-row "><a href="#" class="text-decoration-none "><i class="fa fa-download wd-color-gray"></i></a></li>
                </ul>
                </div> 
          </div>
      </div>
      </div>
   `);
}
export default postItem;