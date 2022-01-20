document.getElementById('clarity').onclick = function before()
{
    document.body.style.backgroundColor = '#000000';
    document.getElementsByClassName("col-5")[0].style.color ='#ffffff';
    document.getElementsByClassName("row")[1].style.color ='#ffffff';  
}
function afterr(){
    document.body.style.backgroundColor = '#ffffff';
    document.getElementsByClassName("col-5")[0].style.color ='#000000';
    document.getElementsByClassName("row")[1].style.color ='#000000'; 
}