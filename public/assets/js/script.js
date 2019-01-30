$(function() {
    $(".devour").on("click", (event) => {
      var id = $(this).attr("id");
      var devoured = 1;
  
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

    $(".delete").on("click", (event) => {
      var id = $(this).attr("id");
      var devoured = 1;
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log(`burger with id ${id} deleted`);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
  
      let newBurger = {
        name: $("#burger").val().trim(),
        devoured: 0
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