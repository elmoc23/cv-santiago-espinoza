const habilidades = document.querySelectorAll(".habilidad");

habilidades.forEach(habilidad => {

    const barra = habilidad.querySelector(".nivel");
    const porcentaje = habilidad.querySelector(".porcentaje");

    const nivelFinal = Number(habilidad.dataset.nivel);

    let progreso = 0;
    let intervalo = null;

    habilidad.addEventListener("mouseenter", () => {

        clearInterval(intervalo);

        progreso = 0;

        barra.style.width = "0%";
        porcentaje.textContent = "0%";
        porcentaje.style.opacity = "1";

        intervalo = setInterval(() => {

            if (progreso >= nivelFinal) {
                clearInterval(intervalo);
                return;
            }

            progreso++;

            barra.style.width = progreso + "%";
            porcentaje.textContent = progreso + "%";

        }, 20);
    });


    habilidad.addEventListener("mouseleave", () => {

        clearInterval(intervalo);

        progreso = 0;

        barra.style.width = "0%";
        porcentaje.textContent = "";
        porcentaje.style.opacity = "0";
    });

});