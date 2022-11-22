const firstValue = process.argv[2].toLowerCase();
const secondValue = process.argv[3].toLowerCase();

function compare(x,y) {
    if (x == y) {
        var result = 0;
        return result;
    };
    if (x < y) {
        var result = -1;
        return result;
    };
    if (x > y) {
        var result = 1;
        return result;
    };

    
};


console.log(compare(firstValue,secondValue));
