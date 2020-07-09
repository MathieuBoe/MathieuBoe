// Skills Bars
$('.skill-percent').each(function(){
    $(this).animate({
      width:$(this).attr('data-percent')},"fast");
    });

// play video loisir overwatch
$(document).ready(function () {
  $(".game").hover(function () {
      $(this).children("video")[0].play();
  }, function () {
      var el = $(this).children("video")[0];
      el.pause();
      el.currentTime = 0;
  });
});