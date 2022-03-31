let backgrounds = [];

backgrounds[0] = '../img/fondo1.jpg';
backgrounds[1] = '../img/fondo2.jpg';
backgrounds[2] = '../img/fondo3.jpg';
backgrounds[3] = '../img/fondo4.jpg';
backgrounds[4] = '../img/fondo5.jpg';

window.onload = ()=> {
    let setBackground = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[setBackground]})`;
}