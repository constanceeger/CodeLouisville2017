

/////*****function validateForm() {var x = document.forms["myForm"]["fname"].value;if (x == "") {alert("Name must be filled out");return false; }}****/////


//caput click event on link to image
$("#imageGallery a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);
});
	//show the overlay
	//update overlay with image linked in link
	//add alt attribute. get child's alt attribute and set caption
//add overly
	//an image
	//caption
//when overlay is clicked
	//hide the overlay