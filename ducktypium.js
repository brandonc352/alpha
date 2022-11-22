class Ducktypium {

    // your code here
    
    constructor(color) {
        if (color === ("red")||color === ("blue")||color === ("yellow")) {
            this.color = color
        }
        else {
            throw Error("Color must be red, yellow, or blue!")
        }
        
        this.calibrationSequence = []   
    }   

    // your code here

    refract(x) {
        if (this.color == 'red' &&  x == 'blue') {
            return 'purple'
        }
        if (this.color == 'red' &&  x == 'yellow') {
            return 'orange'
        }
        if (this.color == 'red' &&  x == 'red') {
            return 'red'
        }
        if (this.color == 'yellow' &&  x == 'red') {
            return 'green'
        }
        if (this.color == 'yellow' &&  x == 'blue') {
            return 'green'
        }
        if (this.color == 'yellow' &&  x == 'yellow') {
            return 'green'
        }
        if (this.color == 'blue' &&  x == 'red') {
            return 'purple'
        }
        if (this.color == 'blue' &&  x == 'yellow') {
            return 'green'
        }
        if (this.color == 'blue' &&  x == 'blue') {
            return 'blue'
        }
    }

    calibrate(y) {

        let calibrationSequence = [];
        this.calibrationSequence = y.sort().map(item =>  item * 3);

       return this.calibrationSequence;
        

        
    }


    
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  const dt = new Ducktypium("red");
  
  console.log(dt.color); // prints 'red'
  
  console.log(dt.refract("blue")); // prints 'purple'
  console.log(dt.refract("red")); // prints 'red'
  
  dt.calibrate([3, 5, 1]);
  
  console.log(dt.calibrationSequence); // prints [3, 9, 15]