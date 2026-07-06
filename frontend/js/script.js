

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();


    window.location.href = "home.html";
});
window.onload = function(){

    let form = document.getElementById("loginForm");

    if(form){

        form.onsubmit = function(e){

            e.preventDefault();

            let name = document.getElementById("name").value;

            localStorage.setItem("userName", name);

            window.location.href = "home.html";

            return false;
        };
    }
};

