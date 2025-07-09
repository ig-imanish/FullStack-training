let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("password not same!");
    return;
  }
  if (password.length < 6) {
    return alert("password must not be less than 6 letters");
  }

  const text = username;
  const emojiRegex =
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g;

  const emojis = text.match(emojiRegex);
  if (emojis) {
    alert("emoji spotted");
    return;
  }

  let obj = {
    username,
    email,
    password,
    confirmPassword,
  };
  let userData = document.getElementById("userData");

 
  let h2 = document.createElement("h2").innerText = obj.username
  let p1 = document.createElement("p").innerText = obj.email
  let p2= document.createElement("p").innerText = obj.password

  userData.append(h2,p1,p2);


// document.getElementById("usernameDisplay").innerHTML = username;
  console.log(obj);
});
