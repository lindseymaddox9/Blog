const blogsSection = document.getElementById('blogs');

// get the blog array from local 
const blogArray = JSON.parse(localStorage.getItem('blogs')) || [];

//Loop //
blogArray.forEach(blog => {
  const blogElement = document.createElement('div');
  blogElement.classList.add('blog-entry');

  const titleElement = document.createElement('h2');
  titleElement.textContent = blog.title;
//is this  right?//
  const usernameElement = document.createElement('p');
  usernameElement.textContent = `By: ${blog.username}`;

  const contentElement = document.createElement('p');
  contentElement.textContent = blog.content;

  blogElement.appendChild(titleElement);
  blogElement.appendChild(usernameElement);
  blogElement.appendChild(contentElement);

              // Append//
blogsSection.appendChild(blogElement);
});

const blogForm = document.getElementById('blog-form');

        // Add the event listener to the form
blogForm.addEventListener('submit', function(event) {
               //check this/
 event.preventDefault();

          // Retrieve the input values
 const usernameValue = usernameInput.value;
 const titleValue = titleInput.value;
    const contentValue = contentInput.value;

        // Check if any of the fields are blank
if (!usernameValue || !titleValue || !contentValue) {
           // say this//
 alert('Please fill out all of the form.');
} else {
        // Create a  object
const blogObj = {
 title: titleValue,
username: usernameValue,
 content: contentValue
}

         // Retrieve blog array from local storage
 const blogArray = JSON.parse(localStorage.getItem('blogs')) || [];
         // Push the  object to the blog array
blogArray.push(blogObj);

         // Store the updated to local storage
localStorage.setItem('blogs', JSON.stringify(blogArray));

           // Redirect the user to the new page
window.location.href = './blog.html';
    }
});

