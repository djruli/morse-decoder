const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
                                    //console.log(expr);
    let result = '';
    let arrSeparated = [];
    let arrayDecoded = [];
    let arrCreated = [];
                                    //console.log('expr.length ' + expr.length);
    for (let i = 0; i = expr.length; i++) {
        let letter = expr.substr(0, 10);
        //console.log(letter);
        arrCreated.push(letter);
        //console.log('expr.length 2 ' + expr.length);
        for (j = 0; j < 10; j++){
            expr = expr.slice(1);
        }   
    }
    console.log('arrCreated ' + arrCreated);
    //console.log(arrCreated);
    for (let h in arrCreated){
        let arrElementToStr = arrCreated[h].toString();
        //console.log('stringed ' + arrElementToStr);

        if ( arrElementToStr !== '**********'){
            let arrElementToNum = parseInt(arrElementToStr);
            console.log(arrElementToNum);
            let arrToStr = arrElementToNum.toString();
            console.log(arrToStr);

                let convertedFromTable = '';
                
                for (let i in MORSE_TABLE){
                    
                   // console.log('i ' + [i])
                    let z = [i].toString();
                    let compareStr
                    let compareStr2
                
                    for (let c = 0; c <= [i].length; c++){
                        compareStr = z.replace('.', '10');
                        z = compareStr;
                        //console.log('inside .10    ' + compareStr); 
                    }
                    for (let d = 0; d <= [i].length; d++){
                        compareStr2 = compareStr.replace('-', '11');
                        compareStr = compareStr2;
                        
                    }
                                    
                    for (let y = 0; y < 10; y++){
                        if (compareStr2.indexOf('.') !== -1 ) {
                          // console.log('inside after    ' + compareStr); 
                                        compareStr2 = compareStr2.replace('.', '10');
                                        
                            //console.log('inside after after   ' + compareStr); 
                                    } else if (compareStr2.indexOf('-') !== -1){
                           compareStr2 = compareStr2.replace('-', '11');
                        }
                    }
                                     
                                //console.log('compareStr2 ' + compareStr2);
                    if ( compareStr2 == arrToStr) {
                        result = result + MORSE_TABLE[i];
                        console.log('result ' + result)
                    }
                }
           
        



        } else {
            result = result + ' '
        }   

        

    }



    return result;
}

module.exports = {
    decode
}