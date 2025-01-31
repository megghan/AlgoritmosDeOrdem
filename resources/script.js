let listNumbers = []
let numDados = 10;
async function generateListNumbers(){

    //verificando se a lista está vazia
    if(listNumbers!=null){
        listNumbers=[];
        //limpar dados anteriores do gráfico, se houver
        document.querySelector(".graph").textContent = "";
    }

    
    for(let i=0; i<numDados; i++){
        let x= Math.floor(Math.random()*400);
        listNumbers.push(x);
    }
    console.log(listNumbers);
    createNumberElement(listNumbers);
}

async function createNumberElement(listNumbers) {
    
    listNumbers.forEach(element => {
        let number = document.createElement("div");
        number.className = "numero";
        number.style.height=element+"px";
        document.querySelector(".graph").appendChild(number);
    });
}

// async function bubbleSort(listNumbers) {
//     if(listNumbers!=null){
//         //
//     }
// }