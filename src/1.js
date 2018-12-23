const filter = predicate => list => list.filter(predicate)
const isMultipleOf = num => value => value % num === 0
const isMultipleOfThreeOrFive = num => isMultipleOf(3)(num) || isMultipleOf(5)(num)
const rangeFromOne = n => [...Array(n - 1).keys()].map(n => n + 1)

const sum = list => list.reduce(
  (acc, val) => acc + val, 0
)

const pipe = (...fns) => initial => (
  fns.reduce(
    (acc, fn) => fn(acc),
    initial
  )
)

const sumNaturalMultiplesOfThreeOrFive = limit => (
  pipe(
    rangeFromOne,
    filter(isMultipleOfThreeOrFive),
    sum
  )(limit)
)

sumNaturalMultiplesOfThreeOrFive(1000)
