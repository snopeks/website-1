$(function(){
  console.log("ready!");

  //show the signup form
  $("#signupLink").on('click', function(e){
    e.preventDefault();
    console.log(e);
    $("#signup").empty();
    $("#signup").append(`
      <form id="signupForm" action="POST">
        <label for="userEmail">Email:</label>
        <input id="userEmail" type="text" placeholder="enter your email" required>
        <label for="userPassword" required>Password:</label>
        <input type="password" placeholder="choose a password">
        <input type="submit">
      </form>
      `)
  })
});