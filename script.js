let num = document.querySelector('input#fnum');
let quadro = document.querySelector('select#quadro');  
let res = document.querySelector('div#res');
let vetor = [];
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;        
    } else {
        return false;
    }
} 
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {  // !inLista() está gerando true para o que retornar false de inLista()
        let n = Number(num.value);
        vetor.push(n);
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        quadro.appendChild(item);   
        res.innerHTML = '';  // para limpar o texto na caixa "relatório"              
    } else {
        if(inLista(num.value, vetor) == true){
            alert('Esse número JÁ foi adicionado anteriormente na lista!\nEscolha outro número...');
        } else {
            alert('Digite um número válido para acrescentar ao vetor!');
        }
    }
    num.value = '';  // para limpar o campo, após executar a função, onde inserimos o número
    num.focus();  // para o cursor voltar a ficar ativo no campo onde inseriremos mais números          
}
function gerarRelatorio() {      
    if(vetor.length == 0) {
        alert('Digite um número para gerar o relatório!');
    } else {   
        let total = vetor.length;   
        let maior = vetor[0];
        let menor = vetor[0];
        // let soma = 0;  // se utilizar incrementos na "soma" com += no "for"
        let soma = vetor.reduce((a, b) => a + b, 0)  // ou pode utilizar o método/função .reduce((a,b) => a+b, 0)
        let media = soma/vetor.length
        for(let n in vetor) {
            // soma += vetor[n];  // poderia utilizar essa forma para injetar "soma" no relatório abaixo, ao invés de utilizar o método .reduce((a,b) => a + b, 0)            
            if(vetor[n] > maior) {
                maior = vetor[n];
            }
            if(vetor[n] < menor) {
                menor = vetor[n];
            }
        }   
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${vetor.reduce((a, b) => a + b, 0)}.</p>`
        res.innerHTML += `<p>A média é ${vetor.reduce((a, b) => a + b, 0) / vetor.length}.</p>`           
    }  
}   


      

