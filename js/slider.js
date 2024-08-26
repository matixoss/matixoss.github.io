(function(){
    const sliders = [...document.querySelectorAll('.integrants_body')];
    const buttonNext = document.querySelector('#after');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
    changePosition(1);
    });
    buttonBefore.addEventListener('click', () => {
    changePosition(-1);
    });
    const changePosition = (add) =>{
        const currentIntegrant = document.querySelector('.integrants_body--show').dataset.id;
        value = Number(currentIntegrant);
        value +=add;
        sliders[Number(currentIntegrant)-1].classList.remove('integrants_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;

        }
        sliders[value-1].classList.add('integrants_body--show');

    }
})();