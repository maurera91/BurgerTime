$(function() {
    $(".devour").on("click", (event) => {
      var id = $(this).data("id");
      var devoured = true;
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("changed devoured to", devoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim(),
        sleepy: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });