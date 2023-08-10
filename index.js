
// Sample plant data with images
const plants = [
    { 
        name: 'Snake Plant',
        category: 'indoor',
        description: 'Easy-care indoor plant.',
        image: 'snake_plant.jpg'
    },
    { 
        name: 'Rose',
        category: 'outdoor',
        description: 'Classic flowering shrub.',
        image: 'rose.jpg'
    },
    // Add more plant data here
];

const categoryButtons = document.querySelectorAll('.category-button');
const searchInput = document.getElementById('search-input');
const plantList = document.querySelector('.plant-list');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        displayPlants(category);
    });
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPlants = plants.filter(plant => 
        plant.name.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants);
});

function displayPlants(plantsToDisplay) {
    plantList.innerHTML = '';

    plantsToDisplay.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');
        plantCard.innerHTML = `
            <h2>${plant.name}</h2>
            <img src="${plant.image}" alt="${plant.name}" class="plant-image">
            <p>${plant.description}</p>
        `;
        plantList.appendChild(plantCard);
    });
}

// Initial display of all plants
displayPlants(plants);
