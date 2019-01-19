(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav"
  });

  // Get User's GITHUB REPO
  $.ajax({
    url: "https://api.github.com/users/semkoo/repos",
    complete: function(xhr) {
      // callback.call(null, xhr.responseJSON);

      $.each(xhr.responseJSON, function(index, repo) {
        if (!repo.fork) {
          console.log(repo);
          var description = (repo.description)? repo.description: 'No Description' ;
          // var date = $.datepicker.formatDate("M d, yy", new Date(repo.pushed_at));
          var html =
              '<div class="card">' +
                '<div class="card-body">' +
                  '<h5 class="card-title">'+repo.full_name+'</h5>' +
                  '<p class="card-text">' +
                  description +
                
                  "</p>" +
                  
                '</div>' +
                '<div class="card-footer text-muted  d-flex">'+
                repo.language +
                  '<a href='+repo.html_url+' target="_blank" class="ml-auto">More Info</a>' +
               
              '</div>';

          // Sort by data
          $("#git_repo").append(html);
        }
      });
    }
  });
})(jQuery); // End of use strict
