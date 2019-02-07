$(document).ready(function(){
    console.log("this is not it")
    $(".myPlaylists").on("click", function (event) {
        event.preventDefault()
        var spotifyId = $(".theName").val()
        console.log(spotifyId)
        // $.get("/redirected/playlist", function(response) {
        //     console.log(response)
        // })
    })
})