const textArea = document.getElementById('text');
const resetBtn = document.querySelector('button');
const outputWords = document.getElementById('word');
const outputSymbols = document.getElementById('symbol');
textArea.addEventListener('keyup', countWordsSymbols);
textArea.addEventListener('click', countWordsSymbols);
resetBtn.addEventListener('click', resetAll)
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function countWordsSymbols() {
  let wordsArray = [];
  let wordCount = 0;
  const reWor = /[\!$\?$\>$\<$\:$\;$\.$\,$\($\)$\s$]/
  wordsArray = textArea.value.split(reWor)
  wordsArray.forEach(function (item) {
    if (item !== '') {
      wordCount++;
    }
  })
  outputWords.innerText = ` 
  You Have ${wordCount} words`
  // console.log(wordsArray)
  // console.log(wordCount)

  let symbolsArray = [];
  let symbolCount = 0;
  const reSym = /\s/;
  symbolsArray = textArea.value.split('')
  symbolsArray.forEach(function (item) {
    if (item != ' ') {
      symbolCount++;
    }
  })
  outputSymbols.innerText = ` 
  You Have ${symbolCount} symbols`;
  console.log(symbolsArray);
  console.log(symbolCount);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function resetAll() {
  textArea.value = '';
  outputWords.innerText = ` 
  You Have 0 words`
  outputSymbols.innerText = ` 
  You Have 0 symbols`
}


