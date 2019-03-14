function addTwoDigits(arg){

    let results = [0, 0];

    arg.forEach ( function (a, b) {

        b % 2 ? results[0] = results[0] + a : results[1] = results[1] + a

    } ) ;

    return results;

}