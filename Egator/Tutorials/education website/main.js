window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    })
})


const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.computedStyleMap.display = "flex";
    closeBtn.computedStyleMap.display = "inline-block";
    menuBtn.computedStyleMap.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)



function searchCourses() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var courses = document.querySelectorAll(".course");

    courses.forEach(function(course) {
        var title = course.querySelector("h4");
        var txtValue = title.textContent || title.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            course.style.display = ""; // Show the course
        } else {
            course.style.display = "none"; // Hide the course
        }
    });
}


let cartItems = 0; // Initialize the cart items count

function addToCart() {
    cartItems++; // Increment the cart items count
    updateCartCount(); // Update the displayed cart count
}

function updateCartCount() {
    const cartCountElement = document.getElementById("cartCount");
    cartCountElement.innerText = cartItems.toString(); // Update the cart count display
}


















