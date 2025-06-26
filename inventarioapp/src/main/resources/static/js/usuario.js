document.addEventListener("DOMContentLoaded", () => {
  cargarUsuarios();

  document.getElementById("formUsuario").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      contrasena: document.getElementById("contrasena").value,
      rol: document.getElementById("rol").value
    };

    fetch("http://localhost:8080/api/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario)
    })
      .then(res => {
        if (!res.ok) throw new Error("Error al agregar usuario");
        return res.json();
      })
      .then(() => {
        this.reset();
        cargarUsuarios();
      })
      .catch(error => alert("Error: " + error.message));
  });
});

function cargarUsuarios() {
  fetch("http://localhost:8080/api/usuarios")
    .then(res => res.json())
    .then(data => {
      const tabla = document.getElementById("tablaUsuarios");
      tabla.innerHTML = "";
      data.forEach(usuario => {
        const row = `
          <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.rol}</td>
          </tr>`;
        tabla.innerHTML += row;
      });
    })
    .catch(error => console.error("Error al cargar usuarios:", error));
}

