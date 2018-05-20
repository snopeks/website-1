$(function(){
  console.log("ready!");

  //show the signup form
  $("#signupLink").on('click', function(e){
    e.preventDefault();
    if($("#signuplogin").has("form").length){
      $("#signuplogin").empty();
    } else {
      $("#signuplogin").empty();
      $("#signuplogin").append(`
        <form id="signupForm" action="POST">
          <h3>Sign up to create your own posts!</h3>
          <label for="userEmail">Email:</label>
          <input id="userEmail" type="email" placeholder="enter your email" required>
          <label for="userPassword">Password:</label>
          <input type="password" placeholder="choose a password" required>
          <input type="Sign up">
        </form>
        `)
    }
  })
  $("#loginLink").on('click', function(e){
    e.preventDefault();
    if($("#signuplogin").has('form').length){
      $("#signuplogin").empty();
    } else {
      $("#signuplogin").empty();
      $("#signuplogin").append(`
        <form id="loginForm" action="POST">
          <h3>Login to your account</h3>
          <label for="userEmail"> Email: </label>
          <input id="userEmail" type="email" required>
          <label for="userPassword">Password: </label>
          <input type="password" placeholder="enter your password" required>
        </form>
        `)
    }
  })
});