var result = document.getElementById('result');

var button = document.getElementById('getResult');

var data = {
    Rasse: ['Bären', 'Katzen', 'Meervolk', 'Elfen', 'Feen', 'Menschen', 'Roboter', 'Monster', 'Dämonen', 'Engel', 'Drachen', 'Zwergen', 'Hobbit', 'Ork', 'Geister', 'Zauberer', 'Vampir', 'Werwolf', 'Fisch', 'Reptil', 'Außerirdische/r', 'genetisch modifizierte/r Tier', 'Bakterien'],
    Art: ['rebelliert', 'reist', 'erkundet', 'forscht', 'flieht', 'errettet'],
    Grund: ['den König zu stürzen', 'das Fortbestehen der eigenen Rasse zu sichern', 'Reich zu werden', 'Frieden herzustellen', 'Wissen zu vermitteln', 'Magie zu lernen', 'seine Freunde zu beeindrucken', 'seine Freundin zu retten', 'die Welt zu retten', 'seinen Freunden zu helfen', 'die Welt vor dem sicheren Untergang zu bewahren', 'eine Diktatur zu stürzen', ' einen Krieg zu verhindern', 'einer Unterdrückung entgegen zu wirken', 'Völkermord zu verhindern'],
    Problem: ['eines Mordes', 'von Rache', 'von Liebe', 'von Gier', 'von Lust', 'von Völlerei', 'von Neid', 'von Wut', 'von Faulheit', 'von Dekadenz', 'von Armut', 'von Hochmut'],
    Ort: ['Wald','Schrott', 'Wasser', 'Wolken', 'Wüste', 'Insel', 'Weltraum', 'Vulkan', 'Eis', 'Unterirdisch', 'Parallelwelt', 'Himmel', 'Unterwelt'],
    Zeit: ['in der Zukunft +100', 'im Mittelalter', 'in der Steinzeit', 'während der Moderne', 'während des Barocks', 'während der Renaissance', 'während des ersten Weltkrieges', 'während des kalten Krieges', 'während des zweiten Weltkrieges', 'während des dritten Weltkrieges', 'in der nahen Zukunft', 'in der Zukunft + 50', 'in der Zukunft + 500', 'in der Zukunft + 1000', 'während des agyptisches Zeitalter', 'während des römisches Zeitalter', 'während des griechisches Zeitalter', 'während des frühen Mittelalters', 'während des späten Mittelalters'],
    Genre: ['Fantasy', 'Horror', 'Sci-Fi', 'Steampunk', 'Komödie', 'Slice of Life', 'Coming of Age', 'Romance', 'Drama', 'Thriller', 'Psychothriller', 'Historisch']
};

function getStory() {

    var Rasse = data.Rasse[randomNumBetween(data.Rasse.length)],
        Art = data.Art[randomNumBetween(data.Art.length)],
        Grund = data.Grund[randomNumBetween(data.Grund.length)],
        Problem = data.Problem[randomNumBetween(data.Problem.length)],
        Ort = data.Ort[randomNumBetween(data.Ort.length)],
        Zeit = data.Zeit[randomNumBetween(data.Zeit.length)];

    result.textContent = `"${Rasse}-Wesen ${Art} in einem ${Ort}-Setting ${Zeit} um ${Grund}."`;
}

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

