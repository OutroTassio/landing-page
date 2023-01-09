const buttons = document.querySelectorAll('button');

let btn1 = 0;
let btn2 = 0;

// Função para armazenar um cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Função para ler um cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Adiciona um evento de clique a cada botão
buttons.forEach((button, index) =>{
    button.addEventListener('click', event => {
        if (event.target === button) {
            if (index == 0){
                btn1 ++
            }else{
                btn2 ++
            }
            console.log(`btn1 ${btn1} cliques`);
            console.log(`btn2 ${btn2} cliques`)
        }
        // Armazena os valores de btn1 e btn2 em cookies
        setCookie("btn1", btn1, 1);
        setCookie("btn2", btn2, 1);
        
        // Lê os valores armazenados em cookies
        var btn1Stored = getCookie("btn1");
        var btn2Stored = getCookie("btn2");
    })
})
