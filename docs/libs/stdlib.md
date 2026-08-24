# The `std` Library

Because Cajá intentionally omits imperative looping constructs like `for` and `while` loops, iterating over data requires recursion. While writing recursive functions is standard practice, the `std` library abstracts away the boilerplate of recursion for common iteration patterns.

The `std` module provides `forEach`, `forEachIndexed`, `while`, and `range` functions. Under the hood, these functions rely heavily on optimized tail-call recursion. This allows developers to use familiar iteration abstractions efficiently without mutating loop counters or compromising the declarative nature of the code.

## Installation

::: code-group
```bash [npm]
npm install @caja/std
```
```bash [yarn]
yarn add @caja/std
```
```bash [bun]
bun add @caja/std
```
:::

## Example: Declarative Iteration

```caja
import "@caja/std"
import log

let printNum = fn(x: Number) -> Number {
    log.info("Processing number", x)
    return x
}

# Generate an array from 1 to 5 and declaratively iterate over it
let numbers = std.range(1, 5)
std.forEach(numbers, printNum)
```

## Source Code

```caja
import array

const forEach = fn<T>(arr: [T], procedure: fn(T) -> T) -> Nothing {
    if (array.len(arr) == 0) {
        return
    }

    procedure(arr[0])

    return forEach(array.tail(arr), procedure)
}

private const _forEachIndexed = fn<T>(arr: [T], procedure: fn(T, Number) -> T, index: Number) -> Nothing {
    if (array.len(arr) == 0) {
        return
    }

    procedure(arr[0], index)

    return _forEachIndexed(array.tail(arr), procedure, index + 1)
}

const forEachIndexed = fn<T>(arr: [T], procedure: fn(T, Number) -> T) -> Nothing {
    return _forEachIndexed(arr, procedure, 0)
}

const while = fn<T>(state: T, condition: fn(T) -> Boolean, procedure: fn(T) -> T) -> Nothing {
    if (!condition(state)) {
        return
    }

    let next_state = procedure(state)

    return while(next_state, condition, procedure)
}

private const _range = fn(current: Number, end: Number, acc: [Number]) -> [Number] {
    if (current > end) {
        return acc
    }
    
    let next_acc = array.push(acc, current)
    
    return _range(current + 1, end, next_acc)
}

const range = fn(start: Number, end: Number) -> [Number] {
    return _range(start, end, [])
}
```
