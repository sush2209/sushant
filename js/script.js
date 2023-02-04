var element = document.getElementsByClassName("color")
const navbar = document.querySelector('.navbar');
const sush = document.querySelector('.start');
window.onscroll = () => {
if (window.scrollY > 550){
navbar.classList.add('nav-active');
sush.style.opacity=1;
for (let i = 0; i < element.length; i++) {
    element[i].style.color = "black";
}
} else {
navbar.classList.remove('nav-active');
for (let i = 0; i < element.length; i++) {
    element[i].style.color = "bisque";
}
sush.style.opacity=0;
}
};  
