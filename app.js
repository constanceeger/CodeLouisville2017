

/*--- form sumbit 
function validateForm() {
		var x = document.forms["myForm"]["fname"].value;
		if (x == "") {alert("Name must be filled out");
		return false;
	}
} ---*/

// alert("I am an alert box!");



/*--- submit order form alert ---*/ 


// Submit form with id function.
function submit_by_id() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

 // Calling validation function
	if (validation()) {
	document.getElementById("form_id").submit();
	alert(" Name : " + name + " \n Email : " + email + " \n Form Id : " + document.getElementById("form_id").getAttribute("id") + "\n\n Thank you for your order. Michael's Amazing Eggs are on the way.");
	}
}

// Name and Email validation Function.
function validation(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
	if( name ==='' || email ===''){
		alert("Make sure you completed your order form.");
		return false;
	}else if(!(email).match(emailReg)){
		alert("Sorry, please check your email address.");
		return false;
	}
	else{
		return true;
	}
}


/*--- /.submit order form alert ---*/ 

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


