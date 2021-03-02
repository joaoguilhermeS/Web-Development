let testingQuery = window.document.querySelector('div#box1');

testingQuery.addEventListener('click',clicar);

function clicar(){
    if(testingQuery.style.background == "red"){
        testingQuery.style.background = "blue";
    }
    else{
        testingQuery.style.background = "red";
    }
}

const printName = (name = "Anonymous") => "Hello " + name;





