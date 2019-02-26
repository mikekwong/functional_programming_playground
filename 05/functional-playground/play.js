import { arrayUtils } from '../lib/es8-functional'
const { map, filter, concatAll } = arrayUtils

// console.log(map([1, 2, 3], x => x * x))

let apressBooks = [
  {
    id: 111,
    title: 'C# 6.0',
    author: 'ANDREW TROELSEN',
    rating: [4.7],
    reviews: [{ good: 4, excellent: 12 }]
  },
  {
    id: 222,
    title: 'Efficient Learning Machines',
    author: 'Rahul Khanna',
    rating: [4.5],
    reviews: []
  },
  {
    id: 333,
    title: 'Pro AngularJS',
    author: 'Adam Freeman',
    rating: [4.0],
    reviews: []
  },
  {
    id: 444,
    title: 'Pro ASP.NET',
    author: 'Adam Freeman',
    rating: [4.2],
    reviews: [{ good: 14, excellent: 12 }]
  }
]

// get only title and author fields
let resultOfTitleName = map(apressBooks, book => {
  return { title: book.title, author: book.author }
})

console.log(resultOfTitleName)

let filteredBooks = filter(apressBooks, book => book.rating[0] > 4.5)
console.log(filteredBooks)

// chaining
// get title and author whose rating is above 4.5
let goodRatingBooks = filter(apressBooks, book => book.rating[0] > 4.5)

console.log(
  'Good Rated books',
  map(goodRatingBooks, book => {
    return { title: book.title, author: book.author }
  })
)

let mappedFilterCombined = map(
  filter(apressBooks, book => book.rating[0] > 4.5),
  book => {
    return { title: book.title, author: book.author }
  }
)
console.log(mappedFilterCombined)

// modified data structure.
let apressBooks2 = [
  {
    name: 'beginners',
    bookDetails: [
      {
        id: 111,
        title: 'C# 6.0',
        author: 'ANDREW TROELSEN',
        rating: [4.7],
        reviews: [{ good: 4, excellent: 12 }]
      },
      {
        id: 222,
        title: 'Efficient Learning Machines',
        author: 'Rahul Khanna',
        rating: [4.5],
        reviews: []
      }
    ]
  },
  {
    name: 'pro',
    bookDetails: [
      {
        id: 333,
        title: 'Pro AngularJS',
        author: 'Adam Freeman',
        rating: [4.0],
        reviews: []
      },
      {
        id: 444,
        title: 'Pro ASP.NET',
        author: 'Adam Freeman',
        rating: [4.2],
        reviews: [{ good: 14, excellent: 12 }]
      }
    ]
  }
]

console.log(
  map(apressBooks2, book => {
    return book.bookDetails
  })
)

console.log(
  concatAll(
    map(apressBooks2, book => {
      return book.bookDetails
    })
  )
)

let goodRatingCriteria = book => book.rating[0] > 4.5
console.log(
  filter(
    concatAll(
      map(apressBooks2, book => {
        return book.bookDetails
      })
    ),
    goodRatingCriteria
  )
)
