# Date Module

The `date` module handles date parsing and manipulation.

## Functions

### `date.today() -> Date`
Returns the current date.
```caja
import date
let t = date.today()
```

### `date.new(year: Number, month: Number, day: Number) -> Date`
Creates a new date from components.
```caja
import date
let d = date.new(2026, 8, 20)
```

### `date.parse(dateStr: String) -> Date`
Parses a string into a date.
```caja
import date
let d = date.parse("2026-08-20")
```

### `date.year(d: Date) -> Number`
Returns the year of the date.
```caja
import date
date.year(date.today())
```

### `date.month(d: Date) -> Number`
Returns the month of the date.
```caja
import date
date.month(date.today())
```

### `date.day(d: Date) -> Number`
Returns the day of the month.
```caja
import date
date.day(date.today())
```

### `date.weekday(d: Date) -> Number`
Returns the day of the week.
```caja
import date
date.weekday(date.today())
```

### `date.addDays(d: Date, days: Number) -> Date`
Adds the specified number of days to a date.
```caja
import date
date.addDays(date.today(), 5)
```

### `date.diffDays(d1: Date, d2: Date) -> Number`
Returns the difference in days between two dates.
```caja
import date
date.diffDays(date.new(2026, 8, 25), date.new(2026, 8, 20)) # 5
```
