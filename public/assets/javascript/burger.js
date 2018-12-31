$(document).ready(function() {

    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
          name: $("#burger").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
    
    $(".devour-burger").on("click", function(event){
      event.preventDefault();
      console.log("devouring");
      var burgerID = $(this).data("id");

      $.ajax("/api/burgers/" + burgerID, {
        type: "PUT"
      }).then(
        function(){
          location.reload();
        }
      )
    })

    $(".delete-burger").on("click", function(event){
      event.preventDefault();
      
      console.log("deleting");

      var burgerID = $(this).data("id");

      $.ajax("/api/burgers/" + burgerID, {
        type: "DELETE"
      }).then(
        function(){
          location.reload();
        }
      )
    })


});