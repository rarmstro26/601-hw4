
// Define regex pattern for alpha only input for all characters
const nameAlphaRegex = /^[A-Za-z]+$/;

// Define regex pattern for defined instructor names
const facilitatorRegex = /^(Jen|Behdad|Chris|Christian|Josh)$/i;

function validateForm() {
    // Set initial status to true and evaluate if any invalid conditions exist
    let isValid = true;

    // Access fields that we will be validating
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let facilitatorName = document.getElementById("facilitator");

    // Declare error variables outside of block scope to allow simultaneous evaluation
    let firstNameError = document.getElementById("first-name-error");
    let lastNameError = document.getElementById("last-name-error");
    let facilitatorError = document.getElementById("facilitator-error");

    if (firstName.value.length < 2 || !testNameAlphaRegex(firstName.value)) {
        // Access error div for firstName from DOM and store
        // let firstNameError = document.getElementById("first-name-error");
        // Set error text for the error div
        firstNameError.textContent = "Please enter a minimum of 2 characters and only alpha characters a-z";
        // Return cursor focus to the field to address
        firstName.focus();
        // Return 'not valid'
        isValid = false;
    } else {
        // Clear prev error message if now valid
        firstNameError.textContent = "";
    }
    if (lastName.value.length < 2 || !testNameAlphaRegex(lastName.value)) {
        // let lastNameError = document.getElementById("last-name-error");
        lastNameError.textContent = "Please enter a minimum of 2 characters and only alpha characters a-z";
        lastName.focus();
        isValid = false;
    } else {
        // Clear prev error message if now valid
        lastNameError.textContent = "";
    }
    if (!testFacilitatorIsValid(facilitatorName.value)) {
        // let facilitatorError = document.getElementById("facilitator-error");
        facilitatorError.textContent = "Please enter a valid name (Jen, Behdad, Chris, Christian, Josh)";
        facilitatorName.focus();
        isValid = false;
    } else {
        // Clear prev error message if now valid
        facilitatorError.textContent = "";
    }
    return isValid;
}

// Function to test alpha regex pattern for first/last name fields
function testNameAlphaRegex(name) {
    // Run regex test against first/last name field passed when calling function - return t/f
    return nameAlphaRegex.test(name)
}

// Function to test facilitator regex pattern - name passed from validateForm()
function testFacilitatorIsValid(name) {
    // Run regex test against instructor 'name' passed when calling function - return t/f
    return facilitatorRegex.test(name);
}

// Create a 'clear-error' function tied to 'clear form' button to fully reset form
function clearErrors() {
    document.getElementById("first-name-error").textContent = "";
    document.getElementById("last-name-error").textContent = "";
    document.getElementById("facilitator-error").textContent = "";
}