/*backbutton reference Sam for back help*/
document.getElementById('backbutton').onclick= function () {
    window.location.href = "index.html";
}
console.log(localStorage);
const BlogList = JSON.parse (LocalStorage.getItem('DataList')) || [];
const (BlogPostList.length > 0){
    let postHTML ='ul>';
     BlogPostList.forEach(element => {
        console.log(element);
        postHTML += 
        <li> class="BlogPostsArea">
            <h4> UserName;<h4> ${element.userName}<br>
            <h4> Title;<h4> ${element.userName}<br>
            <h4> Content;<h4> ${element.userName}
        ';
    });
    postsHTML += '<ul>';
        console.log(BlogPostList.length)
        
    }

}




