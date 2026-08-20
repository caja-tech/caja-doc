# Math Module

The `math` module provides standard mathematical constants and pure functions.

## Constants
- `math.PI`: The ratio of a circle's circumference to its diameter.
- `math.E`: Euler's number.
- `math.SQRT2`: The square root of 2.
- `math.LN2`: The natural logarithm of 2.
- `math.LN10`: The natural logarithm of 10.
- `math.LOG2E`: The base-2 logarithm of E.
- `math.LOG10E`: The base-10 logarithm of E.

## Functions

### `math.abs(x: Number) -> Number`
Returns the absolute value of `x`.
```caja
import math
math.abs(-5.5) # 5.5
```

### `math.sqrt(x: Number) -> Number`
Returns the square root of `x`.
```caja
import math
math.sqrt(16) # 4
```

### `math.pow(x: Number, y: Number) -> Number`
Returns `x` raised to the power of `y`.
```caja
import math
math.pow(2, 3) # 8
```

### `math.floor(x: Number) -> Number`
Returns the greatest integer less than or equal to `x`.
```caja
import math
math.floor(4.9) # 4
```

### `math.ceil(x: Number) -> Number`
Returns the smallest integer greater than or equal to `x`.
```caja
import math
math.ceil(4.1) # 5
```

### `math.round(x: Number) -> Number`
Returns the value of `x` rounded to the nearest integer.
```caja
import math
math.round(4.5) # 5
```

### `math.min(x: Number, y: Number) -> Number`
Returns the smaller of two numbers.
```caja
import math
math.min(10, 5) # 5
```

### `math.max(x: Number, y: Number) -> Number`
Returns the larger of two numbers.
```caja
import math
math.max(10, 5) # 10
```

### `math.log(x: Number, base: Number) -> Number`
Returns the logarithm of `x` to the given `base`.
```caja
import math
math.log(100, 10) # 2
```

### `math.rand() -> Number`
Returns a pseudo-random number between 0 and 1.
```caja
import math
math.rand()
```
