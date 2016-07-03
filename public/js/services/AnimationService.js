angular.module('myWebsite.animation', [])

.factory('Animate', function() {
  var anim = {};

  anim.single = function() {
    anime({
      targets: ['.wrapper'],
      'background-color': '#FF6138',
      rotate: 360,
      delay: function(el, index) {
        return index * 80;
      },
      borderRadius: '50%',
      duration: 2000,
      loop: false,
    });
  }

  return anim;
});
