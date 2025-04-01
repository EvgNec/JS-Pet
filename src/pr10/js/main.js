// const fs = require('fs');

// try {
//     const jsonString = fs.readFileSync("../cards.json", 'utf8');
//     const data = JSON.parse(jsonString);
//     console.log(data);
// } catch (err) {
//     console.error('Помилка:', err);
// }

// import data from '../cards.json' assert { type: 'json' };
// console.log(data);
const jsonString=[
    {
        "id": 1,
        "word_en": "want",
        "word_ru": "хочу",
        "word_uk": "бажаю",
        "word_pr": "querer",
        "word_pr_face": {
            "Eu": "quero",
            "Tu": "queres",
            "Ele": "quer",
            "Nos": "queremos",
            "EEles": "querem"
        }
    },
    {
        "id": 2,
        "word_en": "can",
        "word_ru": "хочу",
        "word_uk": "бажаю",
        "word_pr": "poder",
        "word_pr_face": {
            "Eu": "posso",
            "Tu": "podes",
            "Ele": "pode",
            "Nos": "podemos",
            "EEles": "podem"
        }
    }
];

// const data = JSON.stringify(jsonString);
// console.log(data);


// const jsonString2 = '[{"id": 1, "name": "John"}, {"id": 2, "name": "Alice"}, {"id": 3, "name": "Bob"}]';

// const data2 = JSON.parse(jsonString2);
// console.log(data2); // Виведе масив об'єктів
// console.log(data2[0].name); // "John"

fetch("../cards.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById('word').textContent = data.word_en;
                document.getElementById('definition').textContent = "Definition: " + data.word_ru;
                document.getElementById('example').textContent = "Example: " + data.word_uk;
                document.getElementById('synonyms').textContent = "Synonyms: " + data.word_pr;
            })
            .catch(error => console.error('Помилка завантаження JSON:', error));



  
  
  
