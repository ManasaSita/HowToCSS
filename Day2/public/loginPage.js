// $(document).ready(function () {

//     function isValidEmail(email) {
//         console.log(email);
//         var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         return emailPattern.test(email);
//     }

//     function isValidPassword(pswrd) {
//         console.log("pasword", pswrd, pswrd.length >= 8);
//         return pswrd.length >= 8;
//     }

//     $("#loginForm").submit(function() {
//         event.preventDefault();

//         var username = $("#emailInput").val();
//         var password = $("#passwordInput").val();

//         console.log("login event");

//         $("#errorMessages").empty();

//         if (!isValidEmail(username)) {
//             $("#errorMessages").append("<p>Invalid email address.</p>");
//             console.log("email validation", username);
//             return;
//         } else if (!isValidPassword(password)) {
//             console.log("+++++++++", password);
//             $("#errorMessages").append("<p>Password must be at least 8 characters long.</p>");
//             console.log("password validation");
//             return;
//         } else {
//             console.log("new window");
//             window.location.href = "index2.html"; 
//         }

//     });

//     // $("#loginButton").click(function() {
//     //     // event.preventDefault();
//     //     console.log($(this));
//     //     $(this).css("background-color", "black");
//     //     $(this).css("color", "white");
//     // })

   
// });

document.addEventListener("DOMContentLoaded", function() {

    function isValidEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    
    function isValidPassword(password) {
        return password.length >= 8;
    }

    var  loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var email = document.getElementById("emailInput").value;
        var password = document.getElementById("passwordInput").value;

        if (email.length == 0 || password.length == 0) {
            alert("Empty EMAIL and PASSWORD!");
        } else if(!isValidEmail(email)) {
            alert("Invalid Email!");
            return;            
        } else if (!isValidPassword(password)) {
            alert("Invalid Password!");
            return;
        } else {
            window.location.href = "index2.html";
            alert(`Logged in with email: ${email}`);
        }
    });
});







 // $.post('/login', { username, password })
    //     .done(function(response) {
    //         alert(response.message);
    //         if (response.message === 'Login successful') {
    //             // Redirect to home page
    //             window.location.href = 'index2.html';
    //         }
    //     })
    //     .fail(function(error) {
    //         console.error(error);
    //         alert('An error occurred');
    //         // window.location.href = 'index2.html';
    //     });

// $(document).ready(function () {
//     $("#loginForm").submit(function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         let username = $(".emailInput").val();
//         let password = $(".passwordInput").val();

//         // Send the POST request to the server
//         $.post('/login', { username, password })
//             .done(function(response) {
//                 alert(response.message);
//                 if (response.message === 'Login successful') {
//                     // Redirect to home page
//                     window.location.href = 'index2.html';
//                 }
//             })
//             .fail(function(error) {
//                 console.error(error);
//                 alert('An error occurred');
//             });
//     });
// });
