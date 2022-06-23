
function checkInputs(form) {
    console.log('Hola ya estoy aqui', form.value)

    const floatingInput = document.getElementById('floatingInput');
    const floatingPassword = document.getElementById('floatingPassword');

    console.log('floatingInput', floatingInput.value)
    console.log('floatingPassword', floatingPassword.value)
    const usernameValue = form.floatingInput
    const PasswordValue = form.floatingPassword


    if (floatingInput.value == 'diego.rangel@gmail.com' &&
        floatingPassword.value == 'Sauron'
    ) {

        alert('Bienvenido ')
    } else {

        alert('Email o Password Incorrecto')

    }


}
//valores de la funcion .Trim() se puede usar para eliminar espacios en blanco
//Recomendacion de Mali, usa console.log para saber en que parte de la funcion llega.
//Validacion de correo Diego.rangel@gmail.com
//Validacion del password Sauron