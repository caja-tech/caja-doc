# Generics

Generics in Cajá allow you to write flexible, reusable code that works across multiple data types without sacrificing type safety. By using generic type parameters, you can define functions, structs, and aliases that can operate on any specified type.

When instantiating a generic type or explicitly calling a generic function, Cajá uses the "turbofish" syntax: `::<T>`.

### The Turbofish Operator and Parsing Performance

Unlike some languages that use simple angle brackets (`<T>`) for function calls and struct instantiations, Cajá uses the turbofish operator (`::`) to disambiguate generic parameters from the less-than (`<`) and greater-than (`>`) boolean operators. 

Because the compiler doesn't have to perform complex lookaheads or backtrack to figure out if an expression like `a < b > c` is a generic instantiation or a sequence of logical comparisons, the turbofish syntax dramatically simplifies the abstract syntax tree (AST) construction. This leads to significantly faster and more predictable parsing performance at compile time.

## Generic Functions

You can define a function that takes one or more generic type parameters using angle brackets `<T>`. This allows the function's arguments or return type to be dynamically resolved based on the type provided at call time.

```caja
# A generic identity function that returns whatever is passed into it
let identity = fn<T>(x: T) -> T {
    return x
}

# Explicitly calling the generic function for different types
let strVal = identity::<String>("hello")
let numVal = identity::<Number>(42)
```

## Generic Structs

Structs can also accept generic type parameters to create reusable data structures, such as lists, wrappers, or trees, that can hold any type of value.

```caja
# Defining a generic Box struct
type Box<T> struct {
    value T
}

# A generic function that instantiates the Box struct
let makeBox = fn<T>(val: T) -> Box<T> {
    return Box::<T> { value: val }
}

# Instantiating the struct with Number
let numberBox = makeBox::<Number>(100)

# Manually instantiating the struct with String
let stringBox = Box::<String> { value: "Cajá" }
```

## Generic Type Aliases

Type aliases can also be generic. This is incredibly useful for aliasing complex generic types—such as specific shapes of maps, arrays, or deeply nested generic structs—to keep your code clean and readable.

```caja
# Aliasing a map with a generic value type
type Dictionary<V> map[String]V

let numberDict: Dictionary<Number> = {}
numberDict["score"] = 99

let stringDict: Dictionary<String> = {}
stringDict["name"] = "Alice"
```
