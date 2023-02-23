

function scroll(){
    let menu = document.querySelector('#menu')
    let scrolly = window.scrollY
    
    if(scrolly >=  40 && !menu.classList.contains('menu-white')){
        menu.classList.add('menu-white')

       // console.log('Botou')

    }else if(scrolly < 40 && menu.classList.contains('menu-white')){
        menu.classList.remove('menu-white')

        //console.log('saiu')
    }

    console.log(scrolly)
}

let menu = document.querySelector('#menu')
let icon = document.querySelector('.icon')
let nav = document.querySelector('#mobile ul')
let redes = document.querySelector('#mobile div.redes')
let links = document.querySelectorAll('#mobile a')

document.getElementById('icon').addEventListener('click', ()=>{

    
    for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', ()=>{
            menu.classList.remove('toggle-menu')
            nav.classList.add('d-none');
            nav.classList.remove('d-flex');
            redes.classList.add('d-none');
            redes.classList.remove('d-flex');
        })
    }
    if(!menu.classList.contains('toggle-menu')){
        menu.classList.add('toggle-menu')   ;     
        nav.classList.remove('d-none');
        nav.classList.add('d-flex');
        redes.classList.remove('d-none');
        redes.classList.add('d-flex');





    }else{
        menu.classList.remove('toggle-menu')
        nav.classList.add('d-none');
        nav.classList.remove('d-flex');
        redes.classList.add('d-none');
        redes.classList.remove('d-flex');
    }       
})

function resizeFixed(){
    if(window.innerWidth > 1000){
        menu.classList.remove('toggle-menu')
        nav.classList.add('d-none');
        nav.classList.remove('d-flex');
        redes.classList.add('d-none');
        redes.classList.remove('d-flex');
    }
}