function createNode(element) {
    return document.createElement(element)
} //creates the node

function append(parent, el) {
  return parent.appendChild(el)
}//Makes the child

console.log("I live")
const ul = document.getElementById('chuck')
const url = 'https://api.chucknorris.io/jokes/random'



console.log("I live")
function callFetch(){               //Everitime its called new joke is written
    fetch(url)                      
        .then((resp) => resp.json()) 
        .then(function(data) {  
            if(data === null) return 
            const author = data     //We get various attributes from the object
            let li = createNode('li') //use the functions too make html
    
            li.innerHTML = `${author.value}`; //Displays the code 
   
            append(ul, li)
})

    .catch(function(error) {
    console.log(error)
    })
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector("#buttonNoriss").addEventListener("click", (e) => {
        e.preventDefault()
        return callFetch()
       })
}) 
