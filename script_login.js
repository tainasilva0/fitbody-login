let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validarLogin();
});

function validarLogin() {
    let email = document.getElementById('email').value.trim();
    let senha = document.getElementById('senha').value.trim();

    if (email == "" || senha == "") {
        alert('Preencha todos os campos.');
        return false;
    }

    if (!validarEmail(email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }
    let emailCorreto = "usuario@seudominio.com";
    let senhaCorreta = "123456";
    
    if (email === emailCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");
        window.location.href = "../homepage/homepage.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
}

function validarEmail(email) {
    // Regex simples e eficiente para validar e-mail
    return /\S+@\S+\.\S+/.test(email);
}