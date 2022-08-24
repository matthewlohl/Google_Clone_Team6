const form = document.querySelector('form')
form.addEventListener('submit', displayResults)



// displayResults = () => {
//     fetch('url')

//     .then(response)

//     .then()
// }


function displayResults(e) {
    e.preventDefault()
    console.log('Results should be displayed')

    const search = document.querySelector('#searchbox').value;
    console.log(search)
}
