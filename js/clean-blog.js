(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }
})(jQuery); // End of use strict

$(function () {
  // reverse the list
  // get list type
  var style = $('#applicationlist').attr("style");
  // count the total number of <li>'s
  var count = $('#applicationlist li').length;
  // loop through each <li> and set value to a decreasing value of count
  $('#applicationlist li').each(function() {
      $(this).attr("value", count--);
      if ($(this).attr("id") == style) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
  });

  // reverse the list
  // count the total number of <li>'s
  var count = $('#combinedlist li').length;
  // loop through each <li> and set value to a decreasing value of count
  $('#combinedlist li').each(function() {
      $(this).attr("value", count--);
  });

  // reverse the list
  // count the total number of <li>'s
  var count = $('#hiddenlist li').length;
  // loop through each <li> and set value to a decreasing value of count
  $('#hiddenlist li').each(function() {
      $(this).attr("value", count--);
  });

  // hide elements
  if ($('#hiddenlist li:visible').length > 2) {
        $('#hiddenlist li:visible').slice(2,$('#hiddenlist li').length).hide();
    }
});
