lg1 = {
    username: "Ochidera",
    password: "chi1234",
  };
  lg2 = {
    username: "Uvictor",
    password: "DJ234",
  };
  lg3 = {
    username: "Omelvin",
    password: "mel121",
  };
  lg4 = {
    username: "Oester",
    password: "esty264",
  };
  lg5 = {
    username: "Ofavour",
    password: "fav491",
  };
  
  var usernames = [
    lg1.username,
    lg2.username,
    lg3.username,
    lg4.username,
    lg5.username,
  ];
  var passwords = [
    lg1.password,
    lg2.password,
    lg3.password,
    lg4.password,
    lg5.password,
  ];
  
  var form = document.getElementById("form");
  var username = document.getElementById("input1");
  var password = document.getElementById("input2");
  var submit = document.getElementById("submit");
  var error = document.getElementById("error");
  
  submit.onclick = check;
  
  // function showPassword() {
  //   if ((password.type = "password")) {
  //     password.type = "text";
  //   } else if ((password.type = "text")) {
  //     password.type = "password";
  //   }
  // }
  
  var correct;
  
  function check() {
    if (username.value === "" || password.value === "") {
      correct = false;
      error.innerHTML = "The username or password fields are empty.";
    } else if (usernames === !username || passwords === !password) {
      correct = false;
      error.innerHTML = "The username or password is wrong.";
    } else if (usernames === username && passwords === !password) {
      correct = false;
      error.innerHTML = "The username or password is wrong.";
    } else {
      error.innerHTML = "loading";
      window.location.href = "second-page.html";
    }
  }
  
  form.addEventListener("submit", (sub) => {
    if (correct === false) {
      sub.preventDefault();
    }
  });
  