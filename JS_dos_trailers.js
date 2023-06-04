//Avatar keeper
function getSrc(img){
  var avatar = null;
  avatar = img.src;
  localStorage.setItem('avatar', avatar);
  console.log(avatar);
}

document.getElementById("avatar-icon").src= localStorage.getItem('avatar');

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const date = Date().slice(16,21);
console.log(date)
document.getElementById('horas').innerHTML = date


