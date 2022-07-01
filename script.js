function validateForm() {
  valid = true;
  var x = document.getElementById("fname").innerHTML;
  if (x == "qwerty") {
    x = "error";
    valid = false;
  }
  return valid;
}
