let arr , str, item

// reduce 

Array.prototype.myReduce = function (callbackFn, initialValue) {
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

arr = [1, 2, 4]
console.log(arr.myReduce((acc, curent) => acc + curent))


//--------------------------

// trim 

String.prototype.myTrim = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== ' ') str += this[i]
  }
  return str
}

str = '  Hi  '
console.log(str.myTrim())

//---------------------------------

//filter 

Array.prototype.myFilter = function (predicateFn) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    if (predicateFn(this[i], i, this)) {
      arr[arr.length] = this[i]
    }
  }
  return arr
}


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr = arr.myFilter((item) => item % 2 === 0)

console.log(arr)

// find 

Array.prototype.myFind = function (predicateFn) {
  for (let i = 0; i < this.length; i++) {
    if (predicateFn(this[i], i, this)) return this[i]
  }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

item = arr.myFind((item) => item % 2 === 0)

console.log(item)

//-------------------------------------------------

// findIndex 

Array.prototype.myFindIndex = function(predicateFn) {
  for (let i = 0; i < this.length; i++) {
    if (predicateFn(this[i], i , this)) {
      return i
    } else {
      return -1
    }
  }
}


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

item = arr.myFind((item) => item % 2 === 0)

console.log(item)

//----------------------------------------------------------

// forEach

Array.prototype.myForEach = function(callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], i , this) 
  }
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArr = []
arr.myForEach((item) => newArr.push(item + 2))

//------------------------------------------------------------

// Map 

Array.prototype.myMap = function(callBack) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr[i] = callBack(this[i], i, this)
  }
  return arr
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

item = arr.myMap((item) => item + 2)

console.log(item)

//--------------------------------------------------------------

// Push 

Array.prototype.myPush = function() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i]
  }
  return this
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

item = arr.myPush(10,11,12)

console.log(item)

//------------------------------------------------------------------------