// EYE TOGGLER
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// VALIDATIONS
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');




document.getElementById("myForm").addEventListener("submit", function(evt) {
    evt.preventDefault();
    var error = "";
    if (document.getElementById("username").value == "") {
        error += "The username field is required.<br>";
      }

    if (document.getElementById("email").value == "") {
      error += "The email field is required.<br>";
    }
  
    if (document.getElementById("password").value == "") {
      error += "Password is required.<br>";
    }

    if (document.getElementById("confirm-password").value == "") {
        error += "Confirm Password is required.<br>";
      }
  
    if (error != "") {
      document.getElementById("error").innerHTML = '<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>';
      return false;
    } else {
      document.getElementById("myForm").removeEventListener("submit", function() {
        return true;
      });
    }
  });