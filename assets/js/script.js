document.addEventListener('DOMContentLoaded', () => {
    const digimonList = document.getElementById('digimon-list');
    const digimonDetails = document.getElementById('digimon-details');

    // Consumir la API de Digimon
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            // Mostrar la lista de Digimon
            data.forEach(digimon => {
                const digimonName = digimon.name;
                const listItem = document.createElement('li');
                listItem.textContent = digimonName;
                listItem.addEventListener('click', () => {
                    // Mostrar detalles del Digimon al hacer clic en la lista
                    showDigimonDetails(digimon);
                });
                digimonList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.log('Error al cargar los datos:', error);
        });

    function showDigimonDetails(digimon) {
        digimonDetails.innerHTML = `
            <div class="digimon-card">
                <img src="${digimon.img}" alt="${digimon.name}">
                <h3>${digimon.name}</h3>
                <p>Nivel: ${digimon.level}</p>
            </div>
        `;
        digimonDetails.style.display = 'inline-flex';
    }
});
