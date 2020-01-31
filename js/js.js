$(function()
{
	$('.scroll-pane').jScrollPane();
});



$(document).ready(function(){
	$("#btn-richard").click(function(){
		$(".btn-richard").show();
		$("#btn-richard").hide();
	});    
});

	$(document).ready(function(){
		$("#btn-anna").click(function(){
			$(".btn-anna").show();
			$("#btn-anna").hide();
		});    
	});

		$(document).ready(function(){
			$("#btn-mark").click(function(){
				$(".btn-mark").show();
			$("#btn-mark").hide();
			});    
		});


var myModal	= function() {	

	

// Get the modal
var modal = document.getElementById("myModal");
var body = document.querySelector("body");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.querySelector('.close')
// When the user clicks the button, open the modal 
btn.onclick = function() {
	body.style.overflow = "hidden";
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
	body.style.overflow = "auto";
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
		body.style.overflow = "auto";
    modal.style.display = "none";
  }
}

}
myModal();