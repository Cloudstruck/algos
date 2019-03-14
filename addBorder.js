function addBorder (arr) {
    const star = '*';
    const breadth = arr[0].length;
    
    for ( i=0 ; i < arr.length ; i++) {
        var inString = arr[i]; 
        arr[i] = inString.padStart(breadth+1, star).padEnd(breadth+2, star);
        
    }
    
    arr.splice(0, 0, star.repeat(breadth+2)); 
    arr.push(star.repeat(breadth+2));
    
    return arr;
}