# Map Module

The `map` module provides utilities for map (dictionary) operations.

## Functions

### `map.containsKey<K, V>(m: map[K]V, key: K) -> Boolean`
Checks if the map contains the specified key.
```caja
import map
let m: map[String]Number = {}
m["a"] = 1
map.containsKey(m, "a") # true
```

### `map.delete<K, V>(m: map[K]V, key: K) -> map[K]V`
Returns a new map with the specified key removed.
```caja
import map
let m: map[String]Number = {}
m["a"] = 1
m = map.delete(m, "a")
```
