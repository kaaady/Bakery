document.addEventListener('DOMContentLoaded', function() {
    const membersList = document.getElementById('team-list');

    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    Reorder_randomly();

});
let navbar = document.querySelector('.header .navbar');
let menu = document.querySelector('#menu-btn');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}