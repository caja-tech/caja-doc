# String Module

The `string` module provides utilities for string manipulation.

## Functions

### `string.charAt(str: String, index: Number) -> String`
Returns the character at the specified index.
```caja
import string
string.charAt("hello", 1) # "e"
```

### `string.substring(str: String, start: Number, end: Number) -> String`
Returns a substring from `start` to `end` index.
```caja
import string
string.substring("hello", 1, 4) # "ell"
```

### `string.concat(str1: String, str2: String) -> String`
Concatenates two strings.
```caja
import string
string.concat("hello ", "world") # "hello world"
```

### `string.split(str: String, separator: String) -> Array`
Splits the string into an array of substrings using the separator.
```caja
import string
string.split("a,b,c", ",") # ["a", "b", "c"]
```

### `string.contains(str: String, search: String) -> Boolean`
Checks if the string contains the search substring.
```caja
import string
string.contains("hello", "ell") # true
```

### `string.startsWith(str: String, search: String) -> Boolean`
Checks if the string starts with the search substring.
```caja
import string
string.startsWith("hello", "he") # true
```

### `string.endsWith(str: String, search: String) -> Boolean`
Checks if the string ends with the search substring.
```caja
import string
string.endsWith("hello", "lo") # true
```

### `string.replace(str: String, old: String, new: String) -> String`
Replaces occurrences of `old` with `new` in the string.
```caja
import string
string.replace("hello", "l", "w") # "hewwo"
```

### `string.toUpper(str: String) -> String`
Converts the string to uppercase.
```caja
import string
string.toUpper("hello") # "HELLO"
```

### `string.toLower(str: String) -> String`
Converts the string to lowercase.
```caja
import string
string.toLower("HELLO") # "hello"
```

### `string.trim(str: String) -> String`
Removes whitespace from both ends of the string.
```caja
import string
string.trim("  hello  ") # "hello"
```

### `string.len(str: String) -> Number`
Returns the length of the string.
```caja
import string
string.len("hello") # 5
```

### `string.join(arr: Array, separator: String) -> String`
Joins elements of an array into a single string using the separator.
```caja
import string
string.join(["a", "b", "c"], "-") # "a-b-c"
```
