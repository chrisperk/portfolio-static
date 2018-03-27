const anchors = document.querySelectorAll('.anchor');
const workCards = document.querySelectorAll('.work-card');

function scrollToAnchor(e) {
    const scrollSpot = document.querySelector(`#${e.target.name}`).offsetTop;
    window.scroll({
        top: scrollSpot,
        behavior: 'smooth'
    });
}

function colorPicture() {
    console.log(this, 'mouse in');
    this.querySelector('.card-pic').classList.add('color');
}

function fadePicture() {
    console.log(this, 'mouse out');    
    this.querySelector('.card-pic').classList.remove('color');  
}

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => scrollToAnchor(e));
});

workCards.forEach(card => {
    card.addEventListener('mouseover', colorPicture);
});

workCards.forEach(card => {
    card.addEventListener('mouseout', fadePicture);
});