// Snowfall Effect - Immediately create snowflakes
function createSnow() {
    const snowContainer = document.querySelector('.snow');
    snowContainer.innerHTML = ''; // Reset snowflakes each time
    for (let i = 0; i < 150; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '*';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snowflake);
    }
}

// Array of quotes from world leaders
const quotes = [
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "Injustice anywhere is a threat to justice everywhere. - Martin Luther King Jr.",
    "Do not follow where the path may lead. Go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

// Display a random quote with a fade-in effect
function displayRandomQuote() {
    const quoteContainer = document.querySelector('.quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.innerText = quotes[randomIndex];

    // Trigger the fade-in effect by adding the "visible" class
    setTimeout(() => {
        quoteContainer.classList.add("visible");
    }, 100); // Slight delay to ensure the CSS transition is applied
}

// Initialize effects on page load
function startEffects() {
    createSnow();  // Immediately create snow
    displayRandomQuote();  // Display a random quote with animation
}

startEffects(); // Start effects on page load