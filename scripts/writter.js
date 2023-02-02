
/*document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#langs", {
      speed: 100,
      loop: true
    })
    .type('Javascript', {delay:900}).delete(10)
    .type('Php', {delay:500}).delete(3)
    .type('SQL', {delay:500}).delete(3)
    .go()
  
})*/

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#apresentacao", {  
      speed: 90,
      loop: false
    })
    .type('Olá, me chamo <span class="destaque"> Vitor</span>.', {delay:900}).break()
    .type('E sou desenvolvedor <span class="destaque"> Javascript </span>', {delay:900}).delete(11)
    .type('<span class="destaque"> PHP </span>', {delay:500}).delete(4)
    .type('<span class="destaque"> SQL </span>', {delay:500}).delete(4)
    .type('<span class="destaque"> Web</span>.', {delay:500})

    .go()
  
})
