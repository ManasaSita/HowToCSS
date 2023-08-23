$(document).ready(function () {
    let username = $(".emailInput").val();
    let password = $(".passwordInput").val();

    console.log("email & password", username, password);
    // $("#loginForm").submit(function() {
    //     event.preventDefault();
    //     if (email != null && password != null){
    //         window.location.href = "index2.html";
    //     }  else {
    //         alert("Invalid login credentials. Please try again.");
    //     }
    // })

    $.post('/login', { username, password })
        .done(function(response) {
            alert(response.message);
            if (response.message === 'Login successful') {
                // Redirect to home page
                window.location.href = 'index2.html';
            }
        })
        .fail(function(error) {
            console.error(error);
            alert('An error occurred');
            // window.location.href = 'index2.html';
        });
});