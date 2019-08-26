// SCROLL TO TOP BUTTON
window.onscroll = function() {scrollFunction()};

const button = document.getElementById("btnTop");

function removeClass(){     //Removes 'btnEnter' class when called from Event Listener
    button.classList.remove('btnEnter');    
}

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
      if (button.style.display == "none") {     // When scrolled below 75px and the button was previously hidden...
        button.style.display = "block";         // display button as block and...
        setTimeout(function(){ btnTop.classList.add('btnEnter'); }, 0005);  // add 'btnEnter' class after 0005ms and...
        button.addEventListener('transitionend', removeClass);  // listen for 'btnEnter' transition to end and remove 'btnEnter' class
    } else { button.style.display = "block"}    // If scrolled below 75px and button is not hidden - remain not hidden
  } else {
    button.style.display = "none";  // If scrolled above 75px - hide button...
    removeClass();    //and remove 'btnEnter' class    
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollIntoView({behavior: "smooth", block: "start"});  //For Safari
  document.documentElement.scrollIntoView({behavior: "smooth", block: "start"});   // For Chrome, Firefox, IE and Opera
}
//Base code copy/pasted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Transition code added by Daniel Dick


// PARALLAX

const parallax = document.querySelectorAll('.parallax');

window.addEventListener('scroll', function(){
  const target = document.querySelectorAll('.parallax');
  target.forEach(prllx => {
    let pos = (window.pageYOffset - prllx.offsetTop) * prllx.dataset.rate + 'px';
    prllx.style.backgroundPositionY = pos;
});
})
// This base code taken from DesignCourse: https://www.youtube.com/watch?v=Dxm6EwvQIl8 //


//SMOOTH SCROLL
const links = document.querySelectorAll(".navList_item");

links.forEach(link => link.addEventListener('click', scroll));    

function scroll(e) {
  e.preventDefault();
  const targetId = e.target.getAttribute('href');
  const destination = document.querySelector(targetId).offsetTop;
  window.scrollTo({
    top: destination,
    left: 0,
    behavior: 'smooth'
  });
}

