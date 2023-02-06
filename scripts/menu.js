

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