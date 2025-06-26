document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    correo: document.getElementById("correo").value,
    contrasena: document.getElementById("contrasena").value
  };

  fetch("http://localhost:8080/api/usuarios/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) throw new Error("Login incorrecto");
      return response.json();
    })
    .then(usuario => {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      document.getElementById("error").style.display = "block";
    });
});
