// This file will handle the init of various things

// an event for updating the materialize UI
UIupdate = new Event('UIupdate');


window.addEventListener('UIupdate', function () {
  $('select').material_select();
});
