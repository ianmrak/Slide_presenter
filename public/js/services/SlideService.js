angular.module('myWebsite.slides', [])

.factory('Slides', function() {
  var serveSlide = function(id) {
    return slides[id];
  }
  var transitionDirection = function(newDirection) {
    var oldDirection = newDirection === 'left' ? 'right' : 'left';
    document.body.classList.remove(oldDirection);
    document.body.classList.add(newDirection);
    console.log(document.body.classList)
  }
  var slides = [
    {
      title: 'Introduction',
      points: [1,2,3,4,5],
      img: ''
    },
    {
      title: 'Concept',
      points: [1,2,3,4,5],
      img: '../assets/FirefliesConceptOrig.jpg'
    },
    {
      title: 'Modeling',
      points: [6,7,8,9,10]
    },
    {
      title: 'Rigging',
      points: [1,2,3,4,5],
      img: '../assets/AtlasRig.jpg'
    },
    {
      title: 'Animation',
      points: [6,7,8,9,10]
    },
    {
      title: 'Conclusion',
      points: [1,2,3,4,5]
    }
  ]
  return {
    transition: transitionDirection,
    serveSlide: serveSlide
  };
});
