function transform(arr1) {
    let transformedCargo = [];

    transformedCargo = arr1.map(item => item.toUpperCase());

    return transformedCargo;
}


const cargo = ["apples", "ray guns", "oranges"];

const transformedCargo = transform(cargo);
// transformedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']
console.log(transformedCargo)