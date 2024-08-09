/*
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Example validation
        if (username === 'user' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    });
});
*/




let username;

 document.getElementById("mySubmit"). onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH3").textContent = `Cilad xaga isgaarsiinta ah ayaa ku timid Server-ka. - linkiga kore taabo oo kale soodeg play store ka `
 }

 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
    }).then(function(response) {
        if (response.ok) {
            // Hide the form and show the thank you message
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('thankYouMessage').style.display = 'block';
            
            // Optionally reset the form if you want to clear the inputs
            form.reset();
        } else {
            alert('There was an error submitting the form. Please try again.');
        }
    }).catch(function(error) {
        alert('There was an error submitting the form. Please try again.');
    });
});
