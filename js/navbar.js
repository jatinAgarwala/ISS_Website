//Sticky Navigation Bar

window.onscroll = function()
{
    makeSticky()
};

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function makeSticky() 
{
    if (window.pageYOffset >= sticky) 
        navbar.classList.add("sticky")
    else
        navbar.classList.remove("sticky");
}

//Nav Bar Elements changing color on hovering

$(document).ready(function()
{
    $("nav ul li a").hover(function()
    {
        $(this).css("color", "white");
        $(this).css("background", "#1d075f") 
        $(this).css("transition", ".5s")
    }, 
    function()
    {
        $(this).css("color", "");
        $(this).css("background", "")
    });
});

// const nav = document.querySelector('#navigation');
// const navTop = nav.offsetTop;

// function stickyNavigation() 
// {  
//     if (window.scrollY >= navTop) 
//     {
//         document.body.style.paddingTop = nav.offsetHeight + 'px';
//         $("nav").css("position", "fixed");
//         $("nav").css("top", "0");
//         $("nav").css("z-index", "5");
//     } 
//     else 
//     {
//         document.body.style.paddingTop = 0;
//     }
// }
  
// window.addEventListener('scroll', stickyNavigation);
