// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// ----------

console.log("%c%s", "color:black; font-size:16px; font-weight:bold;", "\nPeople")
console.table(people)

// Some and Every Checks
const currentYear = new Date().getFullYear()

// Array.prototype.some() // is at least one person 19 or older?
const nineteenOrOlder = people.some(person => currentYear - person.year >= 19)

console.log("%c%s", "color:black; font-size:14px;", "\nIs at least one person 19 or older?")
console.log(
  "%c%s",
  "color:dark-gray; font-size:12px;",
  nineteenOrOlder
    ? ' Yep! There is at least one person 19 or older.'
    : ' Nope! There is not a single person 19 or older.'
)

// Array.prototype.every() // is everyone 19 or older?
const isEveryoneNineteenOrOlder = people.every(person => currentYear - person.year >= 19)

console.log("%c%s", "color:black; font-size:14px;", "\nIs everyone 19 or older?")
console.log(
  "%c%s",
  "color:dark-gray; font-size:12px;",
  isEveryoneNineteenOrOlder
    ? ' Yep! Everyone is 19 or older.'
    : ' Nope! Not everyone is 19 or older.'
)

// ----------

console.log("%c%s", "color:black; font-size:16px; font-weight:bold;", "\nComments")
console.table(comments)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentWithId = comments.find(comment => comment.id === 823423)
console.log("%c%s", "color:black; font-size:14px; font-style:italic;", "\n- Find the comment with the ID of 823423")
console.table([commentWithId])

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const indexToRemove = comments.findIndex(comment => comment.id === 823423)
const newComments = [
  ...comments.slice(0, indexToRemove),
  ...comments.slice(indexToRemove + 1)
]
console.log("%c%s", "color:black; font-size:14px; font-style:italic;", "\n- Delete the comment with the ID of 823423")
console.table(newComments)