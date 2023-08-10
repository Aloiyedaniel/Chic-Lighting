$(document).ready(function() {
    // Add event listener to the child page link
    $('#link').click(function(event) {
      event.preventDefault();  // Prevent default behavior of hyperlink
      // Load the child page content into the main container element
      $('#main-container').load('index.html');
    });
  });
  