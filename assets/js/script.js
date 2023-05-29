document.addEventListener('DOMContentLoaded', () => {
    const digimonTable = document.getElementById('digimon-table');
    const digimonDetails = document.getElementById('digimon-details');
    const digimonImage = document.getElementById('digimon-image');
    const digimonName = document.getElementById('digimon-name');
    const digimonLevel = document.getElementById('digimon-level');
    const flipButton = document.createElement('button');
    const scaleButton = document.createElement('button');
    const skewButton = document.createElement('button');
    const errorMessage = document.getElementById('error-message');
    const mainContainer = document.getElementById('main_container');




    // Comprobar el tamaño de la pantalla cuando se carga la página y cuando se cambia su tamaño
    checkWindowSize();
    window.addEventListener('resize', handleResize);



    // Consumir la API de Digimon
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            // Mostrar los Digimon en la tabla
            const tableBody = digimonTable.querySelector('tbody');
            data.forEach(digimon => {
                const digimonName = digimon.name;
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                nameCell.textContent = digimonName;
                row.appendChild(nameCell);
                tableBody.appendChild(row);





                // evento de click al nombre del Digimon
                nameCell.addEventListener('click', () => {
                    showDigimonDetails(digimon);
                });

                // evento girar mousedown
                flipButton.addEventListener('mousedown', () => {
                    flip();
                });

                // evento girar mouseup reverso
                flipButton.addEventListener('mouseup', () => {
                    flipReverse();
                });

                //evento escalar
                scaleButton.addEventListener('mousedown', () => {
                    scale();
                });

                //evento escalar reverso
                scaleButton.addEventListener('mouseup', () => {
                    scaleReverse();
                });

                //evento Skew
                skewButton.addEventListener('mousedown', () => {
                    skew();

                })

                //evento Skew reverse
                skewButton.addEventListener('mouseup', () => {
                    skewReverse();

                })



            });
        })
        .catch(error => {
            console.log('Error al cargar los datos:', error);
        });

    function showDigimonDetails(digimon) {
        digimonDetails.style.display = 'block';
        digimonImage.src = digimon.img;
        digimonName.textContent = digimon.name;
        digimonLevel.textContent = 'Nivel: ' + digimon.level;
        flipButton.textContent = 'GIRAR';
        flipButton.classList.add('btn', 'btn-success', 'btn-lg');
        digimonDetails.appendChild(flipButton);
        scaleButton.textContent = 'ZOOM'
        scaleButton.classList.add('btn', 'btn-warning', 'btn-lg')
        digimonDetails.appendChild(scaleButton);
        skewButton.textContent = 'SKEW';
        skewButton.classList.add('btn', 'btn-danger', 'btn-lg')
        digimonDetails.appendChild(skewButton);
        digimonDetails.style.border = ('solid 2px black');

    }

    function flip() {
        digimonImage.style.transform = 'rotate(360deg)';
        digimonImage.style.transitionDuration = '0.5s'
    }

    function flipReverse() {
        digimonImage.style.transform = 'rotate(0deg)';
        digimonImage.style.transitionDuration = '0.5s'
    }

    function scale() {
        digimonImage.style.transform = 'scale(1.3)';
        digimonImage.style.transitionDuration = '0.5s';

    }

    function scaleReverse() {
        digimonImage.style.transform = 'scale(1)';
        digimonImage.style.transitionDuration = '0.5s';

    }

    function skew() {
        digimonImage.style.transform = 'skew(30deg, 0)';

    }

    function skewReverse() {
        digimonImage.style.transform = 'skew(0, 0)';
    }

    function checkWindowSize() {
        if (window.innerWidth < 770) {
            errorMessage.style.display = 'block'; // Mostrar el mensaje de error
            mainContainer.style.display = 'none'; //Ocultar ventana principal
        } else {
            errorMessage.style.display = 'none'; // Ocultar el mensaje de error
            mainContainer.style.display = 'flexbox'; //Mostrar ventana principal
        }
    }

    function handleResize() {
        if (window.innerWidth < 770) {
            if (errorMessage.style.display !== 'block') {
                errorMessage.style.display = 'flex'; // Mostrar el mensaje de error si no está visible
                mainContainer.style.display = "none";
            }
        } else {
            if (errorMessage.style.display !== 'none') {
                errorMessage.style.display = 'none'; // Ocultar el mensaje de error si no está oculto
                mainContainer.style.display = 'flex';
            }
        }
    }




});
