const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const obj = {
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:8000/api/user/login", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(obj),
    });

    console.log(obj);

    const res = await response.json();

    console.log(res);
    localStorage.setItem("token", res.token);

    if (response.status === 200) {
      Toastify({
        text: res.message,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
      }).showToast();
    }

    window.location.href =
      "http://localhost:5500/day_18-fullstack/frontend/index.html";
  } catch (error) {
    console.log(error);
  }
});
