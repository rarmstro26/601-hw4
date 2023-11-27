# HTML/JS FORM

### ABOUT

This is an example HTML form submission with CSS styling and JS events.

### INSTALLATION

Download and extract CS601_HW4_Armstrong which contains files needed to view the site locally.
 - *index.html*
 - *main.css*
 - *controller.js*

### SUPPORT

Ryan Armstrong rarmstro@bu.edu

---

### PROBLEMS & LEARNINGS

> Had to figure out how to get the input validations to evaluate simultaneously - had to account for block scope
as I originally had my error message declarations nested inside my if statements.

> Could have used event listeners to handle more of the validation in real-time.

---

### ABOVE & BEYOND

> Reset button that calls a clearErrors() function to reset all form data and error messaging.

> CSS styling for errors written to the DOM.

> Majority of validation handled by external JS in addition to baseline HTML validation for input fields to provide as-editing feedback.

> Placeholder text and explicit error messaging for valid values.