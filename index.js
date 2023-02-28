window.addEventListener('load', () => {
    numberAnimation(0, 30, 3);
});

function numberAnimation(initial, end, duration) {
    document.querySelector('#counter').innerText = initial;
    let counter = initial;
    const animation = setInterval(() => {
        if(counter == end) {
            clearInterval(animation);
        } else {
            document.querySelector('#counter').innerHTML = +document.querySelector('#counter').innerText + 1;
            counter += 1;
        }
    }, (duration * 1000 / (end - initial)));
}