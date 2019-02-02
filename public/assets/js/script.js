
$(document).ready(function() {
    $("#devour").on("click", function(event) {
      var id = $(this).data("id");
      console.log($(this).data("id"));
      var devoured = 1;
      console.log(id, devoured);

      let newDevoured = {
        devoured: devoured
      }
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoured
      }).then(function() {
          console.log("changed devoured to", devoured);
          location.reload();
        }
      );
    });

    $(".delete").on("click", function(event){
      var id = $(this).data("id");
      console.log(id);
      console.log("fire api");
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(function() {
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