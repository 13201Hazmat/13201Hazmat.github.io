$(document).ready(function() {
  $("#header").load("subPages/header.html", function() {
    $("[href=" + "'" + window.location.pathname + "'" + "]")
      .parent()
      .addClass("active");
  });
  $("#footer").load("subPages/footer.html");
});
