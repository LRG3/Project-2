
$(document).ready(function () {
    $(".theButton").on("click", function (event) {
        event.preventDefault()
        var newUser = {
            userName: $("#userName").val().trim(),
            password: $("#userPassword").val().trim(),
            email: $("#userEmail").val().trim(),
        }
        $.ajax("/newUser", {
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("created new user");
                location.replace("/login");
            }
        )
    })
})