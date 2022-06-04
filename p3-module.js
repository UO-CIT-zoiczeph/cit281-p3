/*
    CIT 281 Project 3
    Name: Zoe Turnbull
*/


/* CONSTANTS */

const coinValues = [1, 5, 10, 25, 50, 100];

/* FUNCTIONS */

function validDenomination(coin) {
  //Returns TRUE if coin is a valid value
  return coinValues.indexOf(coin) > 0;
  /* coinInList = coinValues.indexOf(coin);
    if (coinInList > 0) {
        return true
    }
    else {
        return false
    } */
}

function valueFromCoinObject(obj) {
  //Returns calculated value of a single coin object
  let { denom = 0, count = 0 } = obj;
  let valueCount = denom * count;
  return valueCount;
}

function valueFromArray(arr) {
  //Returns sum of coin values in array
  /* TWO OF MY ATTEMPTS AT TRYING TO MAKE THE REDUCE METHOD WORK - KEPT TELLING ME IT WAS NOT A
  FUNCTION AND I COULDN'T FIGURE OUT WHY. LEGIT WATCHED LIKE 2 YOUTUBE VIDEOS AND READ A BUNCH OF ARTICLES.
  IM SURE IM DOING SOMETHING STUPID BUT TO BE FRANK I NEVER PROFESSED TO BE SMART IN THE FIRST PLACE.

  let coinTotal = arr.reduce(
    (addedChange, change) => addedChange + change.reduce(valueFromCoinObject(denom, count)),
    0
    );

  let coinCall = (obj) => obj.reduce(valueFromCoinObject, 0);
    console.log(coinCall);     */

  let coinTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    arrItem = valueFromCoinObject(arr[i]);
    coinTotal = coinTotal + arrItem;
  }
  return coinTotal;
}

function coinCount(...coinage) {
  //Calls valueFromArray and returns result
  return valueFromArray(coinage);
}

/* EXTRA CREDIT TESTING */
console.log("{}", coinCount({ denom: 5, count: 3 }));
console.log("{}s", coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }));
const coins = [
  { denom: 25, count: 2 },
  { denom: 1, count: 7 },
];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));

/* EXPORT */
module.exports = {
  coinCount: function coinCount(...coinage) {
    //Calls valueFromArray and returns result
    console.log(coinage);
    return valueFromArray(coinage);
  }
};