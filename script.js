const texto = "¿Te interesa conocer más sobre mi perfil profesional? No dudes en contactarme.";

const elemento = document.getElementById("texto-contacto");

let iniciado = false;

const observador = new IntersectionObserver((entradas) => {

    if (entradas[0].isIntersecting && !iniciado) {

        iniciado = true;

        let i = 0;

        const escribir = setInterval(() => {

            elemento.textContent += texto.charAt(i);
            i++;

            if (i >= texto.length) {
                clearInterval(escribir);
            }

        }, 50);
    }

}, {
    threshold: 0.5
});

observador.observe(elemento);