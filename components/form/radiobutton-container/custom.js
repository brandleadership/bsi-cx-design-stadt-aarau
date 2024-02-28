(function() {
  // Function which higlights required radiobuttons fields
  function highlightRequiredRadios() {
    let radioSets = document.getElementsByClassName(
      "radiobutton-set-container"
    );
    if (radioSets.length !== 0) {
      // .map only works for arrays, not for HTML Collections, so convert to array
      [...radioSets].map(function(radioSet) {
        if (radioSet.querySelector('input[required=""]') !== null) {
          radioSet.parentNode.children[0].className =
            "required-radiobutton-field";
        }
      });
    }
  }
  // Immediately run on page load
  highlightRequiredRadios();

  let currentPersonValue = undefined;

  var radios = document.querySelectorAll(
    'input[type=radio][name="additional-persons"]'
  );
  console.log("radios", radios);
  radios.forEach((radio) =>
    radio.addEventListener("change", function() {
      currentPersonValue = radio.value;
      console.log("currentPersonValue", currentPersonValue);

      for (let i = 0; i < 7; i++) {
        let iteratedPerson = document.getElementById(
          "additional-person-" + (i + 1)
        );

        // There are max 5 additional persons, so set this to a conditional to be generically valid
        if (iteratedPerson) {
          // Toggle all the person fields to be displayed, and hide all the others
          if (i < currentPersonValue) {
            iteratedPerson.className = "additional-person toggled";

            // Set all of the concerned form fields to be required (currently only selects and inputs, as they cover all
            // text fields, radiobuttons and dropdown menus)
            [...iteratedPerson.getElementsByTagName("SELECT")]
              .concat([...iteratedPerson.getElementsByTagName("INPUT")])
              .map(function(element) {
                element.setAttribute("required", "");
              });
          } else {
            iteratedPerson.className = "additional-person";

            // Set all of the concerned form fields to not be required (currently only selects and inputs, as they cover all
            // text fields, radiobuttons and dropdown menus)
            [...iteratedPerson.getElementsByTagName("SELECT")]
              .concat([...iteratedPerson.getElementsByTagName("INPUT")])
              .map(function(element) {
                element.removeAttribute("required");
                // Additionally, make sure that we empty out all of the form fields of persons that are no longer
                // required. If the iterated element is a radiobutton, uncheck the option, and otherwise set to empty
                // value
                if (element.type === "radio") {
                  element.checked = false;
                } else {
                  element.value = "";
                }
              });
          }
        }
      }

      // end of iteration through additional person containers

      // As a next step, we should reload the function which places required highlightings on radiobutton labels, as this may changed,
      // for an optimal UX.
      highlightRequiredRadios();
    })
  );

  // Check if there's a checked radiobutton upon page load, which may occur if we switch back to edit the form in the BSI story.
  // In that case, dispatch the change event on that box
  const checkedOption = document.querySelector(
    'input[type=radio][name="additional-persons"]:checked'
  );
  if (checkedOption !== null) {
    checkedOption.dispatchEvent(new Event("change"));
  }
})();
