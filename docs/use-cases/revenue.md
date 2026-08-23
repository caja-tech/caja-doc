---
title: Revenue Calculation
---
# Revenue Calculation

In data-heavy applications, transforming arrays of records efficiently and declaratively is essential. Cajá makes this incredibly straightforward through the combination of **Pure Functions**, **Tail-Call Optimization (TCO)**, and the **Data-First Pipeline** (`|>`) operator.

In this example, we process a list of transactions to calculate the total valid revenue. We define small, predictable pure functions (`is_completed`, `get_amount`) and a tail-recursive function (`apply_discount`) to safely map over data without blowing up the call stack. Finally, we compose them all together into a clean, top-to-bottom pipeline that reads just like a sequence of business rules.

```caja
import array
import query

# Define custom types and structs
type Transaction struct {
    id String
    amount Number
    status String
}

# Pure functions for data transformation
let is_completed = fn(tx: Transaction) -> Boolean {
    return tx.status == "completed"
}

let get_amount = fn(tx: Transaction) -> Number {
    return tx.amount
}

let sum_amounts = fn(current: Number, acc: Number) -> Number {
    return acc + current
}

# Tail call optimized (TCO) recursion example
private const _calculate_discount = fn(prices: [Number], discount_rate: Number, acc: [Number]) -> [Number] {
    if (array.len(prices) == 0) {
        return acc
    }
    
    let discounted = prices[0] * (1 - discount_rate)
    let next_acc = array.push(acc, discounted)
    
    return _calculate_discount(array.tail(prices), discount_rate, next_acc)
}

const apply_discount = fn(prices: [Number], discount_rate: Number) -> [Number] {
    return _calculate_discount(prices, discount_rate, [])
}

# Sample data
let transactions: [Transaction] = [
    Transaction { id: "tx_01", amount: 250.00, status: "completed" },
    Transaction { id: "tx_02", amount: 15.50, status: "pending" },
    Transaction { id: "tx_03", amount: 120.00, status: "completed" },
    Transaction { id: "tx_04", amount: 99.90, status: "failed" },
    Transaction { id: "tx_05", amount: 45.00, status: "completed" }
]

# Declarative data-first pipeline processing
let total_revenue = transactions
    |> query.filter(is_completed)
    |> query.map(get_amount)
    |> apply_discount(0.5)
    |> query.reduce(sum_amounts, 0)

return total_revenue
```
