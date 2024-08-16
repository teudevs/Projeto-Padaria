var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}
window.revelar = ScrollReveal({reset:true})

revelar.reveal('.produtos p, .produtos h1',{
    duration: 2000,
    rotate: { x: 80, y: 0, z: 0}
})
revelar.reveal('.form-container',{
    rotate: { x: 0, y: 80, z: 0},
    duration: 3000
})