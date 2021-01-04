// TODO: Carousel with One Control button act as both Play and Pause JQuery code :
$(document).ready(() => {
  // Time interval between sliding action of carousel
  $("#mycarousel").carousel({ interval: 2000 });

  // Carousel button action
  $("#carouselButton").click(() => {
    if ($("#carouselButton").children("span").hasClass("fa-pause")) {
      // Performing pause action
      $("#mycarousel").carousel("pause");

      // Switching the pause button to play button
      $("#carouselButton").children("span").removeClass("fa-pause");
      $("#carouselButton").children("span").addClass("fa-play");
    } else if ($("#carouselButton").children("span").hasClass("fa-play")) {
      //Performing Play action
      $("#mycarousel").carousel("cycle");

      // Switching the play button to pause button
      $("#carouselButton").children("span").removeClass("fa-play");
      $("#carouselButton").children("span").addClass("fa-pause");
    }
  });

  // TODO: Login modal action
  $("#login-btn").click(() => {
    $("#loginModal").modal("show");
  });

  // TODO: reserve Table modal action
  $("#reserveTableBtn").click(() => {
    $("#reserveTableModal").modal("show");
  });
});

// TODO: Carousel with 2 control buttons JQuery code :
// $(document).ready(() => {
//   // Time interval between sliding action of carousel
//   $("#mycarousel").carousel({ interval: 2000 });

//   // Carousel pause button action
//   $("#carousel-pause").click(() => {
//     $("#mycarousel").carousel("pause");
//   });
//   // Carousel Play button action
//   $("#carousel-play").click(() => {
//     $("#mycarousel").carousel("cycle");
//   });
// });
