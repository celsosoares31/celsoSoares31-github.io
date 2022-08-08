function alterarIcon(){
    let checkbox = document.getElementById("menuIcon");
    let Icon = document.getElementById("icon");
    let menu = document.getElementById("navbar");

   if(checkbox.checked){
        menu.style.cssText = "display: block";
        console.log(menu);
        Icon.setAttribute('src', "MeuPortifolio/icons/menu-open(2).png");
   }else{
        menu.style.cssText = "display: none";
        Icon.setAttribute('src', "MeuPortifolio/icons/menu(2).png");
   }
}

