# feb-2025-avasjcript-events-and-basic-interactivity

# Assignment Documentation

## 1. Fulfillment of Assignment Requirements

This document outlines the steps taken to fulfill the assignment requirements, which included the following:

* **Effective use of event listeners:**
    * The `darkModeToggle` button uses an event listener (`addEventListener('click', toggleDarkMode)`) to toggle between light and dark modes.  This demonstrates event handling for user interaction.
    * The `form` element uses an event listener (`addEventListener('submit', function(event) {...})`) to handle form submission. This listener prevents default form behavior, validates input, and displays a success message.
    * The `heading` element uses `mouseover` and `mouseout` event listeners to change the background color dynamically, providing a simple interactive effect.

* **Implementation of form validation:**
    * The form submission event listener includes validation logic for both the "Name" and "Email" input fields.
    * **Name Validation:** The `nameInput.value.trim() === ''` condition checks if the name field is empty after removing leading/trailing whitespace. If empty, an error message is displayed.
    * **Email Validation:**
        * The `emailInput.value.trim() === ''` condition checks for an empty email field.
        * The `isValidEmail(emailInput.value.trim())` function, using a regular expression (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), validates the email format.
    * Error messages are displayed dynamically within the `<div class="error-message">` elements next to the input fields.
    * The form submission is prevented (`event.preventDefault()`) if validation fails.

* **Addition of interactive elements:**
    * **Dark Mode Toggle:** A button (`darkModeToggle`) allows users to switch between light and dark color schemes.  The button text and icon (sun/moon) change dynamically.
    * **Dynamic Feedback Message:** Upon successful form submission, a message appears, confirming the registration. This message disappears automatically after 3 seconds.
    * **Heading Hover Effect:** The `<h2>` heading changes its background color when the user hovers the mouse over it, providing visual feedback.

## 2. How my project

The web application is a simple interactive birthday registration form with a dark mode toggle. Here's a breakdown of its functionality:

1.  **HTML Structure (`index.html`):**
    * The page consists of a heading ("Register"), a form with "Name" and "Email" input fields, a submit button, and a hidden message div for feedback.
    * A link tag connects the `styles.css` for styling, and a script tag links `script.js` for interactivity.
    * HTML entities (`&#9728;` and `&#9790;`) are used for the sun and moon icons in the dark mode toggle button.

2.  **CSS Styling (`styles.css`):**
    * The CSS provides a default light theme for the page.
    * A `.dark-mode` class is defined to apply dark theme styles (background color, text color, input field styles).
    * Styles are included for form elements, error messages, the submit button, the dark mode toggle button, and the feedback message.
    * Flexbox or Grid is used to center the main content vertically and horizontally within the body.
    * A CSS transition is used for smooth color changes when switching between light and dark modes.

3.  **JavaScript Logic (`script.js`):**
    * **DOM Element Selection:** The script selects relevant HTML elements using `document.getElementById()` and `document.querySelector()`.
    * **`toggleDarkMode()` Function:**
        * This function toggles the `dark-mode` class on the `<body>` element, applying or removing the dark theme styles.
        * It updates the text and icon of the `darkModeToggle` button to reflect the current mode.  `innerHTML` is used to correctly render the sun/moon icon HTML entities.
    * **Dark Mode Toggle Event Listener:** The `darkModeToggle` button has a click event listener that calls the `toggleDarkMode()` function.
    * **Form Submission Event Listener:**
        * The `form` element has a submit event listener that performs the following:
            * Prevents the default form submission using `event.preventDefault()`.
            * Validates the "Name" and "Email" input fields.
            * Displays error messages next to the input fields if validation fails.
            * If the form is valid:
                * Displays a success message with the entered name.
                * Removes the `hidden` class from the `messageDiv` to show the message.
                * Resets the form using `form.reset()`.
                * Uses `setTimeout()` to hide the success message after 3 seconds by adding the `hidden` class back to `messageDiv`.
    * **`isValidEmail(email)` Function:** This helper function uses a regular expression to validate the format of the email address.
    * **Heading Hover Effect:** The `<h2>` heading has `mouseover` and `mouseout` event listeners to change its background color when the user hovers over it.

