var scene = document.querySelector('a-scene');

var seneca_button = document.querySelector("#seneca_button");
var sup_scene_button = document.querySelector("#sup_scene_button");
var womens_march_button = document.querySelector("#womens_march_button");
var votingbooth_button = document.querySelector("#votingbooth_button");
var doctorsoffice_button = document.querySelector("#doctorsoffice_button");
var track_button = document.querySelector("#track_button");
var hillthomas_button = document.querySelector("#hillthomas_button");


var sup_scene = document.querySelector("#supremecourtscene");
var seneca = document.querySelector("#seneca");

var womensmarchaudiovar = document.querySelector("#womensmarchaudio");
var hillthomasaudio = document.querySelector("#hillthomasaudio");
var senecafallsaudio = document.querySelector("#senecafallsaudio");
var trackaudio = document.querySelector("#trackaudio");
var votingboothaudio = document.querySelector("#votingboothaudio");
var roevwadeaudio = document.querySelector("#roevwadeaudio");
var doctorsofficeaudio = document.querySelector("#doctorsofficeaudio");


//var intro = document.querySelector("#intro");

// scene.addEventListener('click', function() {
//   intro.setAttribute('visible', 'false');
// });

seneca_button.addEventListener('click', function() {
  showScene(seneca.id);
  playSceneSound(senecafallsaudio.id);

});

sup_scene_button.addEventListener('click', function() {

  showScene(sup_scene.id);
  playSceneSound(roevwadeaudio.id);

});

womens_march_button.addEventListener('click', function() {

  showScene(womens_march.id);
  playSceneSound(womensmarchaudiovar.id);
});

track_button.addEventListener('click', function() {

  showScene(track.id);
  playSceneSound(trackaudio.id);

});

doctorsoffice_button.addEventListener('click', function() {

  showScene(doctorsoffice.id);
  playSceneSound(doctorsofficeaudio.id);

});

votingbooth_button.addEventListener('click', function() {

  showScene(votingbooth.id);
  playSceneSound(votingboothaudio.id);

});

hillthomas_button.addEventListener('click', function() {

  showScene(hillthomasscene.id);
  playSceneSound(hillthomasaudio.id);

});



//try fading in and out by setting opacity to 0 and using an animation

function showScene(id) {
  [...document.querySelectorAll('.scene')].forEach( function(s) {
    s.setAttribute("visible", "false");
  });

  document.querySelector("#" + id).setAttribute("visible", "true");
}

function playSceneSound(id) {
    [...document.querySelectorAll('.sounds')].forEach( function(e) {
    e.components.sound.pauseSound();
  });

  document.querySelector("#" + id).components.sound.playSound();

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
        