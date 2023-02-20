const singleUserForm = require(".");

addParticipantsButton = document.getElementById("add-button");
singleUserForm;

addParticipantsButton.addEventListener("click", function(event) {
    var test = event.target.value;
    console.log("Hello! I am the add participants button!", test)
/*     if (singleUserForm.style.display === "none") {
      singleUserForm.style.display = "block";
    } else {
      singleUserForm.style.display = "none";
    } */
});
