function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

    document.querySelectorAll('.tecla');
    const listaDeTeclas = document.querySelectorAll('.tecla');
        let contador =0;
    while(contador<listaDeTeclas.length) {
        listaDeTeclas[contador].onclick = function(){
            tocaSom('#som_tecla_splash');
        };
        contador = contador+1;
        console.log(contador);
    }
    const instrumento = listaDeTeclas[contador].classList[1];
        const idAudio = `#som_${instrumento}`;
        console.log(idAudio);
    console.log(instrumento);
    listaDeTeclas[contador].onclick = function (){
        tocaSom('#som_tecla_splash');
        const tecla= listaDeTeclas[contador];
        const instrumento= tecla.classList[1];
        console.log(instrumento);
        tecla.onlick= function (){
            tocaSom(idAudio);
        }
    }

