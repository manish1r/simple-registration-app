function register() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (!name || !email || !phone) {
    alert("Please fill all fields!");
    return;
  }

  document.getElementById("result").innerHTML =
    `<b>Registration Successful!</b><br>
     Name: ${name}<br>
     Email: ${email}<br>
     Phone: ${phone}`;
}
