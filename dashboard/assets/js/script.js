
const menuItems = document.querySelectorAll('.profile_bar');
const sections = document.querySelectorAll('.sections_pages');

// Initially show the "About" section and mark its menu item as active
sections[0].style.display = 'block';
menuItems[0].classList.add('active');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');

        sections.forEach(section => {
            if (section.id === target) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Update active class on menu items
        menuItems.forEach(menuItem => {
            if (menuItem === item) {
                menuItem.classList.add('active');
            } else {
                menuItem.classList.remove('active');
            }
        });

        // Close mobile menu
        const mobileMenu = document.getElementById('mobile_menu');
        mobileMenu.classList.remove('active');
    });
})

$(document).ready(function () {
    // Smooth scrolling for mobile menu links
    $('.mean-nav a').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                window.location.hash = hash;
            });
        }
    });
});


document.getElementById('menu_bar').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile_menu');
    mobileMenu.classList.toggle('false');
    mobileMenu.classList.toggle('active');
});
