(function() {
    const submissionForms = document.getElementsByClassName("submission-form");
    const amountOfForms = submissionForms.length;

    if (amountOfForms > 0) {
        function verifyFields(event) {
            const form = event.target.closest("form");

            event.preventDefault();

            // Get all of the required form fields
            // Query the form fields in the order in which they appear in the form, to facilitate the addition of an eventually
            // wanted scroll animation
            let requiredFields = form.querySelectorAll('[required=""]');

            // Pick out all of the radiobuttons, as these must be handled differently
            let radiobuttonNames = [];
            let missingFields = [];
            [...requiredFields].forEach(function(field) {
                // Check if the currently iterated field is a radiobutton
                if (
                    field.tagName === "INPUT" &&
                    field.hasAttribute("type") &&
                    field.getAttribute("type") === "radio"
                ) {
                    // Push the current radiobuttons name into the raidobuttonNames to not do the following thing twice
                    const currentName = field.getAttribute("name");
                    if (radiobuttonNames.indexOf(currentName) === -1) {
                        radiobuttonNames.push(currentName);
                        // And in this case, check if any of the available options have been checked
                        if (
                            document.querySelector(
                                'input[type="radio"][name="' +
                                    currentName +
                                    '"]:checked'
                            ) === null
                        ) {
                            // If not, simply add the first radiobutton element of the group into the missingFields array
                            missingFields.push(field);
                            return;
                        }
                    }
                } else if (
                    field.tagName === "INPUT" &&
                    field.hasAttribute("type") &&
                    field.getAttribute("type") === "checkbox"
                ) {
                    // In this case, simply return the concerned checkbox
                    missingFields.push(field);
                    return;
                } else if (
                    // Treat all of the following elements in the same way, as they should all gain a highlighted border
                    // if they're missing
                    (field.tagName === "INPUT" &&
                        field.hasAttribute("type") &&
                        field.getAttribute("type") === "text") ||
                    field.getAttribute("type") === "email" ||
                    field.tagName === "SELECT" ||
                    field.tagName === "TEXTAREA"
                ) {
                    // Add a class used to highlight field as missing
                    let fieldsClass = field.classList;
                    // If the current field value is empty
                    if (field.value.trim() === "") {
                        if (!fieldsClass.contains("missing-required-field")) {
                            fieldsClass.add("missing-required-field");
                        }
                        // And in this case add the field into the field of missing fields
                        missingFields.push(field);
                        return;
                    } else {
                        if (fieldsClass.contains("missing-required-field")) {
                            fieldsClass.remove("missing-required-field");
                        }
                    }
                }
            });

            if (missingFields.length !== 0) {
                document.getElementById("required-missing-feedback").className =
                    "enable";
            } else {
                document.getElementById("required-missing-feedback").className =
                    "";
                // Form can now safely be submitted
                form.submit();
            }
        }

        document
            .querySelector('.submission-form input[type="submit"]')
            .addEventListener("click", function(event) {
                verifyFields(event);
            });
    }
    // Enabling / changing the form fields to be filled out (and thus also the form fields which
    // are required) should be followed by a refresh of the concerned highlightings with the 'reuired' stars.
    // That's why the script which controls the toggling of data fields of additional persons has been placed
    // directly within the IIFE of the radiobutton-container element's custom.js, which is where the script used
    // to highlight the required radiobutton groups with a star is defined
})();