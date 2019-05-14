$(document).ready(function() {
  $('.project-card').click(function() {
    var link = $(this).find('a').attr('href');
    window.open(link, '_blank');
  });
});