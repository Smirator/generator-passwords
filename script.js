let password = document.getElementById("password");

//функция генерации пароля
function createPassword(){
    let elements = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXYyZz@!?.,$&*"; //символы для пароля
    let lengthPass = 12; //длина пароля
    let fullPassword = ""; //сам пароль

    for(let i = 0; i < lengthPass; i++){
        let randomValue = Math.floor(Math.random() * elements.length);
        fullPassword += elements.substring(randomValue, randomValue + 1);
    } //проходим циклом и передаем значения
    password.value = fullPassword; // отправляем собранный пароль в поле.
}

//функция копирования
function copyPassword(){
    let passwordToCopy = document.getElementById("password");

    passwordToCopy.select();
    document.execCommand("copy");

}

