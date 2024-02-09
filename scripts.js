var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
  
  var findMe = document.querySelectorAll('.pageBox');
  
  window.addEventListener('scroll', function(event) {
  // add event on scroll
  findMe.forEach(element => {
      //for each .story-panel
      if (isInViewport(element)) {
        //if in Viewport, add this class
        element.classList.add("active");
      } else {
        //if not in Viewport, remove this class
        element.classList.remove("active");
      }
  });
  }, false);