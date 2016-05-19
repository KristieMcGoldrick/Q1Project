$(document).ready(function() {
  $('.youtubeLinks').hide();
  $('.successBtn').hide();

  var url = createYogaUrl("stress", "medium");
  getVideos(url);

    // Submit Button Information
  $(".save").on("click",function(event){
    // event.preventDefault()
    var userType =  $(".yogaTypeQuestion li input:checked").val();
      if (userType === "other") {
        console.log(userType);
        userType = $(".userInput").val();
        console.log(userType);
      }
    var userDuration =  $(".yogaLengthQuestion input:checked").val();
    console.log(userDuration);
    var url = createYogaUrl(userType, userDuration);
    $(".result").empty();
    getVideos(url);

  });
  // Yoga Journal YouTube API
  // API with Query = stretch  or Length = medium Defined
  function createYogaUrl(type, duration) {
    var url = "https://www.googleapis.com/youtube/v3/search";
    url += "?part=snippet";
    url += "&channelId=UC-QFhQGiB-WqOjRR98XZrkA";
    url += "&q="+ type;
    url += "&type=video";
    url += "&videoDuration="+ duration;
    url +="&key=AIzaSyALpGtcMsFAZ5klXNKclSKJ6UM0QnsjoRM";
    return url;
  };

  function getVideos (url) {
    $.get(url , function(data) {
      // console.log(data);
      for (i=0; i < data.items.length; i++){
        var item = data.items[i];
        var videoId= item.id.videoId;
        $(".result").append("<h4>" + item.snippet.title + "</h4>");
        $(".result").append("<p>" + item.snippet.description + "</p>");
        createUniqueLink(videoId);
      }
    });
  };
  function createUniqueLink(videoId){
    var videoUrl = "https://www.youtube.com/embed/";
    videoUrl += videoId;
    // console.log(videoUrl);
    $(".result").append("<iframe type='text/html' width='640' height='390' class='video' src='" + videoUrl + "'frameborder='0' + allowfullscreen></iframe>");
  }

  $('.save').on('click', function(){
      $('.initialHeader').hide();
      $('.youtubeLinks').show();
      $('.save').hide().delay(5000).fadeIn(1000);
      $('.successBtn').fadeIn('slow').delay(2500).fadeOut(2000);
    });

});
