window.addEventListener('load', grabSearch);

const form = document.querySelector('form')
form.addEventListener('submit', grabSearch)

let searchTerm = window.location.search
var newWord = searchTerm.slice(searchTerm.search('=')+1)
document.querySelector('#searchbox').value = newWord;


function grabSearch(e) {
    e.preventDefault()
    newWord = document.querySelector('#searchbox').value;

    if (newWord) {
        fetch(`http://localhost:3000/${newWord}`)
        .then(response => response.json())
        .then(displayResults)
    } else {
        let rand = Math.floor(Math.random() * 3)
        if (rand == 1) {
            fetch(`http://localhost:3000/sport`)
            .then(response => response.json())
            .then(displayResults)
        } else if (rand == 2) {
            fetch(`http://localhost:3000/film`)
            .then(response => response.json())
            .then(displayResults)
        } else {
            fetch(`http://localhost:3000/food`)
            .then(response => response.json())
            .then(displayResults)
        }
    }

    
}

function displayResults(searchArray){

    console.log(searchArray[0]);
    document.getElementById("result-1").textContent = searchArray[0].title;
    document.getElementById("web-1").textContent = searchArray[0].url;
    document.getElementById("desc-1").textContent = searchArray[0].description;
    document.getElementById("link-1").href = searchArray[0].url;

    document.getElementById("result-2").textContent = searchArray[1].title;
    document.getElementById("web-2").textContent = searchArray[1].url;
    document.getElementById("desc-2").textContent = searchArray[1].description;
    document.getElementById("link-2").href = searchArray[1].url;

    document.getElementById("result-3").textContent = searchArray[2].title;
    document.getElementById("web-3").textContent = searchArray[2].url;
    document.getElementById("desc-3").textContent = searchArray[2].description;
    document.getElementById("link-3").href = searchArray[2].url;
    

}
