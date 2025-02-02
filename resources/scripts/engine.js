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

async function bubbleSort(listNumbers) {
    // implementar func de botao ordenar desabilitado até usuario
    // clicar em gerar os dados


    let totalNumbers = listNumbers.length;
    let elementos = document.querySelectorAll(".numero");

    for(let i=0; i<totalNumbers; i++){
        for(let j=0; j<totalNumbers-i-1; j++){

            elementos[j].style.backgroundColor = "rgb(134, 44, 218)";
            elementos[j + 1].style.backgroundColor = "rgb(134, 44, 218)";
            await new Promise(resolve => setTimeout(resolve, 500));

            if( listNumbers[j] > listNumbers[j+1]){
                let aux = listNumbers[j];
                listNumbers[j] = listNumbers[j+1];
                listNumbers[j+1]= aux;

                await trocaElementos(elementos[j], elementos[j + 1]);
                elementos = document.querySelectorAll(".numero");

            }
            elementos[j].style.backgroundColor = "";
            elementos[j + 1].style.backgroundColor = "";
        }
    }
    console.log(listNumbers);
    
}
async function trocaElementos(elemento1, elemento2) {
    return new Promise(resolve => {
        let parent = elemento1.parentNode;
        // Criando um elemento temporário
        let temp = document.createElement("div");
        parent.insertBefore(temp, elemento1);

        // Troca visual
        parent.insertBefore(elemento1, elemento2);
        parent.insertBefore(elemento2, temp);

        // Remove o temporário
        parent.removeChild(temp);

        setTimeout(resolve, 500);
    });
}