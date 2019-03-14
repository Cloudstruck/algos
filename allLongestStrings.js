let lengthsArr = [];
let outputArr = [];
let i = 0;
function allLongestStrings(inputArr){

    while(i < inputArr.length){
        lengthsArr[i] = inputArr[i].length;
        i++;
    }
    
    const maxLength = Math.max(...lengthsArr);
    let j = 0;

    while(j < inputArr.length){
        if (inputArr[j].length == maxLength){
            outputArr.push(inputArr[j]);
            j++;
        }
        else {
            console.log('skipping ' + inputArr[j])
            j++;
        }
    }
    
    return outputArr;
}