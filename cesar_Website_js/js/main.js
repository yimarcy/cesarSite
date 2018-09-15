/*
var skillset = document.getElementsByClassName('skillset');
alert(skillset);
*/

function main() {
  //document.getElementsByClassName('skillset');
  //it is common convention to name variables that hold jQuery selectors with a dollar sign $
  /*
  var $skillset = $('.skillset');
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);

	$('.projects').hide();
*/

  $('.projects-button').on('click', function() {
		$('.projects').toggle();
		$(this).toggleClass('active');

  });


  function go(loc) {
    document.getElementById('soundcloud_player').src = loc;
    window.open(loc);
  }


}



//checks if document ready before running our code
$(document).ready(main);
