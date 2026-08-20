# Language Features

Cajá comes with a variety of modern features designed for expressiveness and performance:

### Pure Mathematical Functions
Cajá provides a built-in `math` module for deterministic and pure calculations without side effects.

```caja
import math

let abs_val = math.abs(-5.5) 
let pow_val = math.pow(2, 3) 
let max_val = math.max(10, 5) 
```

### Type Alias
You can create custom aliases for existing types to make your code more domain-specific and readable.

```caja
type Money Number

let add = fn(a: Money, b: Money) -> Money { 
    return a + b 
}
```

### Structs
Structs are used to create custom data types composed of multiple fields.

```caja
type User struct {
    id Number
    name String
}

let u = User { id: 10, name: "Alice" }
return u.id
```

### Inline Functions
Functions can be defined inline anonymously and assigned to variables.

```caja
let multiply = fn(x: Number, y: Number) -> Number {
    return x * y
}
```

### High Order Functions
Cajá treats functions as first-class citizens. You can pass them as arguments to other functions.

```caja
let apply = fn(f: fn(Number) -> Number, x: Number) -> Number {
    return f(x)
}

let double = fn(x: Number) -> Number { return x * 2 }
return apply(double, 5)
```

### Generic Functions
Cajá supports generic type parameters using angle brackets `<T>`. When invoking a generic function explicitly, you can use the turbofish syntax `::<T>`.

```caja
let identity = fn<T>(x: T) -> T {
    return x
}

let str = identity::<String>("hello")
let num = identity::<Number>(42)
```

### Generic Structs
Structs can also be parameterized with generic types to create reusable data structures.

```caja
type Box<T> struct {
    value T
}

let makeBox = fn<T>(val: T) -> Box<T> {
    return Box::<T> { value: val }
}

let numberBox = makeBox::<Number>(100)
```

### Tail Call Optimization
Cajá optimizes recursive function calls. If the last action in a function is a call to itself, the language engine will reuse the current stack frame, preventing stack overflow errors and improving performance.

```caja
let tail_fact = fn(n: Number, acc: Number) -> Number {
    if (n == 0) {
        return acc
    }
    return tail_fact(n - 1, n * acc)
}

return tail_fact(5, 1)
```

### Modules and Built-ins
Cajá provides a rich standard library with built-in modules such as `math`, `string`, `array`, `log`, `date`, and `map`. You can load them using the `import` statement.

```caja
import array
import string
import map

let my_array = [1, 2, 3]
let length = array.len(my_array)

let my_map: map[String]Number = {}
my_map["key"] = 100
```

### Pipeline Operator and Data-First Pipeline
Cajá strongly embraces a **data-first** pipeline design. The pipeline operator (`|>`) automatically rewrites expressions so that the result of the left-hand side is passed as the *first argument* to the right-hand function call. This makes complex data transformations easy to read from top to bottom.

```caja
import array

let isEven = fn(x: Number) -> Boolean {
    return x % 2 == 0
}

let powerTwo = fn(x: Number) -> Number {
    return x ^ 2
}

let add_numbers = fn(acc: Number, current: Number) -> Number {
    return acc + current
}

# Data flows through the pipeline from top to bottom
let result = [1, 2, 3, 4, 5, 6]
    |> array.filter(isEven) 
    |> array.map(powerTwo)
    |> array.reduce(add_numbers, 0)

return result
```
