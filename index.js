function countdown(callback){
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
  return function multiplier(a){
    return a * multiplierValue;
  }
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

function multiplier(multiplierValue, value){
  return multiplierValue * value;
}

let doublerWithBind = doubler.bind(multiplier());
let triplerWithBind = multiplier.bind(null, 3);
