function isInsertedStringASubsequenceOfTheAlphabet(arg){

    const theAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
    const inputArray = arg.split('');

    const inputArrayLength = inputArray.length;
   
    let trialInputArray = arg.split('');

    let results = [];
  
    trialInputArray.pop();

    trialInputArray.forEach(function(item, index, array){

        let itemIndexInAlphabet = theAlphabet.indexOf(item);
        
        let trialReference = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].splice(itemIndexInAlphabet+1, 25);

        results[index] = trialReference.includes(inputArray[index+1]);

    });

    return (results.includes(false) ? false : true);

};