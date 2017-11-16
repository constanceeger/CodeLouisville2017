

/////*****function validateForm() {var x = document.forms["myForm"]["fname"].value;if (x == "") {alert("Name must be filled out");return false; }}****/////


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//an image
$overlay.append($image);


//caption
$overlay.append($caption);

//add overlay
$("body").append($overlay);


//capture click event on link to image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	$image.attr("src", imageLocation);

	//show the overlay
	$overlay.show();


	//update overlay with image linked in link
	//add alt attribute. get child's alt attribute and set caption

	var captionText = $(this).children("img").attr("alt");
	$caption.text(caption.Text);
});


//when overlay is clicked
	//hide the overlay

$overlay.click(function(){
	$overlay.hide();

});


