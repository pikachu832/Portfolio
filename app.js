// let col5 = document.getElementsByClassName("col-5")[0];
// let row = document.getElementsByClassName("row")[1];  

document.getElementById('clarity').onclick = function (){
    if(document.body.style.backgroundColor = 'rgb(255, 255, 255);')
    {
    document.body.style.backgroundColor = '#000000';
    document.getElementsByClassName("col-5")[0].style.color ='#ffffff';
    document.getElementsByClassName("row")[1].style.color ='#ffffff';  
    }
    else(document.body.style.backgroundColor = '#000000')
    {
    document.body.style.backgroundColor = '#ffffff';
    document.getElementsByClassName("col-5")[0].style.color ='#000000';
    document.getElementsByClassName("row")[1].style.color ='#000000'; 
    }
}



// document.getElementById('clarity').onclick = function ()
// {
//     document.body.style.backgroundColor = '#000000';
//     document.getElementsByClassName("col-5")[0].style.color ='#ffffff';
//     document.getElementsByClassName("row")[1].style.color ='#ffffff';  
// }
// function (){
//     document.body.style.backgroundColor = '#ffffff';
//     document.getElementsByClassName("col-5")[0].style.color ='#000000';
//     document.getElementsByClassName("row")[1].style.color ='#000000'; 
// }