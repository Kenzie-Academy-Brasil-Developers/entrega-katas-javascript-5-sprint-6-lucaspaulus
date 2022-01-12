// implemente aqui as funções de teste

/************************REVERSE STRING - KATA 1************************* */
//Funções testadoras: 
function testeReverseString1() {
    let result = reverseString("pato");
    let expected = "otap";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testeReverseString1()

  function testeReverseString2() {
    let result = reverseString("patinho");
    let expected = "ohnitap";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testeReverseString2()
////////////////////////////////////////////////////////////////////////////////////

//Função que reverte uma string
function reverseString(string){
    let resultStr = string.split("").reverse().join("")
    return resultStr
}
  
/************************REVERSE SENTENCE - KATA 2************************* */
//Funções testadoras: 
function testReverseSentence1() {
    let result = reverseSentence("eu amo pato");
    let expected = "pato amo eu";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testReverseSentence1()

  function testReverseSentence2() {
    let result = reverseSentence("eu amo patinho");
    let expected = "patinho amo eu";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testReverseSentence2()
/////////////////////////////////////////////////////////////////////////////////

//Função que inverte uma frase
function reverseSentence(sentence){
    let resultSentence = sentence.split(" ").reverse().join(" ")
    return resultSentence
}

/************************MINIUM VALUE - KATA 3************************* */
//Funções testadoras: 
function testMinimumValue1() {
    let result = minimumValue([50,2554,314,454,544,647,747,48,9]);
    let expected = 9
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testMinimumValue1()

  function testMinimumValue2() {
    let result = minimumValue([25,550,1,598,1005,3639]);
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testMinimumValue2()
/////////////////////////////////////////////////////////////////////////////////

//Função que encontra o valor minimo de um array
function minimumValue(arrValues){
    arrValues = arrValues.sort(function(a, b) {
        return a - b;
        
      })
     
    return arrValues[0]
}

/************************MAXIMUM VALUE - KATA 4************************* */
//Funções testadoras: 
function testMaximumValue1() {
    let result = maximumValue([50,2554,314,454,544,647,747,48,9]);
    let expected = 2554
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testMaximumValue1()

  function testMaximumValue2() {
    let result = maximumValue([25,550,1,598,1005,3639]);
    let expected = 3639
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testMaximumValue2()
/////////////////////////////////////////////////////////////////////////////////

//Função que encontra o valor maximo de um array
function maximumValue(arrValues){
    arrValues = arrValues.sort(function(a, b) {
        return a - b;
        
      })
    return arrValues[arrValues.length - 1]
}

/************************CALCULATE REMAINDER - KATA 5************************* */
//Funções testadoras: 
function testCalculateRemainder1() {
    let result = calculateRemainder(10,5);
    let expected = 0
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testCalculateRemainder1()

  function testCalculateRemainder2() {
    let result = calculateRemainder(8,3);
    let expected = 2
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testCalculateRemainder2()
/////////////////////////////////////////////////////////////////////////////////

//Função que encontra o resto de uma divisão
function calculateRemainder(number1, number2){
    let result = number1 % number2
    return result
}


/************************DISTINCT VALUES - KATA 6************************* */
//Funções testadoras: 
function testDistinctValues1() {
    let result = distinctValues('1 3 5 3 7 3 1 1 5');
    let expected = '1 3 5 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testDistinctValues1()

  function testDistinctValues2() {
    let result = distinctValues('1 2 5 2 7 7 1 1 5 8 9');
    let expected = '1 2 5 7 8 9'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testDistinctValues2()
/////////////////////////////////////////////////////////////////////////////////

//Função que encontra o valores distintos de uma lista
function distinctValues(arrNumber){
    let arr = []
    arrNumber = arrNumber.split(" ").sort(function(a, b) {
        return a - b;
        
      })

      for (let i = 0; i < arrNumber.length; i++){
        if (arrNumber[i] !== arrNumber[i + 1]) {
            arr.push(arrNumber[i])
        }
    }

    return arr.join(" ")
}

/************************COUNT VALUES - KATA 7************************* */
//Funções testadoras: 
function testCountValues1() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
  
  }
  testCountValues1()

  function testCountValues2() {
    let result = countValues("1 2 5 2 7 7 1 1 5 8 9");
    let expected = "1(3) 2(2) 5(2) 7(2) 8(1) 9(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
    
  }
  testCountValues2()
/////////////////////////////////////////////////////////////////////////////////

//Função que retorna os valores de uma lista e suas ocorrências
function countValues(string){
    const counter = {}
    let numbers = string.split(" ")
    let result = []

    for(let i = 0; i < numbers.length; i++) {
        let number = numbers[i]
        if (counter[number] === undefined) {
            counter[number] = 1;
        }else{ 
            counter[number]++
        }
    }

    for(let number in counter){
        result.push(`${number}(${counter[number]})`)
    }
    
    return result.join(" ")
}
