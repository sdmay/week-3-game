var topics = ["clown", "Jim Carrey", "Bill Cosby", "Richard Pryor"];
$(document).ready()
for (i = 0; i < topics.length; i++) {
    $("#buttonsView").append("<button id='topics' class='.btn btn-success red'  data-search='" + topics[i] + "'>" + topics[i] + "</button>")
}

$('#btn3').on('click', function startSearch() {

    var searchItem = $("#searchBar").val().trim();

    if ($.trim($("#searchBar").val()) === "") {
        alert('You did not enter a search term.');
        return false;
    }

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchItem + "&api_key=dc6zaTOxFJmzC&limit=10";

    $("#buttonsView").append("<button id='topics' class='.btn btn-success red' data-search='" + searchItem + "'>" + searchItem + "</button>")
    $.ajax({ url: queryURL, method: 'GET' })

        .done(function(response) {
            var results = response.data;
            for (i = 0; i < results.length; i++) {
                var imageUrl = results[i].images.original.url;
                console.log(imageUrl)
                var randomImage = $("<img>");
                // console.log(imageUrl)
                randomImage.attr('src', imageUrl);
                randomImage.attr('alt', 'random image');
                $('#display').prepend(randomImage)
            }
        });
    $('#searchBar').val('');
});

$('#buttonsView').on('click', '.red', function() {
    console.log("click")
    $('#display').empty();
    var animal = $(this).data('search');
    console.log(animal)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({ url: queryURL, method: 'GET' })

        .done(function(response) {
            var results = response.data;
            for (i = 0; i < results.length; i++) {
                var imageUrl = results[i].images.original.url;
                var randomImage = $("<img>");
                randomImage.attr('src', imageUrl);
                randomImage.attr('alt', 'random image');
                $('#display').prepend(randomImage)
            }
        });

});
$('#searchBar').keypress(function(e) {
    if (e.which == 13) {//Enter key pressed
        $('#btn3').click();//Trigger search button click event
    }
});