const anchors = document.querySelectorAll('.anchor');

function scrollToAnchor(e) {
    const scrollSpot = document.querySelector(`#${e.target.name}`).offsetTop;
    window.scroll({
        top: scrollSpot,
        behavior: 'smooth'
    });
}

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => scrollToAnchor(e));
});