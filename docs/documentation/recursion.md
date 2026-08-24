# Recursion

In Cajá, recursion is not just an alternative to loops—it is a core language feature that sits at the very heart of the language's design philosophy.

## The Declarative Philosophy

Cajá intentionally omits traditional imperative looping constructs like `for` or `while` loops. The language creator made this design decision to strictly favor a **declarative programming model** over an imperative one. 

In imperative programming, you tell the computer exactly *how* to do something through step-by-step state mutations. In a declarative language like Cajá, you describe *what* you want to compute, expressing logic in terms of data transformations and pure functions. This leads to code that is cleaner, easier to reason about, and free from the mutable state bugs common in standard looping constructs.

Because of this, programmers are highly encouraged to use recursion to perform repetitive operations, build algorithms, or iterate over data structures.

## Tail Call Optimization (TCO)

A common concern with deep recursion in many languages is the risk of a stack overflow. To address this, Cajá implements **Tail Call Optimization (TCO)** at runtime.

When the last action of a function is a call to itself (a "tail call"), the Cajá runtime optimizes the execution by reusing the current stack frame. This means a tail-recursive function can iterate millions of times without consuming any additional memory for call stacks, making it just as memory-efficient as an imperative loop under the hood.

### Example: Standard vs. Tail Recursion

Consider a function to calculate a factorial. A standard recursive approach evaluates the multiplication *after* the recursive call returns, which prevents the runtime from optimizing the stack:

```caja
# Standard Recursion (Not optimized)
let fact = fn(n: Number) -> Number {
    if (n <= 1) {
        return 1
    }
    # The multiplication happens AFTER the recursive call returns
    return n * fact(n - 1)
}
```

To take full advantage of Cajá's TCO, you should structure your function so that the recursive call is the absolute last operation. You can achieve this by passing an accumulator parameter to hold the running total:

```caja
# Tail Call Recursion (Optimized)
let tail_fact = fn(n: Number, acc: Number) -> Number {
    if (n <= 1) {
        return acc
    }
    # The recursive call is the absolute last operation
    return tail_fact(n - 1, n * acc)
}

# Call it with an initial accumulator of 1
let result = tail_fact(5, 1) # Returns 120
```

## Benefits of Recursion in Cajá

1. **Immutability by Default**: Because there are no loop counters being mutated (like `i = i + 1`), state is explicitly passed as function arguments. This makes data flow completely predictable.
2. **Mathematical Elegance**: Algorithms often map perfectly to recursive mathematical definitions, making the code self-documenting and expressive.
3. **Runtime Safety**: Coupled with TCO, your code avoids both out-of-bounds array errors (common in `for` loops) and stack overflows, achieving robust runtime safety.
