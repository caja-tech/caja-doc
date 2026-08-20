# The `query` Library

The `query` library provides functional data transformation utilities, specifically `map`, `filter`, and `reduce`.

## Installation

::: code-group
```bash [npm]
npm install @caja/query
```
```bash [yarn]
yarn add @caja/query
```
```bash [bun]
bun add @caja/query
```
:::

## A Data-First Approach

In Cajá, data transformation is driven by a **data-first** approach. If you look at the signatures for the `query` functions, you will notice that the data collection (the array) is always passed as the *first* parameter.

This design choice was made to perfectly complement the Cajá pipeline operator (`|>`\). The pipeline operator automatically takes the evaluated expression on its left-hand side and injects it as the very first argument to the function on the right-hand side.

By combining the data-first `query` module with the pipeline operator, you can write expressive, top-to-bottom data transformations that read like natural language.

## Example: The Pipeline in Action

```caja
import stdlib
import query

# Define our pure transformation functions
let isEven = fn(x: Number) -> Boolean { 
    return x % 2 == 0 
}

let double = fn(x: Number) -> Number { 
    return x * 2 
}

let sum = fn(acc: Number, curr: Number) -> Number { 
    return acc + curr 
}

# The data flows from top to bottom, being transformed at each step
let result = stdlib.range(1, 10)
    |> query.filter(isEven)
    |> query.map(double)
    |> query.reduce(sum, 0)
    
# result contains the sum of the doubled even numbers
return result
```

## Source Code

```caja
import array

private const _map = fn<T, K>(arr: [T], transform: fn(T) -> K, acc: [K]) -> [K] {
    if (array.len(arr) == 0) {
        return acc
    }

    let new_item = transform(arr[0])
    let next_acc = array.push(acc, new_item)

    return _map(array.tail(arr), transform, next_acc) 
}

let map = fn<T, K>(arr: [T], transform: fn(T) -> K) -> [K] {
    return _map(arr, transform, [])
}

private const _filter = fn<T>(arr: [T], predicate: fn(T) -> Boolean, acc: [T]) -> [T] {
    if (array.len(arr) == 0) {
        return acc
    }
    
    let is_match = predicate(arr[0])
    if (is_match) {
        return _filter(array.tail(arr), predicate, array.push(acc, arr[0]))
    }
    
    return _filter(array.tail(arr), predicate, acc)
}

const filter = fn<T>(arr: [T], predicate: fn(T) -> Boolean) -> [T] {
    return _filter(arr, predicate, [])
}

private const _reduce = fn<T, K>(arr: [T], reducer: fn(T, K) -> K, current_val: K) -> K {
    if (array.len(arr) == 0) {
        return current_val
    }
    
    let next_val = reducer(arr[0], current_val)
    
    return _reduce(array.tail(arr), reducer, next_val)
}

const reduce = fn<T, K>(arr: [T], reducer: fn(T, K) -> K, seed: K) -> K {
    return _reduce(arr, reducer, seed)
}
```
