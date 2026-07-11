

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
function openBooking(name,spec,exp,contact,fee){

document.getElementById("bookingModal").style.display="flex";

document.getElementById("lawyerTitle").innerHTML=name;

document.getElementById("lawyerSpec").innerHTML=spec;

document.getElementById("lawyerExp").innerHTML=exp;

document.getElementById("lawyerContact").innerHTML=contact;

document.getElementById("lawyerFee").innerHTML=fee;

}

function closeBooking(){

document.getElementById("bookingModal").style.display="none";

}

function bookNow(){

let client=document.getElementById("clientName").value;

if(client==""){

alert("Please enter your name.");

return;

}

let id="LL"+Math.floor(Math.random()*100000);

alert(
"✅ Appointment Booked Successfully!\n\nAppointment ID: "
+id
);

closeBooking();

}
};

