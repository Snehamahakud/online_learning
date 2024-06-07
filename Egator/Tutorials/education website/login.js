document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signUpForm = document.getElementById('signup');
    const signInForm = document.getElementById('signIn');
    
    signUpButton.addEventListener('click', function() {
        signInForm.classList.remove('active');
        signUpForm.classList.add('active');
    });

    signInButton.addEventListener('click', function() {
        signUpForm.classList.remove('active');
        signInForm.classList.add('active');
    });

    signInForm.classList.add('active');
});
