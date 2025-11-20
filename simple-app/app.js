function addNumbers() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").innerHTML = "Please enter numbers!";
    return;
  }

  document.getElementById("result").innerHTML = `Result: ${a + b}`;
}
