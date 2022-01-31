var links = document.getElementById("clarity");
var first_click = true;
links.onclick = function() {
    if (first_click) {
        document.body.style.backgroundColor = '#000000';
        document.getElementsByClassName("col-5")[0].style.color ='#ffffff';
        document.getElementsByClassName("row")[1].style.color ='#ffffff'; 
        first_click = false;
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.getElementsByClassName("col-5")[0].style.color ='#000000';
        document.getElementsByClassName("row")[1].style.color ='#000000';
        first_click = true;
    }
}

document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  document.getElementById("myB421").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("myDropdo421").classList.toggle("sh421");
  }