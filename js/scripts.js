$("a#selected-works").click(function (event) {
  event.preventDefault();
  $("a#back-link").removeClass('hide');
  $("a#about").addClass('hide');
  $(this).addClass('highlighted');
});

$("a#about").click(function (event) {
  event.preventDefault();
  $("a#back-link").removeClass('hide');
  $("a#selected-works").addClass('hide');
  $(this).addClass('highlighted');
});

$("a#back-link").click(function (event) {
  event.preventDefault();
  $("a#selected-works").removeClass('hide highlighted');
  $("a#about").removeClass('hide highlighted');
  $(this).addClass('hide');
});
