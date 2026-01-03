function validarCampos() {
    // captura dos dados //
    let nome = document.getElementById('nome').value;
    let nasc = document.getElementById('nasc').value;
    let cpf = document.getElementById('cpf').value;
    let rg = document.getElementById('rg').value;
    let sexo = document.querySelector('input[name="sex"]:checked').value;
    let ecivil = document.getElementById('ec').value;
    let email = document.getElementById('email').value;
    let cel = document.getElementById('cel').value;

    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('street').value;
    let num = document.getElementById('num').value;
    let estado = document.getElementById('uf').value;
    let cidade = document.getElementById('cdd').value;

    let idade = document.getElementById('idade').value;
    let altura = document.getElementById('alt').value;
    let peso = document.getElementById('peso').value;
    let objetivo = document.getElementById('obj').value;

    let termos = document.getElementById('trm').value


    // validação dos campos obrigatórios //

    if (!nome || !nasc || !cpf || !rg || !sexo || !ecivil || !email || !cel ||
        !cep || !rua || !num || !estado || !cidade ||
        !idade || !altura || !peso || !objetivo) {
        alert('Preencha todos os campos corretamente para continuar.');
        return false;
    }
    // validação individual //

    if (nome.length < 3) {
        alert('O nome precisa conter pelo menos 3 caracteres.');
        return false;
    }

    if (cpf.length !== 11) {
        alert('O CPF precisa conter 11 dígitos.');
        return false;
    }

    if (cel.length !== 9) {
        alert('Precisa conter, no mínimo, 9 dígitos.');
        return false;
    }

    if (cep.length !== 8) {
        alert('O CEP precisa conter 8 dígitos.');
        return false;
    }

    if (!termos) {
        alert('Aceite os termos para continuar.');
        return false;
    }

}

function limparFormulario() {
    document.querySelector('form').reset();
}

function matricular() {
    if (validarCampos()) {
        alert('Matrícula enviada com sucesso!');
        limparFormulario();
        return true;
    }

}