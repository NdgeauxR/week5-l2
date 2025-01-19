function findSmallest() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = parseFloat(document.getElementById("num3").value);

  var smallest = Math.min(num1, num2, num3);
  document.getElementById("smallestResult").innerHTML =
    "The smallest number is: " + smallest;
}

function checkNumber() {
  var num = parseFloat(document.getElementById("num").value);
  var result = "";

  if (num > 0) {
    result = "Positive";
  } else if (num < 0) {
    result = "Negative";
  } else {
    result = "Zero";
  }

  document.getElementById("numberResult").innerHTML =
    "The number is: " + result;
}

function checkEligibility() {
  var age = parseInt(document.getElementById("age").value);
  var result = "";

  if (age >= 18) {
    result = "You are eligible to vote.";
  } else {
    result = "You are not eligible to vote yet.";
  }

  document.getElementById("votingResult").innerHTML = result;
}
