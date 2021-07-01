//Table with the Skill form entries

function accept()
{
	var n = document.getElementById("name").value;
	var s = document.getElementById("skill").value;
	var l = document.getElementById("proficiency").options[document.getElementById("proficiency").selectedIndex].text;
	
	if(n=="" || s=="")
	{
		document.getElementById("error").innerHTML="Please fill out all the fields";
	}

	else
	{
		document.getElementById("skillTable").innerHTML+=("<tr><td>"+n+"</td><td>"+s+"</td><td>"+l+"</td></tr>");
		document.getElementById("error").innerHTML="";
	}
}

//Slideshow of 5 images

var imageNumber=0;
showSlides(imageNumber);

function nextSlide() 
{
    showSlides(++imageNumber);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n == slides.length)
        imageNumber = 0;

    for (i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";

    slides[imageNumber].style.display = "block";
}
