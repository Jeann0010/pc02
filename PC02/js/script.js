function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar credenciales del usuario profesor
    if (username === "profesor" && password === "profesor") {
        window.location.href = "dashboard_profe.html";
        return false;
    } 
    // Verificar credenciales del usuario alumno
    else if (username === "alumno" && password === "alumno") {
        window.location.href = "dashboard.alumno.html";
        return false;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}
