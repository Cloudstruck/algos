const tag = 'i';
let measureArr = [];
let i = 0;

function almostIncreasingSequence(inputArr){

    while( i < inputArr.length - 1 ) {

      if( inputArr[i] >= inputArr[i+1] )  {
        measureArr.push(tag);
      }

      i++

    }

      if (measureArr.length == 0 || measureArr.length == 1){
          return true;
      }
      else {
          return false;
      }
}