window.addEventListener('load', ()=>{
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive:[
            {
                breakpoint: 640,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
                
            },
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
                
            }
        ]
    });

})
