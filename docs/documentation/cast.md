# Cast Module

The `cast` module provides dynamic type casting functionalities.

## Functions

### `cast.to<T, U>(value: T, fallback: U) -> U`
Attempts to cast `value` to the type of `fallback`. If the conversion fails or is unsupported, it returns `fallback`.

```caja
import cast

# String to Number
cast.to("42.5", 0) # 42.5

# Number to String
cast.to(100, "") # "100"

# String to Boolean
cast.to("true", false) # true

# Invalid casting falls back
cast.to("hello", 0) # 0
```
