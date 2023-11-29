// Function to change the background color of an element with subdued colors
function changeBackgroundColor(element) {
    const subduedColors = [
        'hsl(0, 50%, 70%)',    // Red
        'hsl(30, 50%, 70%)',   // Orange
        'hsl(60, 50%, 70%)',   // Yellow
        'hsl(120, 50%, 70%)',  // Green
        'hsl(240, 50%, 70%)',  // Blue
        'hsl(270, 50%, 70%)',  // Indigo
        'hsl(300, 50%, 70%)'   // Violet
    ];
    const randomColor = getRandomColor(subduedColors);
    element.style.backgroundColor = randomColor;
}

// Function to generate a random color from the subdued colors set
function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Attach the click event listener to the main sections and header
document.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.getElementById('mainSection');
    const secondMainSection = document.getElementById('secondMainSection');
    const header = document.querySelector('header');

    if (mainSection) {
        mainSection.addEventListener('click', function() {
            changeBackgroundColor(mainSection);
        });
    }

    if (secondMainSection) {
        secondMainSection.addEventListener('click', function() {
            changeBackgroundColor(secondMainSection);
        });
    }

    if (header) {
        header.addEventListener('click', function() {
            changeBackgroundColor(header);
        });
    }
});