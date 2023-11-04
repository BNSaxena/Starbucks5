const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('darmode')
    document.getElementById('coupon').style.opacity = '1'


}

function onloadPage(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('contcoupon1').style.opacity = '0.7'
}

function CloseCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('contcoupon1').style.opacity = '1'
}
