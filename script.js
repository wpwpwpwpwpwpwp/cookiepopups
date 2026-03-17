if(document.cookie === ""){
    window.addEventListener('load', () => {
    document.querySelector('#popup').classList.add('visible');
    });
}

function clickPopup(){
    document.querySelector('#popup').classList.remove('visible');
    document.cookie = "accepted=yes"
}