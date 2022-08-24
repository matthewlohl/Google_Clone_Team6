const form = document.querySelector('form')
form.addEventListener('submit', grabSearch)

const searchTerm = window.location.search
var newWord = searchTerm.slice(searchTerm.search('=')+1)
console.log(newWord)
document.querySelector('#searchbox').value = newWord;



// displayResults = () => {
//     fetch('url')

//     .then(response)

//     .then()
// }



function grabSearch(e) {
    e.preventDefault()
    console.log('grabbing your search')

    // const search = document.querySelector('#searchbox').value;
    console.log(`You typed ${newWord}`)
        fetch(`http://localhost:3000/${newWord}`)

        .then(response => response.text())

        .then(displayResults)
}

// function displayResults(){
//     const 

// }
