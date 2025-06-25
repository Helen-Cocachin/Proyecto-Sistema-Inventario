// ========================
// INICIO DEL CÓDIGO DE LOGIN
// ========================
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    const usuarioInput = document.getElementById("usuario").value;
    const claveInput = document.getElementById("clave").value;

    // Usuarios simulados (en vez de base de datos por ahora)
    const usuarios = [
        { id: 1, clave: "1234", nombre: "Ana Torres", usuario: "atorres" },
        { id: 2, clave: "abcd", nombre: "Carlos Pérez", usuario: "cperez" }
    ];

    const usuarioEncontrado = usuarios.find(user =>
        user.usuario === usuarioInput && user.clave === claveInput
    );

    if (usuarioEncontrado) {
        document.getElementById("login-error").textContent = "";
        alert("Bienvenido, " + usuarioEncontrado.nombre);
        // Aquí se oculta la sección de login 
     document.getElementById("login-section").style.display = "none";
    } else {
        document.getElementById("login-error").textContent = "Usuario o clave incorrectos.";
    }
});
// ========================
// FIN DEL CÓDIGO DE LOGIN
// ========================
