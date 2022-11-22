function getFirstAmountSorted(input1, numberofthings) {
    
    firstResult = input1.sort();
    firstResult = firstResult.slice(0, numberofthings)
    return firstResult;
}


console.log(getFirstAmountSorted(["apples","pears","orange"], 2))