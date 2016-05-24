$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var bookInput = $("input#book").val();


    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".book").text(bookInput);


    $("#story").show();

    event.preventDefault();
  });
});
