document.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.getElementById('mainSection');
    const secondMainSection = document.getElementById('secondMainSection');
    const thirdMainSection = document.getElementById('thirdMainSection');
    const header = document.querySelector('header');
    const linkToSecondPage = document.getElementById('linkToSecondPage');

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

    if (thirdMainSection) {
        thirdMainSection.addEventListener('click', function() {
            // Assuming you want to navigate to a different page when the thirdMainSection is clicked
            window.location.href = 'secondpage.html';
        });
    }

    if (linkToSecondPage) {
        linkToSecondPage.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link
            window.location.href = 'secondpage.html'; // Adjust the filename as needed
        });
    }

    if (header) {
        header.addEventListener('click', function() {
            changeBackgroundColor(header);
        });
    }
});
