#HTML#
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8" />
            <link rel="stylesheet" href="indexCSS.css">
    </head>
    <body>
        
        <div class="text-title">
            <h1>Hello</h1>
            <p>This is my small project too learn html, css, git and JS(vannila)</p>
        </div>

        <div class="text-grid">
        <div class="about-page">
        <h3>What does this page do?</h3>
            <p>it's a simple page that with every click displays a picture of superbeing Chuck Norris</p>
        </div>
        
        
       
        
        <div class="skill">
                <h3>This is will show that I have foundational knowledge in the following:</h3>
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>Git</li>
            </ul>
        </div>
    </div>
    <div>
    <img src="https://sophosnews.files.wordpress.com/2012/01/chuck-norris-thumb.jpg"/>
    </div>
        
    <h4>Click here too display Chuck Noris joke</h4>

           
        <div id="chuck"></div>
 
    <button id="buttonNoriss" type="button">
        I want another one
    </button>
            
        <script src="indexJS.js"> </script>
    </body>
</html>

//JS

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

//CSS


.text-title {
    color: black;
    text-align: center;
    background-color: #FF851B;
}




.Chuck-box{
    border: 5px solid green;
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }


.text-grid{
   
   margin-right: 220px;
   padding-right: 220px;
  }
