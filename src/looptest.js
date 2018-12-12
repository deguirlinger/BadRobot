// function blah(input){
//   var finalArr = []
//   let array = input.split('')
//   for(let i = 0; i < array.length; i += 3)
//     finalArr.push("B")
//   for(let i = 1; i < array.length; i += 3)
//     finalArr.push("L")
//   for(let i = 2; i < array.length; i += 3)
//     finalArr.push("A")
//   for(let i = 3; i < array.length; i += 3)
//     finalArr.push("H")
// }

function blah(str) {
  var newArr = []
  arr = str.split("")
  for (i = 0; i < arr.length; i++) {
    if (i % 4 === 0) {
      newArr.push("B")
    } else if (i % 4 === 1) {
      newArr.push("L")
    } else if (i % 4 === 2) {
      newArr.push("A")
    } else {
      newArr.push("H")
    }
  }
  return newArr.join("")
}

console.log(blah("lahgekaghdfdfssdf"))
