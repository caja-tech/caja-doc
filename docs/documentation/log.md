# Log Module

The `log` module provides standard output logging functionality.

## Functions

### `log.info<T>(msg: String, value: T) -> String`
Logs an informational message with a value.
```caja
import log
log.info("Process started", 100)
```

### `log.warn<T>(msg: String, value: T) -> String`
Logs a warning message.
```caja
import log
log.warn("Low memory", "warning")
```

### `log.error<T>(msg: String, value: T) -> String`
Logs an error message.
```caja
import log
log.error("Failed to parse", "invalid syntax")
```

### `log.export<T>(value: T)`
Exports a value, usually to an external collector or output file when running the CLI with `-e`.
```caja
import log
log.export("Result data")
```
