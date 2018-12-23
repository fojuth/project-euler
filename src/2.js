const filter = predicate => list => list.filter(predicate)
const isEven = value => value % 2 === 0
const isValid = (boundary, n) => n < boundary

const sum = list => list.reduce(
  (acc, val) => acc + val, 0
)

const pipe = (...fns) => initial => (
  fns.reduce(
    (acc, fn) => fn(acc),
    initial
)
)

const fibonacciSequence = (cache, n) => [1, 2].indexOf(n) != -1 ? 1 : fibonacciCached(cache)(n - 1) + fibonacciCached(cache)(n - 2)

const fibonacciCached = (cache = {}) => n => (
  cache[n] = cache[n] || fibonacciSequence(cache, n)
)

const fibonacciSequenceUpTo = boundary => {
  let n = 0, i = 1, sequence = []
  const fibonacci = fibonacciCached()

  while (isValid(boundary, n)) {
    n = fibonacci(i)

    if (isValid(boundary, n)) {
      sequence.push(n)

      i++
    }
  }

  return sequence
}

pipe(
  fibonacciSequenceUpTo,
  filter(isEven),
  sum
)(4000000)
