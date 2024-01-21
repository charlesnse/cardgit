document.getElementById('menu_bar').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile_menu');
    mobileMenu.classList.toggle('false');
    mobileMenu.classList.toggle('active');
});

const menuItems = document.querySelectorAll('.menu-item');
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

document.addEventListener("DOMContentLoaded", function () {
    var iso = new Isotope("#fillter-item-active", {
        itemSelector: ".isotop-item",
    });

    var filtersElem = document.querySelector(".isotop-menu-wrapper");
    var filterButtons = filtersElem.querySelectorAll(".fillter-btn");

    // Simulate a click on the "All" button by default
    filtersElem.querySelector("[data-filter='*']").classList.add("is-checked");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove "is-checked" class from all buttons and add it to the clicked button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("is-checked");
            });
            button.classList.add("is-checked");

            var filterValue = button.getAttribute("data-filter");
            iso.arrange({ filter: filterValue });
        });
    });

    // Simulate a click on the "All" button by default
    filtersElem.querySelector("[data-filter='*']").click();

});
