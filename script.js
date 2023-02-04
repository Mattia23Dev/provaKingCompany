
//funzione che calcola il moltiplicatore tra i numeri
function getResistenza(num) {
    
    let count = 0;
    while (num >= 10) {
      let result = 1;
      let digits = num.toString().split('');
      for (let i = 0; i < digits.length; i++) {
        result *= parseInt(digits[i]);
      }
      num = result;
      count++;
    }
    return [num, count];
  }
// funzione al click
  function handleClick() {
    let value = document.getElementById('number').value;
    let resultSpan = document.getElementById("result");
    let result = getResistenza(value);
    resultSpan.innerHTML = `Il risultato è ${result[0]} mentre la resistenza è ${result[1]}`;
  }

  //calcola la frequenza di un numero in un array
  function getFrequente(array) {
    let countMap = {};
    let maxCount = 0;
    let frequentNum = array[0];

    for (let i = 0; i < array.length; i++) {
      let num = array[i];
      if (countMap[num] === undefined) {
        countMap[num] = 1;
      } else {
        countMap[num]++;
      }

      if (countMap[num] > maxCount) {
        maxCount = countMap[num];
        frequentNum = num;
      }
    }

    return frequentNum;
  }
// mostra i risultati al click
  function showResult() {
    let input = document.getElementById("inputArray").value;
    let array = input.split(",").map(Number);
    let result = getFrequente(array);
    document.getElementById("resultArray").innerHTML = "Il numero più frequente è: " + result;
  }


  //funzione per i k numeri più frequenti
  function getFrequenti(array, k) {
    let frequency = {};
  
    // Conta la frequenza di ogni numero
    for (let i = 0; i < array.length; i++) {
      if (frequency[array[i]] === undefined) {
        frequency[array[i]] = 1;
      } else {
        frequency[array[i]]++;
      }
  
    }
  
  let arrayFrequenti = [];
  for (let num in frequency) {
    arrayFrequenti.push([num, frequency[num]]);
  }
  arrayFrequenti.sort(function(a, b) {
    return b[1] - a[1];
  });

  // Restituisce i primi k numeri più frequenti
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(arrayFrequenti[i][0]);
  }
  return result;
  }
  
  //al click del bottone esegue la funzione
 function clickArray() {
  let arrayInput = document.getElementById("array-input").value;
  let kInput = document.getElementById("k-input").value;
  let arrayK = arrayInput.split(",").map(num => parseInt(num, 10));
  let result = getFrequenti(arrayK, kInput);
  console.log(result)
  document.getElementById("resultK").innerHTML = `I ${kInput} numeri più frequenti sono:` + result;
};
 