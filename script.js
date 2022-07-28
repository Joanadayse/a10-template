// crie um array com 3 itens do tipo string

 const palavras = ['amor' ,'carinho' , 'linda']

//crie um array com 3 itens tipo numero
 const numero = [6,2 ,-40]

//uma array com string , numero e boleano
 const misturado = [ 'paz, 20 , true']

//uma array sem valor
 const umValor= [1992]

//array sem valor
 const semValor=[]


console.log(palavras.length) //tamanho da array

// acessando indices

console.log('acessando item indice 2',palavras[2])
console.log('acessando item indice 1',palavras[1])
console.log('acessando item indice 0',palavras[0])

// verificando itens do array 3
console.log(misturado.includes(4)) //false
console.log(misturado.includes('paz')) //false
console.log(misturado.includes(true)) //false

// imprimindo item unico da array 4
console.log('item array 4', umValor[0])
console.log('tamanho array 4', umValor.length)

//copia do array 1 usando metodo slice()

const copiaPalavras = palavras.slice()
console.log(palavras)
console.log('copia de palavras:', copiaPalavras)

//adicionando mais um item a copiaPalavras 
copiaPalavras.push('agenda')
console.log(copiaPalavras)

//removendo os itens de indice 2 e 3 do copiaPalavras
console.log('copiaPalavra antes da remoção', copiaPalavras)

copiaPalavras.splice(2,2)
console.log('copiaPalavra depois da remoção', copiaPalavras)

//  em ordem crescente
palavras.sort() 
console.log('palavra string depois da orientação',palavras)
// ordem decrescente
palavras.reverse()
console.log(palavras)


//  remova os itens dos índices 2 e 3 do array copiado.

console.log('array numeros antes da remoção', numero) // 6, 2, -40

numero.splice(2,3)
console.log('array numero depois da remoção', numero) // 6,2

//Ordene o array de Strings e o de Numbers

palavras.sort()
console.log(palavras)
palavras.reverse()
console.log(palavras)

numero.sort()
console.log(numero)
numero.reverse()
console.log(numer)

//1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica.
 const novaArray = [2,8,5,3]

// 2. Imprima no console o array original, depois imprima-o ordenado em ordem crescente. Depois, imprima-o em ordem reversa.

console.log(novaArray)
novaArray.sort()
console.log(novaArray)

novaArray.reverse()
console.log(novaArray)

// // 3. Remova o último item do array, e em seguida, adicione o número 6.
// // 	Depois, remova o número que está no índice 2 do array.
novaArray.pop() 
console.log(novaArray) // 5,8,3

novaArray.push(6)
console.log(novaArray) // 8,5,3,6

novaArray.splice(2,1)
console.log(novaArray) // 8,5,6


