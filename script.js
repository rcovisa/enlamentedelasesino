const palabra = document.getElementById('palabra');
const texto = "En la mente";
palabra.addEventListener('click', () => {
        window.location.href = 'menu.html'; // Reemplaza con la URL de tu otra página
    });



texto.split('').forEach(letra => {
    const span = document.createElement('span');
    span.textContent = letra;
    span.className = 'letra';
    
    span.addEventListener('mouseenter', () => {
        const pesoAleatorio = Math.floor(Math.random() * (600 - 100 + 1)) + 100;
        span.style.fontWeight = pesoAleatorio;
    });

    span.addEventListener('mouseleave', () => {
        span.style.fontWeight = '700';
    });

    palabra.appendChild(span);
});