$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var fortuneLevel = 0;
    $("input:checkbox[name=pick-a-card]:checked").each(function() {
      var cardVal = parseInt($(this).val());
      fortuneLevel += cardVal;
    });
    if (fortuneLevel >= 0) {
      $("#output-good").append("You win!");
    } else {
      $("#output-bad").append("You die! HAHAHAHAHA! Tomorrow! Enjoy the rest of your night.");
    }

  });
});
