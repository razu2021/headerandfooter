// JavaScript
document.getElementById('mobile__toggle_button').addEventListener("click", showMenu);
document.getElementById('mobile__toggle_close').addEventListener("click", hiddenMenu);
var tshow = document.querySelector('.toggle_show');
var tclose = document.querySelector('.toggle_close');

// If the menu element is constant, you can select it once outside the function
var mobileMenu = document.querySelector('.main__menu');

function showMenu() {
    mobileMenu.classList.add('shoow');
    tclose.style.display = "block";
    tshow.style.display = "none";
}

function hiddenMenu() {
    mobileMenu.classList.remove('shoow');
    tshow.style.display = "block";
    tclose.style.display = "none";
}


// nav item 
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the submenu
        const submenu = button.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

        // Toggle the '+' and '-' indicator
        const span = button.querySelector('span');
        span.textContent = submenu.style.display === 'block' ? '-' : '+';

        // Remove 'active' class from all other buttons
        document.querySelectorAll('.accordion-toggle').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.querySelector('span').textContent = '+';
                otherButton.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle 'active' class on the clicked button
        button.classList.toggle('active');
    });
});
// nav item sub cetagorys  
document.querySelectorAll('.accordion_toggle_submenu').forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the submenu
        const submenu = button.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';

        // Toggle the '+' and '-' indicator
        const span = button.querySelector('span');
        span.textContent = submenu.style.display === 'block' ? '-' : '+';

        // Remove 'active' class from all other buttons
        document.querySelectorAll('.accordion_toggle_submenu').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.querySelector('span').textContent = '+';
                otherButton.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle 'active' class on the clicked button
        button.classList.toggle('active');
    });
});

// menu fixed 
window.onscroll = function() {makeMenuSticky()};

// Get the menu
var menu = document.querySelector('#main__menu');

// Get the offset position of the menu
var sticky = menu.offsetTop;

// Add the sticky class to the menu when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeMenuSticky() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("fixed");
  } else {
    menu.classList.remove("fixed");
  }
}
//===========================   sctrol to top 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
