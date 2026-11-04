
/* NAVEGAÇÃO SUAVE ENTRE AS SEÇÕES */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {
            event.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});
