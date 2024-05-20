// select the elements from the form
const usernameInput = document.getElementById('username')

const titleInput = document.getElementById('title')
const contentInput = document.getElementById('content')


const blogForm = document.getElementById('blog-form')
// check localstore for blog array
const blogArray = JSON.parse(localStorage.getItem('blogs')) || []

// function handleUserInput(event){
// event.preventDefault();

// const blogObj = {
//   title: titleInput.value,
//   username: usernameInput.value,
//   content: contentInput.value
// }

// blogArray.push(blogObj)
// localStorage.setItem('blogs', JSON.stringify(blogArray))
// window.location.href = './blog.html'
// }

// blogForm.addEventListener('submit', handleUserInput)

                    //alert//
// Add submit event listener to form
blogForm.addEventListener('submit', function(event) {
   
    event.preventDefault();

                  // get the input values
    const usernameValue = usernameInput.value;
    const titleValue = titleInput.value;
    const contentValue = contentInput.value;

             // Check if any are blank
    if (!usernameValue || !titleValue || !contentValue) {
             // Show an alert to the user
        alert('Please fill out all fields in the form.');
    } else {
                // Create an object
        const blogObj = {
            title: titleValue,
            username: usernameValue,
            content: contentValue
        }

        // get blog array from local storage
        const blogArray = JSON.parse(localStorage.getItem('blogs')) || [];

        // Push the  object to the blog array
        blogArray.push(blogObj);

        // Store the  array to local storage
        localStorage.setItem('blogs', JSON.stringify(blogArray));

        // Redirect 
        window.location.href = './blog.html';
    }
});


