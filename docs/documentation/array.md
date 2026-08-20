# Array Module

The `array` module provides utilities for array manipulation. All functions in this module are generic and work with arrays of any type `[T]`.

## Functions

### `array.len<T>(arr: [T]) -> Number`
Returns the number of elements in the array.
```caja
import array
array.len([1, 2, 3]) # 3
```

### `array.push<T>(arr: [T], item: T) -> [T]`
Appends an item to the end of the array and returns the new array.
```caja
import array
array.push([1, 2], 3) # [1, 2, 3]
```

### `array.pop<T>(arr: [T]) -> [T]`
Removes the last item from the array and returns the new array.
```caja
import array
array.pop([1, 2, 3]) # [1, 2]
```

### `array.head<T>(arr: [T]) -> T`
Returns the first element of the array.
```caja
import array
array.head([1, 2, 3]) # 1
```

### `array.tail<T>(arr: [T]) -> [T]`
Returns a new array containing all elements except the first.
```caja
import array
array.tail([1, 2, 3]) # [2, 3]
```

### `array.last<T>(arr: [T]) -> T`
Returns the last element of the array.
```caja
import array
array.last([1, 2, 3]) # 3
```

### `array.copy<T>(arr: [T]) -> [T]`
Returns a shallow copy of the array.
```caja
import array
array.copy([1, 2, 3]) # [1, 2, 3]
```

### `array.slice<T>(arr: [T], start: Number, end: Number) -> [T]`
Returns a section of the array from `start` index to `end` index (exclusive).
```caja
import array
array.slice([10, 20, 30, 40], 1, 3) # [20, 30]
```

### `array.join<T>(arr1: [T], arr2: [T]) -> [T]`
Concatenates two arrays of the same type into a single new array.
```caja
import array
array.join([1, 2], [3, 4]) # [1, 2, 3, 4]
```
