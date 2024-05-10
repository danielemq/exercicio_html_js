const form = document.getElementById('form-dani');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

function validaNumeros(numA, numB){
    return numB > numA;
}

form.addEventListener('submit', function(e){
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = `Válido! Número <b>${numeroB.value}</b> é maior que número <b>${numeroA.value}</b>`;
    const containerMensagemSucesso = document.querySelector('.success-message');

    formEValido = validaNumeros(numeroA.value, numeroB.value);

    if (formEValido){
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

        numeroA.style = 'none';
        numeroB.style = 'none';

        numeroA.classList.remove('error');
        numeroB.classList.remove('error');
        document.querySelector('.error-message').style.display='none';
        
    } else {
        containerMensagemSucesso.style.display = 'none';
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        numeroA.classList.add('error');
        numeroB.classList.add('error');
        document.querySelector('.error-message').style.display='block';
        
    }
})

