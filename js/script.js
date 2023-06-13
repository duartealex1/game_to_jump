let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
// let personagem2 = document.querySelector('#personagem2')


function pular(){
    if(personagem.classList != 'pulo'){
        personagem.classList.add('pulo')
    }

    setTimeout(function(){
        personagem.classList.remove('pulo')
    }, 500)
}

// function poder(){
//     if(personagem2.classList != 'poder'){
//         personagem2.classList.add('poder')
//     }

//     setTimeout(function(){
//         personagem2.classList.remove('poder')
//     }, 500)
// }

let testarcolisao = setInterval( function(){
    
    let topopersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    let esquerdaquadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if(esquerdaquadrado < 20 && esquerdaquadrado > 0 && topopersonagem >=130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert(`você perdeu! Vamos tentar novamente?`)
        setTimeout(()=>{window.location.reload()}, 2000)
    }


}, 10)
