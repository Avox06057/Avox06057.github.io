/*Navigation Bar*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeDropdown() {
    document.getElementById("myDropdown").style.display = "none";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

/*Contact Page*/
function openContactForm() {
    document.getElementById("contactForm").style.width = "100%";
}
function closeContactForm() {
    document.getElementById("contactForm").style.width = "0";
}

/*About Page*/
function openAbout() {
    document.getElementById("aboutPage").style.width = '100%';
}
function closeAbout() {
    document.getElementById('aboutPage').style.width = '0';
}
