var sidenav = document.getElementById("sidenav");
var menubtn = document.getElementById("menubtn");
var menu = document.getElementById("menu");

menubtn.onclick = function(){
    if(sidenav.style.right == "-250px"){
        sidenav.style.right = "0";
        menu.src = "Images/close.png";
        
    }
    else{
        sidenav.style.right = "-250px";
        menu.src = "Images/menu.png";
    }
}
