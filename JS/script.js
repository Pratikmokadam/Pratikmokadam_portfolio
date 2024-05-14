const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 40);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

// let downloadBtn = document.getElementById('downloadBtn');
// downloadBtn.addEventListener("click",function (){
//   alert ("Resume file has been downloaded successfully");
// });


// let downloadBtn = document.querySelector('#downloadBtn');

// downloadBtn.onclick = () => {
//     alert ("Resume file has been downloaded successfully");
// }

// let submitBtn = document.querySelector('#submitBtn');

// submitBtn.onclick = () => {
//     alert ("Your message has been sent successfully");
// }

