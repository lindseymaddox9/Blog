const themeToggleBtn = document.querySelector("#darkmode");

themeToggleBtn.addEventListener("click", () => {
  const mode = localStorage.getItem("mode") || "dark";
  
  let newMode;

  if (mode === "dark") {
    newMode = "light";
    document.body.classList = 'light'
  } else {
    newMode = "dark";
    document.body.classList = 'dark'
  }

  localStorage.setItem("mode", newMode);
});


//store it in local and fill//
let usernameInput = document.getElementById('username');
        let contentInput = document.getElementById('content');
        let postedBy = document.getElementById('posted-by');




