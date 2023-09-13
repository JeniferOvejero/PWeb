const entradaLogin = document.getElementById("login");
const entradaSenha = document.getElementById("senha");
const entradaBotao = document.getElementById("entrar");
const botaoMostrar = document.getElementById("showusers")

const usuarios = []
const entradaBotaoHandler = () => {
    if (entradaLogin.value === '' || entradaSenha.value === '') {
        //alert("preencha todos os campos!")
        document.getElementById("erro").setAttribute("style","display: block;")
    }else{
        usuarios.push({usuario: entradaLogin.value, senha: entradaSenha.value});
        entradaLogin.value = '';
        entradaSenha.value ='';
        document.getElementById("erro").setAttribute("style","display: none;")
    }
}
entradaBotao.addEventListener("click", entradaBotaoHandler);

botaoMostrar.addEventListener("click", () => {
    for (usuario of usuarios) {
        console.log(`Login: ${usuario.usuario} Senha: ${usuario.senha}`);
    }
    const variaveljason = JSON.stringify( usuarios);
    const usuariosdenovo = JSON.parse(variaveljason);
    console.log(variaveljason, usuariosdenovo)

})

entradaLogin.addEventListener('input', (event) => {
    // console.log(event.data);
    console.log(entradaLogin.value)
})

const pedido = async () => {
    const usuariodavez = await fetch("POST", "http://www.minhapagina.com/API");
    usuarios.push(usuariodavez);

}