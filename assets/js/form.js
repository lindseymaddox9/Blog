
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  if (username === '') {
    displayMessage('error', 'Please Fill Out the Form');
  } else if (title === '') {
    displayMessage('error', 'Please Fill Out the Form');
    } else if (content === '') {
    displayMessage('error', 'Please Fill Out the Form');
  } else {
    displayMessage('success', 'submitted successfully');

});

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


