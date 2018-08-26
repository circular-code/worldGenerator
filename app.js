var result = document.getElementById('result');

var button = document.getElementById('getResult');

var data = {
    Geschlecht: ['Mann', 'Frau', 'Neutrum'],
    Rasse: ['Bären', 'Katzen', 'Meervolk', 'Elfen', 'Feen', 'Menschen', 'Roboter', 'Monster', 'Dämonen', 'Engel', 'Drachen', 'Zwerge', 'Hobbit', 'Orks', 'Geister', 'Zauberer', 'Vampire', 'Werwöfe', 'Fische', 'Reptilien', 'Außerirdische', 'Tiefseewesen', 'genetisch modifizierte Tiere', 'Bakterien'],
    Art: ['Rebellion', 'Reise', 'Erkundung', 'Forrschung', 'Flucht', 'Rettung', 'Mission'],
    Grund: ['Diktatur', 'Krieg', 'Unterdrückung', 'Völkermord', 'Mord', 'Rache', 'Liebe', 'Gier', 'Lust', 'Völlerei', 'Neid', 'Wut', 'Faulheit', 'Dekadenz', 'Armut', 'Hochmut'],
    Ort: ['Wald','Schrott', 'Asien', 'Wasser', 'Wolken', 'Wüste', 'Insel', 'Weltraum', 'Vulkan', 'Eis', 'Unterirdisch', 'Schweden', 'England', 'Parallelwelt', 'Himmel', 'Unterwelt'],
    Zeit: ['Zukunft +100', 'Mittelalter', 'Steinzeit', 'Moderne', 'Barock', 'Renaissance', 'erster Weltkrieg', 'kalter Krieg', 'zweiter Weltkrieg', 'dritter Weltkrieg', 'Zukunft + 10', 'Zukunft + 50', 'Zukunft + 500', 'Zukunft + 1000', 'agyptisches Zeitalter', 'römisches Zeitalter', 'griechisches Zeitalter', 'frühes Mittelalter', 'spätes Mittelalter'],
    Genre: ['Fantasy', 'Horror', 'Sci-Fi', 'Steampunk', 'Komödie', 'Slice of Life', 'Coming of Age', 'Romance', 'Drama', 'Thriller', 'Psychothriller', 'Historisch']
}

function getStory() {

    var Geschlecht = data.Geschlecht[randomNumBetween(data.Geschlecht.length)],
        Rasse = data.Rasse[randomNumBetween(data.Rasse.length)],
        Art = data.Art[randomNumBetween(data.Art.length)],
        Grund = data.Grund[randomNumBetween(data.Grund.length)],
        Ort = data.Ort[randomNumBetween(data.Ort.length)],
        Zeit = data.Zeit[randomNumBetween(data.Zeit.length)],
        Genre = data.Genre[randomNumBetween(data.Genre.length)];

    result.textContent = `${Rasse} ${Geschlecht} macht ${Art} wegen ${Grund} in/auf ${Ort} in ${Zeit} im ${Genre} Genre.`;
};

button.addEventListener('click', getStory);

function randomNumBetween (max, min) {
    if (typeof max === 'undefined'){
        console.log('max undefined');
        return false;
    }
    if (typeof min === 'undefined'){
        min = 0;
    }
    return Math.floor(Math.random()*(max-min)+min);
}

