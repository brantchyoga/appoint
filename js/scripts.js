

$(function() {
  $("form#book").submit(function(event) {
  event.preventDefault();
  $("#name1").text($("#name").val());
  $("#descript1").text($("#descript").val());
  $("#date1").text($("#date").val());
  $("#time1").text($("#time").val());
  $("#hidden1").show();
  });
});
