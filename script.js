// getting DOM elements and storing in variables
const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageDiv = document.getElementById('message');

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode'); // declares boolean depending on //if the body has classList called 'dark-mode'
    darkModeToggle.innerHTML = isDarkMode ? '&#9790; Dark Mode' : '&#9728; Light Mode'; // cahnge icons on button depending on if we are in darkmode or light mode
}

// Helper function for basic email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission so we can validate it first
    let isValid = true; // a changeable boolean variable to hold if form is valid or not

    // Basic name validation
    if (nameInput.value.trim() === '') {
        //.trim() removes white spaces, so that white space is not counted as value and submission accepted
        nameError.textContent = 'Name is required.'; //add text to empty error div
        isValid = false; // sets form to invalid
    } else {
        nameError.textContent = ''; //leaves name error div empty when the form is valid
    }

    // Basic email validation
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    //submitting form conditionally
    if (isValid) {
        // If the form is valid, display a success message
        const submittedName = nameInput.value.trim();
        messageDiv.textContent = `${submittedName} you have been registered successfully. See you there 🥳🥳🥳`;
        messageDiv.classList.remove('hidden'); // enable the feedback div message to display feedback
        form.reset(); // Clear the form

        // Set a timeout to hide the message after 3 seconds (3000 milliseconds)
        setTimeout(function() {
            messageDiv.classList.add('hidden');
        }, 3000);
    } else {
        messageDiv.classList.add('hidden'); // Ensure success message is hidden if there are errors
    }
});


// Interactive element: Changing background on mouseover
const heading = document.querySelector('h2');
heading.addEventListener('mouseover', function() {
    heading.style.backgroundColor = '#f0f0f0';
    heading.style.cursor = 'pointer';
});

heading.addEventListener('mouseout', function() {
    heading.style.backgroundColor = '';
    heading.style.cursor = 'default';
});