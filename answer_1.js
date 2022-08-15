// Solution 1

let input = [1, 2, 3, 4, 5]

let even = input.filter(i => i%2 == 0).reduce(i => i+1, 0)

let odd = input.filter(i => i%2 != 0 && i != 5).reduce(i => i+3, 0)

let five = input.filter(i => i == 5).reduce((a, b) => a+b, 0)

console.log(even+odd+five)

// Solution 2

let input = [1, 2, 3, 4, 5]

let counter = 0

for (let i = 0; i < input.length; i++) {
  if (input[i]%2 == 0)
    counter += 1
  else if (input[i]%2 != 0 && input[i] != 5)
    counter += 3
  else if (input[i] == 5)
    counter += 5
}

console.log(counter)