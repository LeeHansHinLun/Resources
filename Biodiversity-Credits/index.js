fetch('credits.json')
    .then(response => response.json())
    .then(data => generateCredits(data));

function generateCredits(creditsData) {
    const creditsContainer = document.getElementById('credits-container');

    creditsData.forEach(credit => {
        const creditElement = document.createElement('div');
        creditElement.classList.add('credit');

        const heading = document.createElement('h3');
        heading.textContent = credit.name;

        const description = document.createElement('p');
        description.textContent = credit.description;

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