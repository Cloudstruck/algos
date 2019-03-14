function twoDigitAdder(str){

    const arr = str.split('');
    const ans = parseInt(arr[1]) + parseInt(arr[0]);

    return ans;
}