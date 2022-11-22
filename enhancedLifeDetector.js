const ninjaTurtle = Number(process.argv[2]);

if (ninjaTurtle === 0) {
  console.log('alive');
} else if (ninjaTurtle === 1) {
  console.log('flowering');
} else if (ninjaTurtle === 2) {
  console.log('shedding');
} else if (ninjaTurtle === 3) {
  console.log('other');
} else {
  console.log('other');
}