var links = document.getElementById("clarity");
var first_click = true;
links.onclick = function() {
    if (first_click) {
        document.body.style.backgroundColor = '#000000';
        // document.span.style.backgroundColor = '#000000';
        document.getElementsByClassName("col-5","row","col")[0].style.color ='#ffffff';
        document.getElementById("j","p","h","c").style.color = '#ffffff'
        document.getElementById("j").style.color ='#ffffff';
        document.getElementById("p").style.color ='#ffffff';
        document.getElementById("h").style.color ='#ffffff';
        document.getElementById("c").style.color ='#ffffff';
        first_click = false;
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.getElementsByClassName("col-5","row")[0].style.color ='#000000';
        document.getElementById("j").style.color ='#000000';
        document.getElementById("p").style.color ='#000000';
        document.getElementById("h").style.color ='#000000';
        document.getElementById("c").style.color ='#000000';
        first_click = true;
    }
}


var links = document.getElementById("GamingMode");  //animation-name
var first_click = true;
links.onclick = function() {
    if (first_click) {
        document.getElementsByClassName("col-5","row")[0].style.animationName = 'a';
        document.getElementById("j").style.animationName =  'a';
        document.getElementById("p").style.animationName =  'a';
        document.getElementById("h").style.animationName =  'a';
        document.getElementById("c").style.animationName =  'a';

        first_click = false;
    } else {
        document.getElementsByClassName("col-5","row")[0].style.animationName =  'example';
        document.getElementById("j").style.animationName =  'example';
        document.getElementById("p").style.animationName =  'example';
        document.getElementById("h").style.animationName =  'example';
        document.getElementById("c").style.animationName =  'example';

        first_click = true;
    }
}

var links = document.getElementById("globe");
var first_click = true;
links.onclick = function() {
    if (first_click) {
        document.getElementById("title").innerText = 'Welcome to my portfolio!';
        document.getElementById("Iam").innerText = 'My name is Nathan Lior Dahan, I am 16 years old from Jerusalem. I study at Teddy Kollek School, and learn another programming language (python). Link to my github';
        document.getElementById("a").innerText = 'My github!';
        first_click = false;
    } else {
        document.getElementById("title").innerText = '!ברוכים הבאים לפורטפוליו שלי';
        document.getElementById("Iam").innerText = 'שמי הוא נתן ליאור דהן, אני בן 16 מירושלים. אני לומד בבית ספר טדי קולק, ולומד שפת תכנות נוספת (python). קישור ל- githubשלי';
        document.getElementById("a").innerText = 'שלי github ל';
        first_click = true;
    }
}



document.getElementById("myBtn").onmouseover = function() {myFunction()};
document.getElementById("myBtn").onmouseout = function() {myFunction()};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }