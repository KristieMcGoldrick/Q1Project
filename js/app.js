$(document).ready(function() {
// Yoga Journal YouTube API
// API with Query = stretch  or Length = medium Defined

$.get(yogaYouTubeResults("flow", "long"), function(data) {
  for (i=0; i < data.items.length; i++){
    var item = data.items[i];
    // console.log(item.snippet.title);
    // console.log(item.snippet.description);
    $(".result").append("<h4>" + item.snippet.title + "</h4>");
    $(".result").append("<p>" + item.snippet.description + "</p>");
  }
});

function yogaYouTubeResults(queryString, videoDuration) {
  var url = "https://www.googleapis.com/youtube/v3/search";
  url += "?part=snippet";
  url += "&channelId=UC-QFhQGiB-WqOjRR98XZrkA";
  url += "&q="+queryString;
  url += "&type=video";
  url += "&videoDuration="+videoDuration;
  url +="&key=AIzaSyALpGtcMsFAZ5klXNKclSKJ6UM0QnsjoRM";
  return url;
  };
  console.log(yogaYouTubeResults("flow","long"));
});
