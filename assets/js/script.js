document.getElementById(`submit-buton`).addEventListener("click",function() {
  const title = document.getElementByID(`title`).value;
  const username = document.getElementByID(`username`).value;
  const content = document.getElementByID(`content`).value;
}
  const blogs = {JSON.parse(localStorage.getItem(`blogs`)) || [];
  let New Blog = {title, username, content};
  blogs.push(NewBlog);
  localStorage.setItem('blogs',  JSON.stingify(blogs));
  window.location.href ="index2.html";
  });
 if(localStorage){
  contentDisplay.textContent = `blog-content`;
 }else{
  contentDisplay.textContent = `No content stored.`;
 }
  document.getElementByID('Blog').addEventListener('submit', function(event){

  const userName = document.querySelector('#username').value;
  const lastNameInput = document.querySelector('#title').value;
  const emailInput = document.querySelector('#content').value;
  const Data ={
    userName:userName,
    title:title,
    content:content
  }

  let DataList = localStorage.getItem('DataList');
  DataList = DataList ? JSON.parse(DataList) : [];

  DataList.push(formData);

  localStorage.setItem('DataList'), JSON.stringify(DataList));

})






