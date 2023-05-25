fetch('credits.json')
    .then(response => response.json())
    .then(data => {
        // Process the data and replace \n with <br> tags
        data.forEach(credit => {
            credit.description = credit.description.replace(/\n/g, '<br>');
        });

        // Generate the credits
        generateCredits(data);
    });

function generateCredits(creditsData) {
    const creditsContainer = document.getElementById('credits-container');

    creditsData.forEach(credit => {
        const creditElement = document.createElement('div');
        creditElement.classList.add('credit');

        const heading = document.createElement('h3');
        heading.textContent = credit.name;

        const description = document.createElement('p');
        description.innerHTML = credit.description;

        const button = document.createElement('a');
        button.classList.add('button');
        button.href = credit.url;
        button.target = '_blank';
        button.textContent = 'Visit Website';

        creditElement.appendChild(heading);
        creditElement.appendChild(description);
        creditElement.appendChild(button);

        creditsContainer.appendChild(creditElement);
    });
}

// Dark Mode (Or else my eyes would burn)
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const creditsContainer = document.getElementById('credits-container');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        creditsContainer.classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');
    });
});