document.addEventListener('DOMContentLoaded', () => {
	const get_numbs = new Promise((resolve, reject) => {
		let regex = /[0-9]+/g;
		try {
			document.querySelectorAll('.your_class').forEach((el) => {
				let match = el.innerText.match(regex);
				let new_str = el.innerText.replace(regex, `<span class='inc_numb'>${match}</span>`);
				el.innerHTML = new_str;
			})
			resolve(document.querySelectorAll('.inc_numb'));
		} catch (error) {
			reject('your error message');
		}
	}).then((result) => {
		result.forEach((el) => {
			el.setAttribute('data-counter', 0);
			el.addEventListener('click', (e) => {
				if (el.getAttribute('data-counter') == 0) {
					let end = Number(el.innerHTML);
					let initial;
					if (Math.floor(end * 0.7) >= 500) {
						initial = end - 500;
					} else {
						initial = Math.floor(end * 0.7);
					}
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
		})
		result.forEach((el) => {
			let coords = el.getBoundingClientRect();
			if (coords.bottom > 0 && coords.y < window.innerHeight) {
				el.click();
			}
		})
		window.addEventListener('scroll', () => {
			result.forEach((el) => {
				let coords = el.getBoundingClientRect();
				if (coords.bottom > 0 && coords.y < window.innerHeight) {
					el.click();
				}
			})
		})
	}).catch((err) => {
		console.log(err);
	});
})