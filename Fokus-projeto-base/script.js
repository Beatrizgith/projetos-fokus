const html = document.querySelector("html")
const focoBt = document.querySelector(".app__card-button--foco")
const shortBt = document.querySelector(".app__card-button--curto")
const longBt = document.querySelector(".app__card-button--longo")
const banner = document.querySelector(".app__image")
const titulo = document.querySelector(".app__title")
const botoes = document.querySelectorAll(".app__card-button")
const startPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector("#alternar-musica")
const iniciarOuPausarBt = document.querySelector("#start-pause span")
const tempoNaTela = document.querySelector('#timer')
const musica = new Audio ("sons/luna-rise-part-one.mp3")
const musicPlay = new Audio ("sons/play.wav")
const musicTempoFinalizado = new Audio ("sons/beep.mp3")
const musicPause = new Audio ("sons/pause.mp3")

let tempoDecorridoEmSegundos = 1500
let intervaloId = null
musica.loop = true

musicaFocoInput.addEventListener("change", () => {
    if(musica.paused){
        musica.play()
    } else {
        musica.pause()
    }
    
})

focoBt.addEventListener("click", () => {
        tempoDecorridoEmSegundos = 1500
         alterarContexto('foco')
         focoBt.classList.add('active')
})

shortBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300
    alterarContexto('descanso-curto')
    shortBt.classList.add("active")
})

longBt.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900
    alterarContexto('descanso-longo')
    longBt.classList.add("active")
})


function alterarContexto (contexto){
    mostrarTempo()
    botoes.forEach(function (contexto){
        contexto.classList.remove("active")
    })
    html.setAttribute("data-contexto", contexto)
    banner.setAttribute ("src", `imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`    

            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`    
    
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        musicTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
     mostrarTempo()
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        musicPause.play()
        zerar()
        return
    }
    musicPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
}

function zerar() {
    clearInterval(intervaloId) 
    iniciarOuPausarBt.textContent = "Começar"
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date (tempoDecorridoEmSegundos * 1000) 
    const tempoFormatado = tempo.toLocaleTimeString ("pt-Br", {minute: "2-digit" , second: "2-digit"})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()

//  CAPTURANDO ELEMENTOS DENTRO DO HTML COM JAVASCRIPT

// document.querySelector("html")
// document.querySelector("#timer")
// document.querySelector(".app__image")
// document.querySelector(".app__title")  

//CRIANDO VARIÁVEIS DENTRO DO JAVASCRIPT, GUARDANDO CADA ELEMENTO DENTRO DE UMA

// const html = document.querySelector("html")
// const #timer =  document.querySelector("#timer")
// const .app__image = document.querySelector(".app__image")
// const .app__title = document.querySelector(".app__title")

// CRIANDO  VARIÁVEIS DOS BOTÕES QUE VAMOS UTILIZAR

// const BtIniciar = document.querySelector()
// const focoBt = document.querySelector(".app__card-button--foco")
// const shortBt = document.querySelector(".app__card-button--curto")
// const longBt = document.querySelector(".app__card-button--longo") 

// CRIAÇÃO DE VARIÁVEIS COM O TEMPO DE CADA TIPO DE TEMPORIZADOR

// const duracaoFoco = 1500; 
// const duracaoDescansoCurto = 300; 
// const duracaoDescansoLongo = 900; 

// Adicionando e removendo estilos dos botões

// const botoes = document.querySelectorAll("app__card-button")
// function alterarContexto (contexto){
    // botoes.forEach(function (contexto){
    //    contexto.classList.remove("active")

// })     }