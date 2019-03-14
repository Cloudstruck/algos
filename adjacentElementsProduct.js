let i = 0;
function adjacentElementsProduct(inArr){

   let outArr = [];

    while (i < inArr.length - 1){
        outArr[i] = inArr[i] + inArr[i+1];
        i++;
    }

    return Math.max(...outArr);
    
}