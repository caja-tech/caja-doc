# Data Types

The Cajá language is strongly typed, ensuring that data is managed predictably and safely. This page covers the primitive data types, collections, and how to define custom structures.

## Primitive Types

Cajá supports four core primitive types:

- **`Number`**: Represents all numeric values, including both integers and floating-point numbers.
- **`String`**: Represents a sequence of characters, enclosed in double quotes.
- **`Boolean`**: Represents a logical entity and can have two values: `true` or `false`.
- **`Date`**: Represents a specific point in time (usually instantiated and manipulated using the built-in `date` module).

```caja
let count: Number = 42
let birthday: Date = '2002-04-05'
let name: String = "Cajá"
let isActive: Boolean = true
```

## Arrays

An array in Cajá is a collection of elements that share the same type. Array types are denoted by enclosing the element type in square brackets, such as `[String]`.

```caja
let fruits: [String] = ["apple", "banana", "orange"]
let scores: [Number] = [100, 95, 80]
```

### Multidimensional Arrays

You can create 2D arrays (or arrays of any $n$-dimension) by nesting the brackets. For example, a 2D array of strings is typed as `[[String]]`.

```caja
let matrix: [[Number]] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let board: [[String]] = [
    ["X", "O", "X"],
    ["O", "X", "O"]
]
```

## Maps

A map (or dictionary) associates unique keys of one type with values of another type. The type signature for a map is `map[KeyType]ValueType`.

> **Note:** A map in Cajá only accepts three types of keys:
> 1. `String`
> 2. `Number`
> 3. A custom `struct` that contains a `key` property of type `map.KeyFunc` (which has a `fn() -> String` signature).

You can initialize an empty map using `{}` and assign values to it using bracket notation.

```caja
import map

let ages: map[String]Number = {}
ages["Alice"] = 28
ages["Bob"] = 34

let userScores: map[Number]Number = {}
userScores[101] = 99

# Using a struct as a map key
type CustomKey struct {
    key map.KeyFunc
    value String
}

let cache: map[CustomKey]Number = {}
let myKey = CustomKey { 
    key: fn() -> String { return "key_id_1" },
    value: "Some data" 
}

cache[myKey] = 200
```

## Custom Structs

You can define your own compound data types using the `struct` keyword. A struct allows you to group multiple fields of different types together into a single cohesive unit.

```caja
type Person struct {
    name String
    age Number
    isActive Boolean
}

# Instantiating the struct
let p = Person { 
    name: "John Doe", 
    age: 30,
    isActive: true
}

# Accessing properties
let currentAge = p.age
```

## Nullable Types and Safe Navigation

In Cajá, arrays, maps, and custom structs can be made explicitly nullable by appending a `?` to the type name. This signals to the compiler that the variable can hold either a valid instance of the type or `nil`.

```caja
# A nullable custom struct
let s: Person? = nil

# A nullable array
let arr: [String]? = nil

# A nullable map
let m: map[String]Number? = nil
```

### The Safe Navigation Operator (`?.`)

To guarantee memory safety at compile time and permanently eliminate null pointer exceptions at runtime, Cajá requires the use of the safe navigation operator (`?.`) when accessing properties of any nullable type. 

If the value is `nil`, the expression immediately short-circuits and evaluates to `nil` rather than throwing an error. This is especially powerful when cascading property accesses through deeply nested structures.

```caja
type Node struct {
    val Number
    next Node?
}

let n = Node { val: 42, next: nil }

# Reassigning 'next' to another node
n.next = Node { val: 100, next: nil }

# Safely accessing a property from a nullable type
let nextVal = n.next?.val

# Cascading safe navigation through deeply nested nullable properties
let deeplyNestedVal = n.next?.next?.next?.val

if (deeplyNestedVal != nil) {
    # Safe to proceed
}
```
