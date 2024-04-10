// select the elements from the form
const usernameInput = document.getElementById('username')

const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')


const blogForm = document.getElementById('blog-form')
// check localstore for blog array
const blogArray = JSON.parse(localStorage.getItem('blogs')) || []

function handleUserInput(event){
event.preventDefault();

const blogObj = {
  title: titleInput.value,
  username: usernameInput.value,
  content: contentInput.value
}

blogArray.push(blogObj)
localStorage.setItem('blogs', JSON.stringify(blogArray))
window.location.href = './blog.html'
}


blogForm.addEventListener('submit', handleUserInput)

// document.getElementById(`submit`).addEventListener("click",function() {
//   const title = document.getElementById(`username`).value;
//   const username = document.getElementById(`title`).value;
//   const content = document.getElementById(`content`).value;

//   const blogs = JSON.parse(localStorage.getItem(`blogs`)) || [];
//   let newBlog = {title, username, content};
//   blogs.push(newBlog);
//   localStorage.setItem('blogs', JSON.stingify(blogs));
//   window.location.href ="index2.html";
//   });
//  if(localStorage){
//   contentDisplay.textContent = `blog-content`;
//  }else{
//   contentDisplay.textContent = `no content stored.`;
//  }
//   document.getElementById('blogs').addEventListener('submit', function(event){

//   const userName = document.querySelector('#username').value;
//   const lastNameInput = document.querySelector('#title').value;
//   const emailInput = document.querySelector('#content').value;
//   const Data ={
//     userName:userName,
//     title:title,
//     content:content
//   }

//   let DataList = localStorage.getItem('DataList');
//   DataList = DataList.JSON.parse(DataList)|| [];

//   DataList.push(formData);

//   localStorage.setItem('DataList', JSON.stringify(DataList));

// })
// /*window object*/
// console.log(window);
// console.log(window.document);
// console.log(document.documentElement);
// console.log(document.head);

// //alert//

// function checkforblank(){
//  if(document.getElementById('username').value=="") {
//   alert("Please Complete Form");
//   return false;
// }
// }

// submitButton.addEventListener('click', function (event){
// event.preventDefault();

// const username = document.querySelector('#username');
// const title = document.querySelector('#title');
// const content = document.querySelector('#content');

// if (username.value=== '') {
//   alert('Please Fill Out the Form');
// } else if (title.value=== '') {
//   alert('Please Fill Out the Form');
//   } else if (content.value=== '') {
//   alert('Please Fill Out the Form');
// } else {
//   alert('submitted');
// }
// });