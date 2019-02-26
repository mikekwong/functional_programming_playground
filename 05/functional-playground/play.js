import { arrayUtils } from '../lib/es8-functional'
const { forEach, map, filter, concatAll, reduce, zip } = arrayUtils

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

let useless = [2, 5, 6, 1, 10]
let result = 0
forEach(useless, value => {
  result += value
})
console.log(result)

console.log(reduce(useless, (acc, val) => acc * val, 1))
console.log(reduce(useless, (acc, val) => acc + val))

let bookDetails = concatAll(
  map(apressBooks2, book => {
    return book.bookDetails
  })
)

let reducedBooks = reduce(
  bookDetails,
  (acc, bookDetail) => {
    let goodReviews =
      bookDetail.reviews[0] != undefined ? bookDetail.reviews[0].good : 0
    let excellentReviews =
      bookDetail.reviews[0] != undefined ? bookDetail.reviews[0].excellent : 0
    return {
      good: acc.good + goodReviews,
      excellent: acc.excellent + excellentReviews
    }
  },
  { good: 0, excellent: 0 }
)

console.log(reducedBooks)

let reviewDetails = [
  {
    id: 111,
    reviews: [{ good: 4, excellent: 12 }]
  },
  {
    id: 222,
    reviews: []
  },
  {
    id: 333,
    reviews: []
  },
  {
    id: 444,
    reviews: [{ good: 14, excellent: 12 }]
  }
]

console.log(zip([1, 2, 3], [4, 5, 6], (x, y) => x + y))

let bookDetails2 = concatAll(
  map(apressBooks2, book => {
    return book.bookDetails
  })
)

// zip the results
let mergedBookDetails = zip(bookDetails2, reviewDetails, (book, review) => {
  if (book.id === review.id) {
    let clone = Object.assign({}, book)
    clone.ratings = review
    return clone
  }
})

console.log(mergedBookDetails)
