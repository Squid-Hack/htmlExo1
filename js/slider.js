// CHARGEMENT DE LA PAGE (DOM)
document.addEventListener('DOMContentLoaded',function(){

    //Ciblage
    let slidePre = document.querySelector('#arrow-pre');
    let slideNext = document.querySelector('#arrow-next');
    let slider = document.querySelector('#all-slider');
    let valTranslate =0;


        // Au click, gestion du slider suivant
        slideNext.addEventListener('click', function() {

            if (valTranslate == 5760) {
                valTranslate = 5760;
            } else {
                valTranslate += 1920;
            }

            slider.style.transform = "translateX(-"+valTranslate+"px)";


        });

        // Au click, gestion du slider précédent
        slidePre.addEventListener('click', function() {

            if (valTranslate == 0) {
                valTranslate = 0;
            } else {
                valTranslate -= 1920;
            }

            slider.style.transform = "translateX(-"+valTranslate+"px)";


        });
});