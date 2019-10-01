<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta charset="UTF-8" />
            <link rel="stylesheet" href="indexCSS.css">
    </head>
    <body>
        
        <div class="text-title">
            <h1>Chuck Noris joke maker</h1>
            
        </div>

        <div class="text-grid">
        <div class="about-page">
        <h2>What does this page do?</h2>
        <div>
            <p>it's a simple page that with every click displays a joke about the superbeing known as <br> Chuck Norris</p>
        </div>
            
        </div>
        
        
       
        
        <div class="skill">
            
                <h2>This website aims too prove that I am capable of using the following: </h2>
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>API's</li>
            </ul>
        </div>
    </div>
    <div>
    <img src="https://sophosnews.files.wordpress.com/2012/01/chuck-norris-thumb.jpg"/>
    </div>
        
    <h4>Click here too display Chuck Noris joke: </h4>

           
        <div id="chuck"></div>
 
            
    <Container left>
        <Container>
          <Button  id="buttonNoriss">I want another one</Button>
        </Container>
        <script src="indexJS.js"> </script>
    </body>
</html>











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











*,
*::before,
*::after {
  box-sizing: border-box
}

html {
  font-size: 18px;
}

html,
body {
 overflow-x: hidden;
}

body {
  font-size: 1rem;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.text-title {
    font-family: sans-serif;
    
}
.about-page ,
.skill{
  font-size: 15px;
  font-family: sans-serif;
}


.text-grid{
   margin-right: 220px;
   padding-right: 220px;
   font-family: serif;
  }
#buttonNoriss{
  width: 100px;
}
body{
  
  margin-left: 100px;
  margin-right: 100px;
  
  max-width: 1250px;
  min-height: 969px;
}

