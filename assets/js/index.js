// =============================================== User Log in script

var userButton = document.getElementById("user");
var loginMenu = document.getElementById("login");
var iconClose = document.getElementById("icon-x");


userButton.addEventListener('click', function() {
    loginMenu.classList.toggle('login-hide');
});
iconClose.addEventListener('click', function(){
    loginMenu.classList.toggle('login-hide');
});


// =============================================== Catalog script

var catalogButton = document.getElementById("catalog_button");
var catalogMenu = document.getElementById("catalog-menu");
var catalogIcon = document.getElementById("catalog-icon");

catalogButton.addEventListener('click', function(){
    catalogMenu.classList.toggle('catalog-hide');
    if (!catalogMenu.classList.contains('catalog-hide')) {
        catalogIcon.innerHTML = `<i class="bx bx-x"></i>`
    } else {
        catalogIcon.innerHTML = `<i class="bx bx-menu"></i>`
    }
});