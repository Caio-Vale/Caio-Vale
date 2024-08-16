
function login() {
    let usu = document.getElementById("usu").value;
    let senha = document.getElementById("sen").value;

    if (senha == "admin" && usu == "admin") {
        location.href = "dashboard.html"
    } else {
        alert('Incorreto, digite novamente!');
    }
}