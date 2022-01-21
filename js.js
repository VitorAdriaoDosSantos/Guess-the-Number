/*refazendo o teste mozzila*/


var numberrandow = Math.floor(Math.random() * 100) + 1
/*esse codigo faz pegar 1 numero aleatorio em 100 numeros*/

var palpites = document.querySelector(".palpites")
var ultnumber = document.querySelector(".ultpalpite")
var bxa = document.querySelector(".bxa")

var campo = document.querySelector(".campodeenvio")
var envio = document.querySelector(".enviotecla")
var section = document.querySelector(".area")
/*para adiciona o botao dentro da section*/

/*peguei os itens com input classe tem que uma esse ponto igual no CSS*/

var contagem = 1
var botaoreiniciar
/*botao reiniciar que sera criado mais tarde no element create*/

function conferir() {
    var palpiteuser = Number(campo.value)
    /*pegou o numero do campo , transformou no numero do usuario*/

    if (contagem === 1) {
        palpites.textContent = "previous guesses: "
    }

    palpites.textContent += palpiteuser + " "
    /*esse codgo faz parece os numeros digitados */

    if (palpiteuser === numberrandow) {
        ultnumber.textContent = "you win"
        ultnumber.style.backgroundColor = "green"
        bxa.textContent = "acertou... "
        fimdegame()
    }
    else if(campo.value ==""){
        alert("enter a value")
    
    }

    else if (contagem === 10) {
        ultnumber.textContent = "you lost"
        bxa.textContent = "wrong"
        fimdegame()
    }
    else {
        /*se o numero nao for o certo e contagem nao for 10 , entao o numero ta errado*/
        ultnumber.textContent = "wrong"
        ultnumber.style.backgroundColor = "red"

        /*if e else if dentro de uma else*/

        if(palpiteuser > numberrandow){
            bxa.textContent ="high guess"
        } else if (palpiteuser< numberrandow){
            bxa.textContent ="low guess"
        }
      
    }

    contagem++
    campo.value = ""
    campo.focus()
    /*o campo fica ativado como se tivesse sido clicado*/
}

envio.addEventListener("click", conferir)

function fimdegame() {
    /*referenciado la no*/
    campo.disabled = true
    envio.disabled = true
    /*desabilita os dois inputs*/

    botaoreiniciar = document.createElement("button")
    botaoreiniciar.textContent = "start new game"
    botaoreiniciar.style.padding="5px"
 
    botaoreiniciar.style.background="linear-gradient(red, yellow)"
    botaoreiniciar.style.color ="white"

    section.appendChild(botaoreiniciar)
    /*fiz o botao aparece dentro da section*/
    
    botaoreiniciar.addEventListener("click", reiniciargame)
}

function reiniciargame(){

    contagem = 1
    /*volta a contagem a 1*/

    var limpas = document.querySelectorAll(".clear p")
    /*uma div que engloba as p, incluir o p no codigo 
    quase errei pq nao coloquei all no query selector  */

    for (var i = 0 ; i < limpas.length ; i++) {
        limpas[i].textContent = '';
        /*Os colchetes especificam um valor do índice 
         à posição do valor que você deseja retornado*/
      }

      botaoreiniciar.parentNode.removeChild(botaoreiniciar)
      /* atributo para remover o botaoiniciar*/
      campo.disabled = false
      envio.disabled = false
      campo.value = ""
      campo.focus()
      /* para automaticamente colocar o cursor dentro campo de texto do <input>*/

      ultnumber.style.background=  "rgb(180, 180, 180)"

      numberrandow = Math.floor(Math.random() * 200) + 1
}