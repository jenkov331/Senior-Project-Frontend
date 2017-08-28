import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  let sol;
  if (operation === '+') {
    sol = one.plus(two).toString();
  }
  else if (operation === '-') {
    sol = one.minus(two).toString();
  }
  else if (operation === 'x' || operation === '*') {
    sol = one.times(two).toString();
  }
  else if (operation === '÷' || operation === '/') {
    sol = one.div(two).toString();
  }
  else if (operation === '%') {
    sol = one.mod(two).toString();
  }
  else {
    throw Error(`Unknown operation '${operation}'`);
  }

  if(sol.length > 12){
    if(sol.indexOf('.') !== -1){
      sol = Big(sol).toPrecision(12-sol.indexOf('.')).toString();
    }
  }

  return sol;
}
