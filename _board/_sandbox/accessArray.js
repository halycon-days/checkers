let arr = ['This is the first element', 'This is the second element', 'This is the last element']
console.log(arr[0])
console.log(arr[1])
console.log(arr[arr.length - 1])

console.log("\n")

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log("\n")

for (let i in arr) {
    console.log(arr[i])
}

console.log("\n")

for (let x of arr) {
    console.log(arr[x])
}

//Why does "for of" loop not working?

let fruits = ['Apple', 'Banana']
console.log(fruits.length)
fruits.forEach(function(item,index,array){console.log(item,index)})