const navbar = document.getElementById('navbar')

function toggleFunction() {
    navbar.classList.toggle('visible')
}

var modal = document.getElementById('topnav')
var span = document.getElementsByClassName('close')[0]
span.onclick = function() {
    modal.style.display = 'none'
}

function reveal() {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active')
        } else {
            reveals[i].classList.remove('active')
        }
    }
    
}
window.addEventListener('scroll', reveal)
//reveal()

