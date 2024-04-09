const themeToggleBtn=document.querySelector('.theme-toggle');
const theme = localStorage.getItem('theme');

if (theme) 
  document.body.classList.add('theme');

  
themeToggleBtndocument.addEventListener(click , => {
    document.body.classList.toggle('dark-mode');
    if (docuent.body.classList.contains('dark-mode)){
      localStorage.setItem('theme','dark-mode');
    } else {
      localStorage.removeItem('theme');
    }
  });
  document.getElementById(`submit-buton`).addEventListener("click",function() {
    const title = document.getElementById(`title`).value;
    const username = document.getElementById(`username`).value;
    const content = document.getElementById(`content`).value;
  }
    const blogs = {JSON.parse(localStorage.getItem(`blogs`)) || [];
    let newBlog = {title, username, content};
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stingify(blogs));
    window.location.href ="index2.html";
    });
   if(localStorage){
    contentDisplay.textContent = `blog-content`;
   }else{
    contentDisplay.textContent = `no content stored.`;
   }
    document.getElementById('Blog').addEventListener('submit', function(event){
  
    const userName = document.querySelector('#username').value;
    const lastNameInput = document.querySelector('#title').value;
    const emailInput = document.querySelector('#content').value;
    const Data ={
      userName:userName,
      title:title,
      content:content
    }
  
    let DataList = localStorage.getItem('DataList');
    DataList = DataList.JSON.parse(DataList) : [];
  
    DataList.push(formData);
  
    localStorage.setItem('DataList'), JSON.stringify(DataList));
  
  })
  
  /*
 function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "title");
    document.body.appendChild(x); 
}
function myFunction() {
  var y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("value", "username");
  document.body.appendChild(y);
}
function myFunction() {
  var z = document.createElement("INPUT");
  z.setAttribute("type", "text");
  z.setAttribute("value", "content");
  document.body.appendChild(z);
}


*/




