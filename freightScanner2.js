function scan(freightItems)  {

    let contrabandIndexes = [];
    let contrabandCurrentIndex= 0;

    freightItems.forEach((element) => {
        
        if (element == "contraband") {
            
            contrabandIndexes.push(contrabandCurrentIndex)
        }
        contrabandCurrentIndex++
    });

    return contrabandIndexes;
}


const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]

