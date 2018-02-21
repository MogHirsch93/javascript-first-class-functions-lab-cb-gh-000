function countdown(callback){
  window.setTimeout(callback(), 2000);
}

function createMultiplier(multiplierValue){
  return function multiplier(a, multiplierValue){
    return a * multiplierValue;
  }
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);
