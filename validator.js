function validatePhoneNumber(input){
  let str = removeSpacesAndKeycode(input)
    , digitsArr = str.split('');

  const openParentheses = digitsArr[0] === '('
      , closeParentheses = digitsArr[4] === ')';
    
  if( openParentheses && closeParentheses ){
    let indexesToRemove = [0 , 3];
    indexesToRemove.map(val => digitsArr.splice(val , 1));
  }
  if(digitsArr.indexOf('-') > -1){
    digitsArr = removeHyphenFormat(digitsArr);
  }
  return validateDigits(digitsArr);
}

function removeSpacesAndKeycode(input){
let str = input.toString().replace(/ /g, '');
  if (str.substr(0, 2) === '+1') {
    str = str.slice(2);
  }
  else if (str.charAt(0) === '1'){
    str = str.slice(1);
  }
return str;
}

function removeHyphenFormat(arr) {
let hyphenIndexes = [ 3 , 6 ];
hyphenIndexes.forEach( hyphenIndex => {
  if(arr[hyphenIndex] === '-'){
    arr.splice(hyphenIndex , 1);
  }
});
return arr;
}

function validateDigits(arr){
let str = arr.join('')
  , numbers = ['0' , '1']
  , indexes = [0 , 3]
  , notValid = arr.some((elm, index) => {
      return ( numbers.indexOf(elm) > -1 )
          && ( indexes.indexOf(index) > -1 )
          || isNaN( parseInt(elm) );
      });
return (str.length === 10) && !notValid;
}

validatePhoneNumber('+1 (469) 403-7000')