var menuItems = document.getElementsById("MenuItems");
menuItems.style.maxHeight = "0px";
function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px";
    }
    else
    {
        menuItems.style.maxHeight = "0px";
    }
}





