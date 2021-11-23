// reduce 

Array.prototype.reduce = function (callbackFn, initialValue) {
  if (arguments.length < 2) {
    let acc = this[0]
    for (let i = 1; i < this.length; i++) {
      acc = callbackFn(acc, this[i], i, this)
    }
    return acc
  } else {
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
      acc = callbackFn(acc, this[i], i, this)
    }
    return acc
  }
}
 
let arr = [1,2,4]
console.log(arr.reduce((acc, curent) => acc + curent))


//--------------------------


