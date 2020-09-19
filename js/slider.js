// CHARGEMENT DE LA PAGE (DOM)
document.addEventListener('DOMContentLoaded',function(){

    //Ciblage
    let dateSlidePre = document.querySelector('#date-slide-pre');
    let dateSlideNext = document.querySelector('#date-slide-next');
    let moisSlider = document.querySelector('#all-mois-slider');
    let valTranslate =0;

        // Au click, gestion du mois suivant
        dateSlideNext.addEventListener('click', function() {

            if(window.screen.width >1200){

                // version taille ordinateur
                if (valTranslate == 1760) {
                    valTranslate = 1760;
                } else {
                    valTranslate += 440;
                }

                moisSlider.style.transform = "translateX(-"+valTranslate+"px)";

            }else{

                // version taille smartphone
                if (valTranslate == 1900) {
                    valTranslate = 1900;
                } else {
                    valTranslate += 380;
                }

                moisSlider.style.transform = "translateX(-"+valTranslate+"px)";
            }

        });


        // Au click, gestion du mois précédent
        dateSlidePre.addEventListener('click', function() {

            if(window.screen.width >1200){

                if (valTranslate == 0) {
                    valTranslate = 0;
                } else {
                    valTranslate -= 440;
                }
    
                moisSlider.style.transform = "translateX(-"+valTranslate+"px)";
            }else{

                if (valTranslate == 0) {
                    valTranslate = 0;
                } else {
                    valTranslate -= 380;
                }

                moisSlider.style.transform = "translateX(-"+valTranslate+"px)";

            }

        });

});