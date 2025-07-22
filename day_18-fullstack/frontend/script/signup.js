let form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let phoneNumber = document.getElementById("phonenumber").value;
  let age = document.getElementById("age").value;

  if (password.length < 6) {
    return alert("password must not be less than 6 letters");
  }

  let obj = {
    name,
    email,
    password,
    phoneNumber,
    age,
  };

  try {
    const response = await fetch("http://localhost:8000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const res = await response.json();
    console.log(res);
  if( response.status === 200) {
      Toastify({
        text: res.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while processing your request.");
    return;
  }
});
