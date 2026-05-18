// 1. Find the elements on the HTML page and save them as variables
const generateBtn = document.getElementById('generateBtn');
const genreInput = document.getElementById('genreInput');
const resultDisplay = document.getElementById('result');

// 2. Lists of random words to combine
const nouns = ["Orchestra", "Syndicate", "Cult", "Echo", "Phantoms", "Vipers", "Riot", "Theory", "Monks", "Mirage"];

// 3. Listen for the user to click the button
generateBtn.addEventListener('click', function() {
    // Get whatever word the user typed into the input field
    const userWord = genreInput.value.trim();

    if (userWord === "") {
        resultDisplay.innerText = "Please type a seed word first!";
        resultDisplay.style.color = "#f87171"; // Turn text red for error
        return;
    }

    // Pick a random noun from our array
    const randomIdx = Math.floor(Math.random() * nouns.length);
    const randomNoun = nouns[randomIdx];

    // Combine them to form a band name
    const finalBandName = `The ${userWord} ${randomNoun}`;

    // Update the HTML page instantly without reloading
    resultDisplay.innerText = finalBandName;
    resultDisplay.style.color = "#34d399"; // Reset color to green
});