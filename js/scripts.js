$(window).scroll(function() {
  // selectors
  var $window = $(window),
      $transitionColor = $('.transition-color'),
      $panelOne = $('.selected-works-filler'),
      $scrollHeight = $('.selected-works').height(),
      $scrollWrapper = $('.selected-works-scroll-wrapper'),
      $panelTwo = $('.selected-works-filler');

  if ($(window).scrollTop() > $scrollHeight) {
    var position = -(($(window).scrollTop() - $scrollHeight ))
    if (position >= 0) {
      position = 0
    }
    $scrollWrapper.css("left", position);
  } else if ($(window).scrollTop() == 0) {
    $scrollWrapper.css("left", "0");
  }

  // Change 33% earlier than scroll position so color is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panelTwo.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      // Remove all classes on transitionElement with color-
      $transitionColor.each(function() {
        $(this).removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        })
      });

      // Add class of currently active div
      $transitionColor.each(function() {
        $(this).addClass('color-' + $(this).data('color'));
      });
    } else {
      // Remove all classes on transitionElement with color-
      // CHANGE ONLY IF NOT ALREADY LIKE THAT//CHANGE ONLY IF NEED BE
      $transitionColor.each(function() {
        $(this).removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        })
      });
    }
  });

}).scroll();

var lastWindowSize = $(window).width();
$(window).resize(function() {
  var newScrollPosition = $(window).scrollTop() - (lastWindowSize - $(window).width());

  $(window).scrollTop(newScrollPosition);

  lastWindowSize = $(window).width();
}).resize();

// (function() {
//     function scrollHorizontally(e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         document.getElementById('selected-works-scroll-wrapper').scrollLeft -= (delta*40); // Multiplied by 40
//         console.log('scroll');
//         e.preventDefault();
//     }
//     if (document.getElementById('selected-works-scroll-wrapper').addEventListener) {
//         // IE9, Chrome, Safari, Opera
//         document.getElementById('selected-works-scroll-wrapper').addEventListener("mousewheel", scrollHorizontally, false);
//         // Firefox
//         document.getElementById('selected-works-scroll-wrapper').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//     } else {
//         // IE 6/7/8
//         document.getElementById('selected-works-scroll-wrapper').attachEvent("onmousewheel", scrollHorizontally);
//     }
// })();
