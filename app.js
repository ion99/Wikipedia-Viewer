
$(document).ready(function(){
  
  $('.data-fetcher').on('submit', function (event) {
    event.preventDefault();
    var wiki = $('input').val();
    $("#switch").removeClass("before");
    //console.log("1111", wiki);
    if (!$('input').val()){
      $("#main").empty();
      $("#switch").addClass("before");
    } else {
      
      $("#main").empty();
      $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wiki + "&callback=?",
      contentType: "application/json; charset=utf-8",
      async: false,
      dataType: "json",
      success: function (data) {
        console.log(data);
        var result = "";
        
        for (var i=0; i<10; i++){
          result = "<div class='container" + i + "'><div class='card'><a href=" + data.slice(1)[2][i] + " target='_blank'>" + "<h4>"+ data.slice(1)[0][i]+ ":" + "</h4>" + "<p>" + data.slice(1)[1][i] + "</p></a></div></div>";
          $("#main").append(result);
        }
      },
      error: function (errorMessage) {
      }
    });
   }
  });
});