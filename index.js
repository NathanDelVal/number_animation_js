document.addEventListener('DOMContentLoaded', () => {
    var numbs = document.querySelectorAll('.inc_numb');

    for (let el of numbs) {
        el.setAttribute('data-counter', 0);
        el.addEventListener('click', (e) => {
            if (el.getAttribute('data-counter') == 0) {
                let end = Number(el.innerHTML);
                let initial = end * 0.7;
                el.innerHTML = initial;
                const animation = setInterval(() => {
                    if (el.innerHTML == end) {
                        clearInterval(animation);
                    } else {
                        el.innerHTML = +el.innerHTML + 1;
                    }
                }, (2000 / (end - initial)));
                el.setAttribute('data-counter', 1);
            }
        })
    }

    for (let el of numbs) {
        let coords = el.getBoundingClientRect();
        if (coords.bottom > 0 && coords.y < window.innerHeight) {
            el.click();
        }
    }

    window.addEventListener('scroll', () => {
        for(let el of numbs) {
            let coords = el.getBoundingClientRect();
            if(coords.bottom > 0 && coords.y < window.innerHeight) {
                el.click();
            }
        }
    })
})