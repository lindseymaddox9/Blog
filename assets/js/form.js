/*backbutton reference Sam for back help*/
document.getElementById('backbutton').onclick= function () {
    window.location.href = "index.html";
}
console.log(localStorage);
const BlogList = JSON.parse (localStorage.getItem('DataList')) || [];
const (BlogList.length > 0);{
    let postHTML ='ul>';
     BlogList.forEach(element) => {
        console.log(element);
        postHTML += 
        <li> class="BlogArea">
            <h4> UserName;<h4> ${h4.UserName}<br>
            <h4> Title;<h4> ${h4.Title}<br>
            <h4> Content;<h4> ${h4.Content}<br>
     }

}

postsHTML += '<ul>';
        console.log(BlogPostList.length)


