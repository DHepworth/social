const HOVEREFFECT = document.querySelectorAll('article');
const BLURCLASS = document.querySelector('.blur');
HOVEREFFECT.forEach(element => {
	element.addEventListener('mouseover', () => {BLURCLASS.classList.add('active')});
	element.addEventListener('mouseout', () => {BLURCLASS.classList.remove('active')});

});