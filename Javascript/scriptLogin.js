
function login() {// botão de enviar
    let usu = document.getElementById("usu").value;
    let senha = document.getElementById("sen").value;

    if (senha == "admin" && usu == "admin") {
        location.href = "dashboard.html"
    } else {
        alert('Incorreto, digite novamente!');
    }
}

jQuery('#sen').keypress(function(event){//botão de enviar usando "Enter"

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		login();
	}
});