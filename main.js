const keys = [...document.querySelector('.keys').children];
const sound = [...document.querySelector('.sound').children];
const handleClick = (e) => {
    sound.forEach(el => {
        if (e.target.dataset.key === el.dataset.key) {
            el.play();
        }
    })
}
for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', handleClick)
}
