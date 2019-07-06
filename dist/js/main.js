$(document).ready(function() {
  $("#menu").on("click", function() {
    // $("#menu").css("opacity", "0");
    $("#lgMenu").addClass("enter");
    $("body").css("overflow", "hidden");
  });
  $("#exit").on("click", function() {
    $("#lgMenu").removeClass("enter");
    $("#menu").css("opacity", "1");
    $("body").css("overflow", "auto");
  });
});
