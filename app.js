const botao = document.getElementById("botao")
const conteudo = document.getElementById("conteudo")
const login = document.getElementById("login")
let usuario = document.getElementById("usuario")

window.addEventListener("load", () => {
    let darkMode = localStorage.getItem("darkMode")

    if (darkMode == "ativado") {
        ativarDarkMode();
    } else {
        desativarDarkMode();
    }

    let user = localStorage.getItem("usuario")
    usuario.innerHTML = user
    
})

botao.addEventListener("click", () => {
    
    let darkMode = localStorage.getItem("darkMode")
    if (darkMode == "ativado") {
        desativarDarkMode()
    }else {
        ativarDarkMode()
    }

})

function ativarDarkMode(){
    localStorage.setItem("darkMode", "ativado")
    conteudo.classList.remove("white-mode")
    conteudo.classList.add("dark-mode")
}

function desativarDarkMode(){
    localStorage.setItem("darkMode", "desativado")
    conteudo.classList.remove("dark-mode")
    conteudo.classList.add("white-mode")
}

login.addEventListener("click", () => {
    let user = prompt("Usuário")
    localStorage.setItem("usuario", user)
    usuario.innerHTML = user
})
