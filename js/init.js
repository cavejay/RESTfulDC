// This file will handle the init of various things

// an event for updating the materialize UI
UIupdate = new Event('UIupdate');


window.addEventListener('UIupdate', function () {
  $('select').material_select();
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});

$(document).ready(function(){
  $('#LoadingBar').pushpin({
    top: 40+35+56
  });
});
