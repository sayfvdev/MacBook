const img = document.querySelector('.img');
const btns = document.querySelectorAll('button[data-color]');
const pictures = {
    natural: "./silver-select.png",
    titanium: "./grey.png",
};

btns.forEach((btn) => {
    btn.onclick = () => {
        img.style.backgroundImage = `url(${pictures[btn.getAttribute('data-color')]})`;
        btns.forEach((b) => b.style.backgroundColor = '#CFE7FF');
        btn.style.backgroundColor = '#0071E3';
    };
});

