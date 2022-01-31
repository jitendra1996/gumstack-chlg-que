const dropdownLi = document.getElementById("drop");
const dropdown = document.getElementById('dropdown');

dropdown.style.display = "none";

dropdownLi.addEventListener('click',e=>{
    if(dropdown.style.display === "block"){
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "block";
    }
});


const webNav = document.getElementById('webNav');
const mboNav = document.getElementById('moboNav');

