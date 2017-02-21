var scene = document.querySelector('a-scene');

var seneca_button = document.querySelector("#seneca_button");
var sup_scene_button = document.querySelector("#sup_scene_button");
var womens_march_button = document.querySelector("#womens_march_button")
var sup_scene = document.querySelector("#supremecourtscene");
var seneca = document.querySelector("#seneca");


var intro = document.querySelector("#intro");

scene.addEventListener('click', function() {
  intro.setAttribute('visible', 'false');
  console.log('clicked');
});

seneca_button.addEventListener('click', function() {
  showScene(seneca.id);
});

sup_scene_button.addEventListener('click', function() {
  showScene(sup_scene.id);
});

womens_march_button.addEventListener('click', function() {
  showScene(womens_march.id);
});



//try fading in and out by setting opacity to 0 and using an animation

function showScene(id) {
  [...document.querySelectorAll('.scene')].forEach( function(s) {
    s.setAttribute("visible", "false");
  });

  document.querySelector("#" + id).setAttribute("visible", "true");
}

//this function is for when i get the click to work on individual dates in the timeline
//i have to name all the year buttons "id-button" for it to work
// function showSingleScene(id) {
//   [...document.querySelectorAll('.button')]forEach(function(s) {
//     s.addEventListener('click', function(event) {
//       showScene(event.target.id.replace("_button", ""))
//     }
//   }));
// }
        