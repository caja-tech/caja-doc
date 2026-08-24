---
title: Financial Calculus
---
# Financial Calculus: Portfolio P&L

Financial systems demand extreme precision, deterministic behavior, and clear auditability. Cajá's pure functions and immutable data pipelines are a perfect fit for this domain. 

In this example, we define a `Loan` struct and calculate the compound interest for an entire portfolio. By isolating the math logic into a pure `calculate_pnl` function, it becomes trivial to map over the portfolio and reduce the results into a total Profit & Loss (P&L) figure.

```caja
import array
import math
import "@caja/query"

type Loan struct {
    id String
    principal Number
    rate Number
    years Number
}

# Pure function to calculate Profit & Loss (P&L) for a single loan
# Formula: A = P(1 + r)^t
let calculate_pnl = fn(loan: Loan) -> Number {
    let final_amount = loan.principal * math.pow(1 + loan.rate, loan.years)
    return final_amount - loan.principal
}

# Reducer to sum up all the P&L values
let sum_pnl = fn(current_pnl: Number, acc: Number) -> Number {
    return acc + current_pnl
}

# A portfolio of active loans
let portfolio: [Loan] = [
    Loan { id: "L001", principal: 10000.00, rate: 0.05, years: 5 },
    Loan { id: "L002", principal: 50000.00, rate: 0.035, years: 10 },
    Loan { id: "L003", principal: 2500.00, rate: 0.12, years: 2 }
]

# Pipeline to calculate total P&L for the entire portfolio
let total_portfolio_pnl = portfolio
    |> query.map(calculate_pnl)
    |> query.reduce(sum_pnl, 0)

return total_portfolio_pnl
```
