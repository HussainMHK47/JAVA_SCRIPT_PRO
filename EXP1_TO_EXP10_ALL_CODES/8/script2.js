document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("fullName").value.trim();
  let sex = document.querySelector('input[name="sex"]:checked');
  let eyeColor = document.getElementById("eyeColor").value;
  let ability = document.getElementById("ability").value.trim();

  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (!sex) {
    alert("Please select your sex.");
    return;
  }

  if (eyeColor === "") {
    alert("Please select your eye color.");
    return;
  }

  if (ability === "") {
    alert("Please describe your athletic ability.");
    return;
  }

  alert("Form submitted successfully!");
  this.submit();
});