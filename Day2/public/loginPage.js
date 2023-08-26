$(document).ready(function () {
    let username = $(".emailInput").val();
    let password = $(".passwordInput").val();

    console.log("email & password", username, password);

    $("#loginForm").submit(function() {
        event.preventDefault();
        if (username != null && password != null){
            setTimeout(function() {
                window.location.href = "index2.html"; 
            }, 2000);
        }  else {
            alert("Invalid login credentials. Please try again.");
        }
    });

    $("#loginButton").click(function() {
        // event.preventDefault();
        console.log($(this));
        $(this).css("background-color", "black");
        $(this).css("color", "white");
    })

   
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
