const BASE_URL = "http://localhost:3000";
const handleLogin = () => {
  // Get username and password values from your form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember-me").checked;

  // Send a POST request to the /login route
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Save the token to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("current_username", data.fullname);
        if (remember) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
        }else{
          localStorage.removeItem("username");
          localStorage.removeItem("password");
        }
        // render to dashboard
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
export default handleLogin;
