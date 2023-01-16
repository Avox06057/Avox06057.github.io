function showLogo() {
    document.getElementById('logo').style.opacity = '1';
  }

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      document.getElementById('logo').style.opacity = '0';
      
    } 
    else {
        document.getElementById('logo').style.opacity = '1';

    }
});